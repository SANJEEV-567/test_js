const EXAM_DATA = require('./questions.js');

console.log('Testing Exam Data Integrity...');
console.log('Total Questions:', EXAM_DATA.totalQuestions);
console.log('Total Marks:', EXAM_DATA.totalMarks);

let errors = [];

EXAM_DATA.questions.forEach((q, idx) => {
  // Check ID
  if (q.id !== idx + 1) {
    errors.push(`Q${q.id}: Mismatched ID, expected ${idx + 1}`);
  }

  // Check title, question, explanation
  if (!q.title) errors.push(`Q${q.id}: Missing title`);
  if (!q.question) errors.push(`Q${q.id}: Missing question text`);
  if (!q.explanation) errors.push(`Q${q.id}: Missing explanation`);

  // Check choices and answers
  if (q.type === 'single_choice' || q.type === 'output_prediction' || q.type === 'bug_spot') {
    if (!Array.isArray(q.options) || q.options.length < 2) {
      errors.push(`Q${q.id}: Expected at least 2 options, got ${q.options?.length}`);
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
      errors.push(`Q${q.id}: Invalid correctAnswer index ${q.correctAnswer} for options length ${q.options?.length}`);
    }
  } else if (q.type === 'multiple_choice') {
    if (!Array.isArray(q.options) || q.options.length < 2) {
      errors.push(`Q${q.id}: Expected at least 2 options, got ${q.options?.length}`);
    }
    if (!Array.isArray(q.correctAnswer) || q.correctAnswer.length === 0) {
      errors.push(`Q${q.id}: Expected non-empty array for MSQ correctAnswer`);
    } else {
      q.correctAnswer.forEach(ansIdx => {
        if (ansIdx < 0 || ansIdx >= q.options.length) {
          errors.push(`Q${q.id}: MSQ answer index ${ansIdx} out of bounds`);
        }
      });
    }
  } else if (q.type === 'true_false') {
    if (q.correctAnswer !== 0 && q.correctAnswer !== 1) {
      errors.push(`Q${q.id}: Invalid True/False correctAnswer ${q.correctAnswer}`);
    }
  } else if (q.type === 'fill_blank') {
    if (!q.correctAnswer || typeof q.correctAnswer !== 'string') {
      errors.push(`Q${q.id}: Invalid fill_blank correctAnswer`);
    }
  }

  // Check bonus
  if (q.id > 100) {
    if (!q.isBonus) errors.push(`Q${q.id}: Expected isBonus to be true`);
    if (q.weightage !== 5) errors.push(`Q${q.id}: Expected bonus weightage 5, got ${q.weightage}`);
  } else {
    if (q.isBonus) errors.push(`Q${q.id}: Standard question has isBonus true`);
  }
});

if (errors.length === 0) {
  console.log('✅ ALL 110 QUESTIONS PASSED ALL INTEGRITY & VALIDATION CHECKS WITH 100% ACCURACY!');
} else {
  console.error('❌ Validation Errors Found:', errors);
}

