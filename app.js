// ====================================================
// JavaScript Semester Exam Portal - Core Application Logic
// ====================================================

(function() {
  'use strict';

  // --- Global Application State ---
  const state = {
    questions: EXAM_DATA.questions,
    currentIndex: 0,
    userResponses: {}, // questionId -> answer
    questionStatus: {}, // questionId -> 'not_visited' | 'unanswered' | 'answered' | 'review' | 'answered_review'
    mode: 'exam', // 'exam' | 'practice'
    timerSeconds: EXAM_DATA.durationMinutes * 60,
    timerInterval: null,
    isTimerPaused: false,
    activeTopicFilter: 'all', // 'all' | 0 | 1 | 2 | 3 | 4 | 5 | 'bonus'
    filteredIndices: [],
    theme: 'dark'
  };

  // --- DOM Elements Cache ---
  const DOM = {
    // Header
    timerDisplay: document.getElementById('timer-display'),
    modeExamBtn: document.getElementById('mode-exam-btn'),
    modePracticeBtn: document.getElementById('mode-practice-btn'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    btnSubmitExam: document.getElementById('btn-submit-exam'),
    topicsNavBar: document.getElementById('topics-nav-bar'),
    
    // Question Card
    qCard: document.getElementById('question-card'),
    badgeNum: document.getElementById('badge-num'),
    badgeTopic: document.getElementById('badge-topic'),
    badgeWeightage: document.getElementById('badge-weightage'),
    badgeDifficulty: document.getElementById('badge-difficulty'),
    badgeType: document.getElementById('badge-type'),
    btnFlagReview: document.getElementById('btn-flag-review'),
    qTitle: document.getElementById('question-title'),
    qPrompt: document.getElementById('question-prompt'),
    codeContainer: document.getElementById('code-container'),
    codeBlock: document.getElementById('code-block'),
    btnCopyCode: document.getElementById('btn-copy-code'),
    answerArea: document.getElementById('answer-area'),
    explanationContainer: document.getElementById('explanation-container'),
    
    // Navigation Buttons
    btnPrev: document.getElementById('btn-prev'),
    btnClear: document.getElementById('btn-clear'),
    btnReviewNext: document.getElementById('btn-review-next'),
    btnSaveNext: document.getElementById('btn-save-next'),
    btnCheckAns: document.getElementById('btn-check-ans'),
    
    // Palette & Stats
    statAnswered: document.getElementById('stat-answered'),
    statRemaining: document.getElementById('stat-remaining'),
    statReview: document.getElementById('stat-review'),
    qButtonsGrid: document.getElementById('q-buttons-grid'),
    
    // Scratchpad
    scratchpadToggle: document.getElementById('scratchpad-toggle'),
    scratchpadBody: document.getElementById('scratchpad-body'),
    scratchpadCode: document.getElementById('scratchpad-code'),
    btnRunScratchpad: document.getElementById('btn-run-scratchpad'),
    btnClearScratchpad: document.getElementById('btn-clear-scratchpad'),
    scratchpadOutput: document.getElementById('scratchpad-output'),
    
    // Modals
    confirmModal: document.getElementById('confirm-modal'),
    modalAnsweredCount: document.getElementById('modal-answered-count'),
    modalRemainingCount: document.getElementById('modal-remaining-count'),
    modalReviewCount: document.getElementById('modal-review-count'),
    btnCancelSubmit: document.getElementById('btn-cancel-submit'),
    btnFinalSubmit: document.getElementById('btn-final-submit'),
    
    resultModal: document.getElementById('result-modal'),
    resultScorePercent: document.getElementById('result-score-percent'),
    resultMarksDetail: document.getElementById('result-marks-detail'),
    resultGradeBanner: document.getElementById('result-grade-banner'),
    resultAccuracy: document.getElementById('result-accuracy'),
    topicBreakdownList: document.getElementById('topic-breakdown-list'),
    btnReviewQuestions: document.getElementById('btn-review-questions'),
    btnRetakeExam: document.getElementById('btn-retake-exam'),
    btnPrintScorecard: document.getElementById('btn-print-scorecard')
  };

  // --- Initialization ---
  function init() {
    loadSavedSession();
    renderTopicsNavigation();
    buildQuestionPalette();
    updateFilteredQuestions();
    renderCurrentQuestion();
    startTimer();
    attachEventListeners();
    updateStatsSummary();
  }

  // --- Session Persistence ---
  function saveSession() {
    try {
      const sessionData = {
        userResponses: state.userResponses,
        questionStatus: state.questionStatus,
        mode: state.mode,
        timerSeconds: state.timerSeconds,
        currentIndex: state.currentIndex
      };
      localStorage.setItem('js_exam_portal_state', JSON.stringify(sessionData));
    } catch (e) {
      console.warn('Could not save session to localStorage:', e);
    }
  }

  function loadSavedSession() {
    try {
      const saved = localStorage.getItem('js_exam_portal_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        state.userResponses = parsed.userResponses || {};
        state.questionStatus = parsed.questionStatus || {};
        state.mode = parsed.mode || 'exam';
        state.timerSeconds = parsed.timerSeconds || (EXAM_DATA.durationMinutes * 60);
        state.currentIndex = parsed.currentIndex || 0;
      }
    } catch (e) {
      console.warn('Could not load session from localStorage:', e);
    }
    
    // Initialize default status if empty
    state.questions.forEach(q => {
      if (!state.questionStatus[q.id]) {
        state.questionStatus[q.id] = 'not_visited';
      }
    });

    if (state.mode === 'practice') {
      DOM.modePracticeBtn.classList.add('active');
      DOM.modeExamBtn.classList.remove('active');
    }
  }

  // --- Timer Engine ---
  function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      if (!state.isTimerPaused && state.mode === 'exam') {
        state.timerSeconds--;
        updateTimerDisplay();

        if (state.timerSeconds <= 0) {
          clearInterval(state.timerInterval);
          alert('Time has expired! Submitting your exam automatically.');
          submitExam();
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timerSeconds / 60);
    const secs = state.timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    DOM.timerDisplay.textContent = formatted;

    const container = DOM.timerDisplay.parentElement;
    if (state.timerSeconds <= 300) { // under 5 mins
      container.className = 'timer-container danger';
    } else if (state.timerSeconds <= 600) { // under 10 mins
      container.className = 'timer-container warning';
    } else {
      container.className = 'timer-container';
    }
  }

  // --- Topic Navigation Bar ---
  function renderTopicsNavigation() {
    DOM.topicsNavBar.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = 'topic-chip active';
    allBtn.textContent = `All (${EXAM_DATA.totalQuestions})`;
    allBtn.dataset.topic = 'all';
    DOM.topicsNavBar.appendChild(allBtn);

    EXAM_DATA.topics.forEach(t => {
      const chip = document.createElement('button');
      chip.className = `topic-chip ${t.code === 'bonus' ? 'bonus-chip' : ''}`;
      chip.textContent = `${t.name.split('.')[1] ? t.name.split('.')[1].trim() : t.name} (${t.questions}Q • ${t.weightage})`;
      chip.dataset.topic = t.id === 6 ? 'bonus' : t.id;
      DOM.topicsNavBar.appendChild(chip);
    });
  }

  // --- Filter and Question Selection ---
  function updateFilteredQuestions() {
    if (state.activeTopicFilter === 'all') {
      state.filteredIndices = state.questions.map((_, i) => i);
    } else if (state.activeTopicFilter === 'bonus') {
      state.filteredIndices = state.questions
        .map((q, i) => q.isBonus ? i : -1)
        .filter(i => i !== -1);
    } else {
      const topicIdNum = Number(state.activeTopicFilter);
      state.filteredIndices = state.questions
        .map((q, i) => (!q.isBonus && q.topicId === topicIdNum) ? i : -1)
        .filter(i => i !== -1);
    }
  }

  // --- Palette Grid Construction ---
  function buildQuestionPalette() {
    DOM.qButtonsGrid.innerHTML = '';

    state.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'q-btn';
      btn.id = `palette-btn-${q.id}`;
      btn.textContent = q.id;
      if (q.isBonus) btn.classList.add('status-bonus');

      btn.addEventListener('click', () => {
        saveCurrentQuestionState();
        state.currentIndex = idx;
        renderCurrentQuestion();
      });

      DOM.qButtonsGrid.appendChild(btn);
    });

    updatePaletteStyles();
  }

  function updatePaletteStyles() {
    state.questions.forEach((q, idx) => {
      const btn = document.getElementById(`palette-btn-${q.id}`);
      if (!btn) return;

      btn.className = 'q-btn';
      if (q.isBonus) btn.classList.add('status-bonus');
      if (idx === state.currentIndex) btn.classList.add('current');

      const status = state.questionStatus[q.id];
      if (status === 'answered') {
        btn.classList.add('status-answered');
      } else if (status === 'unanswered') {
        btn.classList.add('status-unanswered');
      } else if (status === 'review') {
        btn.classList.add('status-review');
      } else if (status === 'answered_review') {
        btn.classList.add('status-ans-review');
      }
    });
  }

  // --- Question Display Logic ---
  function renderCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    // Update status to unanswered if it was not visited
    if (state.questionStatus[q.id] === 'not_visited') {
      state.questionStatus[q.id] = 'unanswered';
    }

    // Set Card bonus glow if bonus question
    if (q.isBonus) {
      DOM.qCard.classList.add('bonus-card');
    } else {
      DOM.qCard.classList.remove('bonus-card');
    }

    // Set Badges
    DOM.badgeNum.textContent = `Q ${q.id} of ${state.questions.length}`;
    DOM.badgeTopic.textContent = q.topicName;
    DOM.badgeWeightage.textContent = `+${q.weightage} Marks`;
    DOM.badgeDifficulty.textContent = q.difficulty;
    DOM.badgeDifficulty.className = `badge-difficulty ${
      q.difficulty === 'Basic' ? 'diff-basic' : 
      q.difficulty === 'Medium' ? 'diff-medium' : 'diff-bonus'
    }`;

    // Format type badge text
    const typeLabels = {
      single_choice: 'Multiple Choice (Single)',
      multiple_choice: 'Multiple Select (MSQ)',
      output_prediction: 'Code Output Prediction',
      fill_blank: 'Fill in the Blank',
      true_false: 'True / False',
      bug_spot: 'Spot the Bug / Error Analysis'
    };
    DOM.badgeType.textContent = typeLabels[q.type] || q.type;

    // Review flag state
    const isReview = (state.questionStatus[q.id] === 'review' || state.questionStatus[q.id] === 'answered_review');
    DOM.btnFlagReview.classList.toggle('active', isReview);

    // Question Texts
    DOM.qTitle.textContent = q.title;
    DOM.qPrompt.textContent = q.question;

    // Code snippet
    if (q.code) {
      DOM.codeContainer.style.display = 'block';
      DOM.codeBlock.textContent = q.code;
    } else {
      DOM.codeContainer.style.display = 'none';
      DOM.codeBlock.textContent = '';
    }

    // Render Answer input interface based on type
    renderAnswerInput(q);

    // Hide or render explanation in Practice mode
    DOM.explanationContainer.innerHTML = '';
    if (state.mode === 'practice' && state.userResponses[q.id] !== undefined) {
      showExplanation(q);
    }

    // Nav button state
    DOM.btnPrev.disabled = (state.currentIndex === 0);
    DOM.btnSaveNext.textContent = (state.currentIndex === state.questions.length - 1) ? 'Finish & Review' : 'Save & Next →';
    DOM.btnCheckAns.style.display = (state.mode === 'practice') ? 'flex' : 'none';

    updatePaletteStyles();
    updateStatsSummary();
    saveSession();
  }

  // --- Render Answer Inputs According to Type ---
  function renderAnswerInput(q) {
    DOM.answerArea.innerHTML = '';
    const currentAns = state.userResponses[q.id];

    if (q.type === 'single_choice' || q.type === 'output_prediction' || q.type === 'bug_spot') {
      const list = document.createElement('div');
      list.className = 'options-list';

      q.options.forEach((optText, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        if (currentAns === optIdx) item.classList.add('selected');

        const letter = String.fromCharCode(65 + optIdx);
        item.innerHTML = `
          <div class="option-marker">${letter}</div>
          <div class="option-content">${escapeHTML(optText)}</div>
        `;

        item.addEventListener('click', () => {
          state.userResponses[q.id] = optIdx;
          updateQuestionAnswerStatus(q.id);
          renderAnswerInput(q);
          if (state.mode === 'practice') showExplanation(q);
        });

        list.appendChild(item);
      });

      DOM.answerArea.appendChild(list);
    } 
    else if (q.type === 'multiple_choice') {
      const list = document.createElement('div');
      list.className = 'options-list';
      const selectedIndices = Array.isArray(currentAns) ? currentAns : [];

      q.options.forEach((optText, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item msq';
        const isSelected = selectedIndices.includes(optIdx);
        if (isSelected) item.classList.add('selected');

        const letter = String.fromCharCode(65 + optIdx);
        item.innerHTML = `
          <div class="option-marker">${isSelected ? '✓' : letter}</div>
          <div class="option-content">${escapeHTML(optText)}</div>
        `;

        item.addEventListener('click', () => {
          let updated = [...selectedIndices];
          if (updated.includes(optIdx)) {
            updated = updated.filter(i => i !== optIdx);
          } else {
            updated.push(optIdx);
          }
          if (updated.length === 0) {
            delete state.userResponses[q.id];
          } else {
            state.userResponses[q.id] = updated.sort((a, b) => a - b);
          }
          updateQuestionAnswerStatus(q.id);
          renderAnswerInput(q);
          if (state.mode === 'practice') showExplanation(q);
        });

        list.appendChild(item);
      });

      DOM.answerArea.appendChild(list);
    } 
    else if (q.type === 'true_false') {
      const container = document.createElement('div');
      container.className = 'tf-container';

      const options = ['True', 'False'];
      options.forEach((val, optIdx) => {
        const card = document.createElement('div');
        card.className = `tf-card ${optIdx === 0 ? 'tf-true' : 'tf-false'}`;
        if (currentAns === optIdx) card.classList.add('selected');

        card.textContent = val;
        card.addEventListener('click', () => {
          state.userResponses[q.id] = optIdx;
          updateQuestionAnswerStatus(q.id);
          renderAnswerInput(q);
          if (state.mode === 'practice') showExplanation(q);
        });

        container.appendChild(card);
      });

      DOM.answerArea.appendChild(container);
    } 
    else if (q.type === 'fill_blank') {
      const wrap = document.createElement('div');
      wrap.className = 'fill-blank-wrap';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'fill-input';
      input.placeholder = 'Type your answer here and press Save & Next...';
      input.value = (currentAns !== undefined) ? currentAns : '';

      input.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (val) {
          state.userResponses[q.id] = val;
        } else {
          delete state.userResponses[q.id];
        }
        updateQuestionAnswerStatus(q.id);
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          saveAndNext();
        }
      });

      const helper = document.createElement('div');
      helper.className = 'fill-helper';
      helper.textContent = 'Answers are case-insensitive and trimmed of surrounding spaces.';

      wrap.appendChild(input);
      wrap.appendChild(helper);
      DOM.answerArea.appendChild(wrap);
    }
  }

  // --- Show Explanation Box ---
  function showExplanation(q) {
    const isCorrect = checkIsAnswerCorrect(q);
    const box = document.createElement('div');
    box.className = `explanation-box ${isCorrect ? 'correct' : 'incorrect'}`;

    let correctText = '';
    if (q.type === 'single_choice' || q.type === 'output_prediction' || q.type === 'bug_spot') {
      correctText = `Option ${String.fromCharCode(65 + q.correctAnswer)}: ${q.options[q.correctAnswer]}`;
    } else if (q.type === 'multiple_choice') {
      correctText = q.correctAnswer.map(idx => `${String.fromCharCode(65 + idx)} (${q.options[idx]})`).join(', ');
    } else if (q.type === 'true_false') {
      correctText = q.options[q.correctAnswer];
    } else if (q.type === 'fill_blank') {
      correctText = q.correctAnswer;
    }

    box.innerHTML = `
      <div class="explanation-header">
        <span>${isCorrect ? '✓ Correct Answer!' : '✗ Incorrect Response'}</span>
        <span style="margin-left: auto; font-size: 0.8rem; color: var(--text-muted);">Key: ${escapeHTML(correctText)}</span>
      </div>
      <div class="explanation-text">${escapeHTML(q.explanation)}</div>
    `;

    DOM.explanationContainer.innerHTML = '';
    DOM.explanationContainer.appendChild(box);
  }

  function checkIsAnswerCorrect(q) {
    const userAns = state.userResponses[q.id];
    if (userAns === undefined) return false;

    if (q.type === 'multiple_choice') {
      if (!Array.isArray(userAns)) return false;
      const target = q.correctAnswer;
      return userAns.length === target.length && userAns.every((val, idx) => val === target[idx]);
    } else if (q.type === 'fill_blank') {
      const accepted = (q.acceptedAnswers || [q.correctAnswer]).map(a => a.toLowerCase().trim());
      return accepted.includes(String(userAns).toLowerCase().trim());
    } else {
      return userAns === q.correctAnswer;
    }
  }

  function updateQuestionAnswerStatus(qId) {
    const hasAnswer = (state.userResponses[qId] !== undefined);
    const isMarked = (state.questionStatus[qId] === 'review' || state.questionStatus[qId] === 'answered_review');

    if (hasAnswer && isMarked) {
      state.questionStatus[qId] = 'answered_review';
    } else if (hasAnswer) {
      state.questionStatus[qId] = 'answered';
    } else if (isMarked) {
      state.questionStatus[qId] = 'review';
    } else {
      state.questionStatus[qId] = 'unanswered';
    }

    updatePaletteStyles();
    updateStatsSummary();
  }

  function saveCurrentQuestionState() {
    // Current input state is already captured reactively
  }

  // --- Navigation Controls ---
  function saveAndNext() {
    saveCurrentQuestionState();
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      openSubmitConfirmation();
    }
  }

  function prevQuestion() {
    if (state.currentIndex > 0) {
      saveCurrentQuestionState();
      state.currentIndex--;
      renderCurrentQuestion();
    }
  }

  function clearResponse() {
    const q = state.questions[state.currentIndex];
    delete state.userResponses[q.id];

    if (state.questionStatus[q.id] === 'answered_review') {
      state.questionStatus[q.id] = 'review';
    } else {
      state.questionStatus[q.id] = 'unanswered';
    }

    renderAnswerInput(q);
    DOM.explanationContainer.innerHTML = '';
    updatePaletteStyles();
    updateStatsSummary();
    saveSession();
  }

  function toggleFlagForReview() {
    const q = state.questions[state.currentIndex];
    const hasAnswer = (state.userResponses[q.id] !== undefined);
    const isCurrentlyReview = (state.questionStatus[q.id] === 'review' || state.questionStatus[q.id] === 'answered_review');

    if (isCurrentlyReview) {
      state.questionStatus[q.id] = hasAnswer ? 'answered' : 'unanswered';
    } else {
      state.questionStatus[q.id] = hasAnswer ? 'answered_review' : 'review';
    }

    DOM.btnFlagReview.classList.toggle('active', !isCurrentlyReview);
    updatePaletteStyles();
    updateStatsSummary();
    saveSession();
  }

  function markReviewAndNext() {
    const q = state.questions[state.currentIndex];
    const hasAnswer = (state.userResponses[q.id] !== undefined);
    state.questionStatus[q.id] = hasAnswer ? 'answered_review' : 'review';

    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    } else {
      renderCurrentQuestion();
    }
  }

  // --- Statistics Summary ---
  function updateStatsSummary() {
    let answered = 0;
    let review = 0;

    state.questions.forEach(q => {
      const status = state.questionStatus[q.id];
      if (status === 'answered' || status === 'answered_review') {
        answered++;
      }
      if (status === 'review' || status === 'answered_review') {
        review++;
      }
    });

    const remaining = state.questions.length - answered;

    DOM.statAnswered.textContent = answered;
    DOM.statRemaining.textContent = remaining;
    DOM.statReview.textContent = review;
  }

  // --- Submit Confirmation Modal ---
  function openSubmitConfirmation() {
    let answered = 0;
    let review = 0;

    state.questions.forEach(q => {
      const s = state.questionStatus[q.id];
      if (s === 'answered' || s === 'answered_review') answered++;
      if (s === 'review' || s === 'answered_review') review++;
    });

    DOM.modalAnsweredCount.textContent = answered;
    DOM.modalRemainingCount.textContent = state.questions.length - answered;
    DOM.modalReviewCount.textContent = review;

    DOM.confirmModal.classList.add('active');
  }

  function closeSubmitConfirmation() {
    DOM.confirmModal.classList.remove('active');
  }

  // --- Final Exam Submission & Scorecard Engine ---
  function submitExam() {
    closeSubmitConfirmation();
    clearInterval(state.timerInterval);

    let totalScore = 0;
    let correctCount = 0;
    let attemptedCount = 0;
    const topicScores = {};

    // Initialize topic breakdown structure
    EXAM_DATA.topics.forEach(t => {
      topicScores[t.id] = {
        name: t.name,
        code: t.code,
        weightage: t.weightage,
        totalPossibleMarks: 0,
        scoredMarks: 0,
        totalQuestions: 0,
        correctQuestions: 0
      };
    });

    state.questions.forEach(q => {
      const topicBucket = q.isBonus ? 6 : q.topicId;
      topicScores[topicBucket].totalPossibleMarks += q.weightage;
      topicScores[topicBucket].totalQuestions += 1;

      const hasAns = (state.userResponses[q.id] !== undefined);
      if (hasAns) attemptedCount++;

      const isCorrect = checkIsAnswerCorrect(q);
      if (isCorrect) {
        totalScore += q.weightage;
        correctCount++;
        topicScores[topicBucket].scoredMarks += q.weightage;
        topicScores[topicBucket].correctQuestions += 1;
      }
    });

    const percentage = ((totalScore / EXAM_DATA.totalMarks) * 100).toFixed(1);

    // Grade Determination
    let grade = 'F';
    let gradeClass = 'var(--accent-danger)';
    if (percentage >= 90) { grade = 'A+ (Outstanding)'; gradeClass = 'var(--accent-success)'; }
    else if (percentage >= 80) { grade = 'A (Excellent)'; gradeClass = 'var(--accent-success)'; }
    else if (percentage >= 70) { grade = 'B+ (Very Good)'; gradeClass = 'var(--accent-primary)'; }
    else if (percentage >= 60) { grade = 'B (Good)'; gradeClass = 'var(--accent-warning)'; }
    else if (percentage >= 50) { grade = 'C (Satisfactory)'; gradeClass = 'var(--accent-warning)'; }
    else { grade = 'Needs Practice'; }

    // Render results in Result Modal
    DOM.resultScorePercent.textContent = `${percentage}%`;
    DOM.resultMarksDetail.textContent = `${totalScore} / ${EXAM_DATA.totalMarks} Marks`;
    DOM.resultGradeBanner.textContent = `Grade: ${grade}`;
    DOM.resultGradeBanner.style.color = gradeClass;
    DOM.resultAccuracy.textContent = `Correct: ${correctCount}/${state.questions.length} • Attempted: ${attemptedCount}/${state.questions.length}`;

    // Render Topic Breakdown Bars
    DOM.topicBreakdownList.innerHTML = '';
    Object.keys(topicScores).forEach(key => {
      const t = topicScores[key];
      const topicPct = t.totalPossibleMarks > 0 ? ((t.scoredMarks / t.totalPossibleMarks) * 100).toFixed(0) : 0;

      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <div class="breakdown-info">
          <span>${t.name}</span>
          <span>${t.scoredMarks} / ${t.totalPossibleMarks} Marks (${topicPct}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${topicPct}%;"></div>
        </div>
      `;
      DOM.topicBreakdownList.appendChild(row);
    });

    DOM.resultModal.classList.add('active');
  }

  // --- Scratchpad Runner Engine ---
  function runScratchpad() {
    const code = DOM.scratchpadCode.value;
    DOM.scratchpadOutput.textContent = 'Executing...';

    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;

    try {
      console.log = (...args) => {
        logs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      };
      console.error = (...args) => {
        logs.push('Error: ' + args.join(' '));
      };

      const result = new Function(code)();
      if (result !== undefined) {
        logs.push(`Returned: ${typeof result === 'object' ? JSON.stringify(result) : String(result)}`);
      }

      DOM.scratchpadOutput.textContent = logs.length > 0 ? logs.join('\n') : 'Code executed with no output.';
    } catch (err) {
      DOM.scratchpadOutput.textContent = `${err.name}: ${err.message}`;
    } finally {
      console.log = originalLog;
      console.error = originalError;
    }
  }

  // --- Event Listeners ---
  function attachEventListeners() {
    // Mode Switching
    DOM.modeExamBtn.addEventListener('click', () => {
      state.mode = 'exam';
      DOM.modeExamBtn.classList.add('active');
      DOM.modePracticeBtn.classList.remove('active');
      renderCurrentQuestion();
    });

    DOM.modePracticeBtn.addEventListener('click', () => {
      state.mode = 'practice';
      DOM.modePracticeBtn.classList.add('active');
      DOM.modeExamBtn.classList.remove('active');
      renderCurrentQuestion();
    });

    // Theme Toggle
    DOM.themeToggleBtn.addEventListener('click', () => {
      state.theme = (state.theme === 'dark') ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      DOM.themeToggleBtn.textContent = state.theme === 'dark' ? '🌙' : '☀️';
    });

    // Navigation Buttons
    DOM.btnPrev.addEventListener('click', prevQuestion);
    DOM.btnSaveNext.addEventListener('click', saveAndNext);
    DOM.btnClear.addEventListener('click', clearResponse);
    DOM.btnFlagReview.addEventListener('click', toggleFlagForReview);
    DOM.btnReviewNext.addEventListener('click', markReviewAndNext);

    DOM.btnCheckAns.addEventListener('click', () => {
      const q = state.questions[state.currentIndex];
      showExplanation(q);
    });

    // Header Submit Button
    DOM.btnSubmitExam.addEventListener('click', openSubmitConfirmation);
    DOM.btnCancelSubmit.addEventListener('click', closeSubmitConfirmation);
    DOM.btnFinalSubmit.addEventListener('click', submitExam);

    // Topic Filter Bar Click Handlers
    DOM.topicsNavBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.topic-chip');
      if (!chip) return;

      document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      state.activeTopicFilter = chip.dataset.topic;
      updateFilteredQuestions();

      // Jump to first question in that filter
      if (state.filteredIndices.length > 0) {
        state.currentIndex = state.filteredIndices[0];
        renderCurrentQuestion();
      }
    });

    // Scratchpad Controls
    DOM.scratchpadToggle.addEventListener('click', () => {
      DOM.scratchpadBody.classList.toggle('open');
    });

    DOM.btnRunScratchpad.addEventListener('click', runScratchpad);
    DOM.btnClearScratchpad.addEventListener('click', () => {
      DOM.scratchpadCode.value = '';
      DOM.scratchpadOutput.textContent = '';
    });

    // Copy Code snippet button
    DOM.btnCopyCode.addEventListener('click', () => {
      const code = DOM.codeBlock.textContent;
      navigator.clipboard.writeText(code).then(() => {
        DOM.btnCopyCode.textContent = 'Copied!';
        setTimeout(() => DOM.btnCopyCode.textContent = 'Copy Code', 1500);
      });
    });

    // Modal Actions
    DOM.btnReviewQuestions.addEventListener('click', () => {
      DOM.resultModal.classList.remove('active');
      state.mode = 'practice';
      DOM.modePracticeBtn.classList.add('active');
      DOM.modeExamBtn.classList.remove('active');
      state.currentIndex = 0;
      renderCurrentQuestion();
    });

    DOM.btnRetakeExam.addEventListener('click', () => {
      if (confirm('Are you sure you want to restart the exam? All answers and timer will be reset.')) {
        localStorage.removeItem('js_exam_portal_state');
        state.userResponses = {};
        state.questionStatus = {};
        state.timerSeconds = EXAM_DATA.durationMinutes * 60;
        state.currentIndex = 0;
        state.mode = 'exam';
        DOM.modeExamBtn.classList.add('active');
        DOM.modePracticeBtn.classList.remove('active');
        DOM.resultModal.classList.remove('active');
        init();
      }
    });

    DOM.btnPrintScorecard.addEventListener('click', () => {
      window.print();
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'n') {
        saveAndNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'p') {
        prevQuestion();
      } else if (e.key === 'r') {
        toggleFlagForReview();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const q = state.questions[state.currentIndex];
        const optIdx = parseInt(e.key, 10) - 1;
        if (q.options && q.options[optIdx]) {
          state.userResponses[q.id] = optIdx;
          updateQuestionAnswerStatus(q.id);
          renderAnswerInput(q);
        }
      }
    });
  }

  // Helper Escape HTML function
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Start the application when DOM is ready
  document.addEventListener('DOMContentLoaded', init);
})();

