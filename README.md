# 🎓 JavaScript Semester Exam Portal

**Syllabus Coverage:** `00.Introduction_to_JavaScript` to `05.functions_and_scope`  
**Total Questions:** 110 Questions (100 Standard + 10 High-Level Bonus)  
**Total Marks:** 347 Marks  
**Duration:** 120 Minutes (Timed Simulation) / Untimed Practice Mode  

---

## 📌 Exam Blueprint & Increasing Weightage Architecture

In strict accordance with the exam pattern, the marks and cognitive complexity increase progressively as topics advance:

| Topic Code | Topic Title | Questions | Difficulty | Marks / Question | Total Section Marks |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **00** | Introduction to JavaScript | 8 | Basic to Medium | 1.0 Mark | **8 Marks** |
| **01** | Variables and Data Types | 12 | Basic to Medium | 2.0 Marks | **24 Marks** |
| **02** | Operators & Type Coercion | 18 | Basic to Medium | 2.5 Marks | **45 Marks** |
| **03** | Control Structures: Conditionals | 18 | Basic to Medium | 3.0 Marks | **54 Marks** |
| **04** | Control Structures: Loops | 20 | Basic to Medium | 3.5 Marks | **70 Marks** |
| **05** | Functions and Scope | 24 | Basic to Medium | 4.0 Marks | **96 Marks** |
| **🌟 Bonus** | High-Level Bonus (Topics 03, 04, 05) | 10 | High / Olympiad | 5.0 Marks | **50 Marks** |
| **TOTAL** | **Comprehensive Full Syllabus** | **110** | **Balanced** | — | **347 Marks** |

---

## 🧩 Question Types Included

Every standard technical assessment question type is implemented:
1. **Single Choice (MCQ)**: Standard 4-option conceptual and syntax checks.
2. **Multiple Select (MSQ)**: Checkbox questions requiring identification of all valid answers.
3. **Code Output Prediction**: Tracing execution flow, operator precedence, type coercion traps, and closures.
4. **Fill in the Blank**: Interactive text inputs for exact keywords, symbols, and concepts (case-insensitive & auto-trimmed).
5. **Spot the Bug / Error Analysis**: Identifying exact runtime errors (`TypeError`, `ReferenceError`, `SyntaxError`) and subtle bugs like infinite loops or assignment in conditionals.
6. **True / False**: Critical binary conceptual validations.

---

## 🌟 High-Level Bonus Questions (Topics 03, 04, 05)

The 10 Bonus Questions (Q101 to Q110) evaluate deep mastery of the JavaScript engine:
- **Topic 03 Bonus (Q101 - Q103)**:
  - Short-circuit coercion involving nested truthy/falsy strings and ternary branches.
  - Strict comparison in `switch` statements, type mismatches, and cascading fall-through.
  - Comma operator side effects in conditional expressions.
- **Topic 04 Bonus (Q104 - Q106)**:
  - Infinite loop traps in `do...while` where loop condition increments counteract body decrements.
  - Outer loop variable mutations from within nested loops (diagonal `i === j` mutations).
  - Multi-variable `for` loop headers with converging step increments.
- **Topic 05 Bonus (Q107 - Q110)**:
  - Function declaration vs `var` identifier collisions during hoisting.
  - Parameter shadowing and execution context isolation.
  - Local function declaration hoisting protecting global variables.
  - Multi-instance lexical environments and state retention in closures.

---

## 🚀 How to Launch the Exam Portal

### Option 1: Direct Browser Launch (Simplest)
Double-click `launch_exam_portal.bat` in the root folder, or simply double-click:
`exam_portal/index.html` in your file explorer. It opens immediately in Chrome, Edge, Brave, or Firefox.

### Option 2: Run via Node.js Server
Open a terminal in `exam_portal/` and run:
```bash
node server.js
```
The server will start at `http://localhost:3000` and automatically open your default browser.

---

## 🖥️ Portal Features

- **Exam Simulation Mode**: 120-minute countdown timer with warnings (<10m warning, <5m critical), lock-in test environment, and comprehensive scorecard at the end.
- **Practice & Study Mode**: Instant answer check, step-by-step logic breakdown, and explanation accordions for every question.
- **Question Navigator Palette**: Color-coded 110-question grid showing:
  - 🟢 Answered
  - 🔴 Visited & Unanswered
  - 🟣 Marked for Review
  - 🔵 Answered & Marked for Review
  - ⚪ Not Visited
  - 🌟 Bonus indicator on Q101 - Q110
- **Interactive In-Browser Scratchpad**: Built-in JavaScript sandbox right underneath the question to test and verify console outputs live.
- **Topic Filter Chips**: One-click filtering between individual topics or the Bonus section.
- **Session Auto-Save**: Your answers and progress are saved in `localStorage`; refreshing or closing the browser never loses your progress.
- **Scorecard & Analytics**: Detailed topic-wise accuracy bars, overall percentage, letter grade, and option to print or save as a PDF.

---

## ⌨️ Keyboard Shortcuts

- `Right Arrow` or `n`: Save & Next Question
- `Left Arrow` or `p`: Previous Question
- `r`: Toggle Mark for Review
- `1`, `2`, `3`, `4`: Select Option A, B, C, or D directly

