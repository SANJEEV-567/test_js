// JavaScript Exam Question Bank (100 Standard + 10 High-Level Bonus Questions)
// Topics: 00.Introduction_to_JavaScript to 05.functions_and_scope
// Generated for Exam Preparation

const EXAM_DATA = {
  examTitle: "JavaScript Backend & Core Semester Exam",
  syllabus: "00.Introduction_to_JavaScript to 05.functions_and_scope",
  totalQuestions: 110,
  totalMarks: 347,
  standardQuestions: 100,
  bonusQuestions: 10,
  durationMinutes: 120,
  topics: [
    { id: 0, code: "00", name: "00. Introduction to JavaScript", weightage: "1 Mark", questions: 8 },
    { id: 1, code: "01", name: "01. Variables & Data Types", weightage: "2 Marks", questions: 12 },
    { id: 2, code: "02", name: "02. Operators & Type Coercion", weightage: "2.5 Marks", questions: 18 },
    { id: 3, code: "03", name: "03. Control Structures: Conditionals", weightage: "3 Marks", questions: 18 },
    { id: 4, code: "04", name: "04. Control Structures: Loops", weightage: "3.5 Marks", questions: 20 },
    { id: 5, code: "05", name: "05. Functions & Scope", weightage: "4 Marks", questions: 24 },
    { id: 6, code: "bonus", name: "🌟 High-Level Bonus (Topics 03-05)", weightage: "5 Marks", questions: 10 }
  ],
  questions: [
  {
    "id": 1,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Creator and Origin of JavaScript",
    "question": "Who created JavaScript, and approximately how long did it take to develop the first prototype at Netscape in 1995?",
    "code": null,
    "options": [
      "James Gosling in 3 years",
      "Brendan Eich in 10 days",
      "Guido van Rossum in 1 month",
      "Bjarne Stroustrup in 10 weeks"
    ],
    "correctAnswer": 1,
    "explanation": "Brendan Eich developed the initial version of JavaScript (originally codenamed Mocha) in just 10 days in May 1995 while working at Netscape Communications."
  },
  {
    "id": 2,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Basic",
    "type": "true_false",
    "isBonus": false,
    "title": "Nature of JavaScript Language",
    "question": "True or False: JavaScript is a dynamically typed, high-level, and interpreted/JIT-compiled programming language.",
    "code": null,
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True. JavaScript is dynamically typed (types are bound to values, not variables), high-level (memory management is handled automatically), and modern JS engines use Just-In-Time (JIT) compilation."
  },
  {
    "id": 3,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Original Development Name",
    "question": "Before it was released as JavaScript and previously LiveScript, what was the internal project codename of JavaScript at Netscape?",
    "code": null,
    "options": [
      "Oak",
      "Mocha",
      "V8",
      "SpiderMonkey"
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript was originally codenamed Mocha, then renamed to LiveScript in Netscape Navigator 2.0 beta, and finally renamed to JavaScript in December 1995 to ride on Java's popularity."
  },
  {
    "id": 4,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Basic",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "JavaScript vs Java Differences",
    "question": "Which of the following statements comparing JavaScript and Java are TRUE? (Select all that apply)",
    "code": null,
    "options": [
      "JavaScript and Java are completely distinct languages developed by different people.",
      "JavaScript runs only in web browsers, while Java runs on servers.",
      "Java is statically typed, whereas JavaScript is dynamically typed.",
      "JavaScript programs require ahead-of-time compilation into .class bytecode files before running."
    ],
    "correctAnswer": [
      0,
      2
    ],
    "explanation": "Option A is true (JavaScript was created by Brendan Eich; Java by Sun Microsystems). Option C is true (Java requires static variable types; JS is dynamically typed). Option B is false (JS runs on servers via Node.js). Option D is false (that describes Java, not JavaScript)."
  },
  {
    "id": 5,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Basic",
    "type": "fill_blank",
    "isBonus": false,
    "title": "JavaScript Standard Specification",
    "question": "What is the official standardized name of the specification that defines the JavaScript language, maintained by ECMA International under standard ECMA-262?",
    "code": null,
    "options": [],
    "correctAnswer": "ECMAScript",
    "acceptedAnswers": [
      "ECMAScript",
      "ecmascript",
      "ECMA-262"
    ],
    "explanation": "ECMAScript is the official standard specification developed under ECMA-262. JavaScript is an implementation of the ECMAScript standard."
  },
  {
    "id": 6,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Server-side JavaScript Runtime",
    "question": "Which popular open-source, cross-platform JavaScript runtime environment created by Ryan Dahl in 2009 allows developers to run JavaScript outside of web browsers on the backend/server?",
    "code": null,
    "options": [
      "Apache Tomcat",
      "Node.js",
      "Django",
      "V8 WebKit"
    ],
    "correctAnswer": 1,
    "explanation": "Node.js was created by Ryan Dahl in 2009. It uses Google Chrome's V8 JavaScript engine to execute JavaScript on servers and computers outside the browser."
  },
  {
    "id": 7,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Medium",
    "type": "single_choice",
    "isBonus": false,
    "title": "Script Loading Attributes: async vs defer",
    "question": "When embedding an external script in HTML, which attribute ensures the script is downloaded in the background and executed ONLY after the HTML document parsing is completely finished, preserving script execution order?",
    "code": "<script src=\"app.js\" _______></script>",
    "options": [
      "async",
      "defer",
      "preload",
      "blocking"
    ],
    "correctAnswer": 1,
    "explanation": "'defer' downloads the file in the background while HTML parsing continues, and executes the script only after the HTML is fully parsed, in the exact order scripts appear in the document. 'async' executes immediately as soon as downloaded, interrupting HTML parsing."
  },
  {
    "id": 8,
    "topicId": 0,
    "topicName": "00. Introduction to JavaScript",
    "weightage": 1,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "DOM Parsing Order Issue",
    "question": "What error occurs if an external JavaScript script placed in the <head> tag tries to immediately access document.getElementById('heading') without defer or DOMContentLoaded?",
    "code": "<!-- in HTML <head> -->\n<script>\n  let el = document.getElementById(\"heading\");\n  el.textContent = \"Welcome\";\n</script>\n<!-- in <body> -->\n<h1 id=\"heading\">Hello</h1>",
    "options": [
      "SyntaxError: Invalid token in HTML",
      "TypeError: Cannot set properties of null (setting 'textContent')",
      "ReferenceError: document is not defined",
      "No error, browser automatically waits for all tags"
    ],
    "correctAnswer": 1,
    "explanation": "Because the script runs in the `<head>` before the browser parses `<h1 id='heading'>`, `document.getElementById('heading')` returns `null`. Attempting to access `.textContent` on `null` throws `TypeError: Cannot set properties of null`."
  },
  {
    "id": 9,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Primitive Data Types Count",
    "question": "How many primitive data types exist in modern ECMAScript (JavaScript)?",
    "code": null,
    "options": [
      "5 (Number, String, Boolean, Null, Undefined)",
      "6 (Number, String, Boolean, Null, Undefined, Object)",
      "7 (Number, String, Boolean, Null, Undefined, Symbol, BigInt)",
      "8 (Number, String, Boolean, Null, Undefined, Symbol, BigInt, Array)"
    ],
    "correctAnswer": 2,
    "explanation": "JavaScript has exactly 7 primitive data types: Number, String, Boolean, Undefined, Null, Symbol (ES6), and BigInt (ES2020). Object and Array are non-primitive (reference) types."
  },
  {
    "id": 10,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Type of Unassigned Variable",
    "question": "What is logged to the console when checking the typeof an unassigned variable declared with let?",
    "code": "let studentName;\nconsole.log(typeof studentName);",
    "options": [
      "\"null\"",
      "\"undefined\"",
      "\"string\"",
      "ReferenceError"
    ],
    "correctAnswer": 1,
    "explanation": "In JavaScript, a variable declared with `let` or `var` without an initial value automatically holds `undefined`, and its `typeof` is the string '\"undefined\"'."
  },
  {
    "id": 11,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "The typeof null Historical Bug",
    "question": "What is the return value of `typeof null` in JavaScript?",
    "code": "console.log(typeof null);",
    "options": [
      "\"null\"",
      "\"undefined\"",
      "\"object\"",
      "\"number\""
    ],
    "correctAnswer": 2,
    "explanation": "In JavaScript, `typeof null` evaluates to `\"object\"`. This is a famous bug from the very first implementation of JS (1995) where values had type tags, and null was represented as 0, which coincided with the object type tag. It is preserved for backwards compatibility."
  },
  {
    "id": 12,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "true_false",
    "isBonus": false,
    "title": "Type of NaN",
    "question": "True or False: In JavaScript, `typeof NaN` returns \"number\".",
    "code": "console.log(typeof NaN);",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True! Despite standing for 'Not-a-Number', `NaN` is a special numeric value defined by the IEEE 754 floating-point standard to represent an invalid or unrepresentable numeric result (e.g. `0 / 0` or `parseInt('abc')`). Hence `typeof NaN === 'number'`."
  },
  {
    "id": 13,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Medium",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "Valid Variable Identifiers",
    "question": "Which of the following are VALID variable identifiers according to JavaScript naming rules? (Select all that apply)",
    "code": null,
    "options": [
      "$total_amount",
      "2ndUser",
      "_privateScore",
      "user-name",
      "const"
    ],
    "correctAnswer": [
      0,
      2
    ],
    "explanation": "Identifiers must start with a letter, `$`, or `_`. They cannot start with a digit (so `2ndUser` is invalid), cannot contain hyphens (so `user-name` is treated as a subtraction operator), and cannot be reserved keywords (so `const` is invalid). `$total_amount` and `_privateScore` are fully valid."
  },
  {
    "id": 14,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Const Object Property Mutation",
    "question": "What is the output of the following code snippet?",
    "code": "const user = { name: \"Aman\", role: \"Student\" };\nuser.role = \"Mentor\";\nconsole.log(user.role);",
    "options": [
      "\"Student\"",
      "\"Mentor\"",
      "TypeError: Assignment to constant variable",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "`const` prevents reassignment of the variable binding itself (`user = ...`). However, it does NOT make the underlying object immutable. Modifying, adding, or deleting properties of a `const` object is completely valid and mutates the object."
  },
  {
    "id": 15,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Uninitialized const Declaration",
    "question": "What happens when executing the following JavaScript line?",
    "code": "const MAX_LIMIT;\nMAX_LIMIT = 100;",
    "options": [
      "MAX_LIMIT is initialized to undefined, then reassigned to 100",
      "SyntaxError: Missing initializer in const declaration",
      "ReferenceError: Cannot access 'MAX_LIMIT' before initialization",
      "TypeError: Assignment to constant variable"
    ],
    "correctAnswer": 1,
    "explanation": "A `const` variable must always be initialized at the exact time of declaration. Declaring `const MAX_LIMIT;` without an assigned value throws `SyntaxError: Missing initializer in const declaration` at compile time."
  },
  {
    "id": 16,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "fill_blank",
    "isBonus": false,
    "title": "Default Primitive Value",
    "question": "What primitive value is automatically assigned to a variable declared with 'let' or 'var' when no initial value is provided?",
    "code": "let test;\nconsole.log(test); // _______",
    "options": [],
    "correctAnswer": "undefined",
    "acceptedAnswers": [
      "undefined"
    ],
    "explanation": "When a variable is declared without an explicit value, JavaScript automatically initializes it to `undefined`."
  },
  {
    "id": 17,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "null vs undefined Conceptual Difference",
    "question": "What is the primary conceptual difference between 'null' and 'undefined' in JavaScript?",
    "code": null,
    "options": [
      "undefined represents an intentional absence of any object value, while null is assigned by the engine.",
      "null is an intentional assignment representing 'no value' or 'empty', while undefined indicates a variable has been declared but not yet assigned.",
      "null is of type undefined, whereas undefined is of type object.",
      "There is no difference; they are exact aliases for each other."
    ],
    "correctAnswer": 1,
    "explanation": "`undefined` means a variable has been declared but has not yet been assigned a value (or a function has no return). `null` is an explicit assignment by the programmer indicating intentional absence of any value or object."
  },
  {
    "id": 18,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Pass by Reference in Arrays",
    "question": "What is the output of the following code snippet?",
    "code": "let arr1 = [10, 20];\nlet arr2 = arr1;\narr2.push(30);\nconsole.log(arr1.length, arr2.length);",
    "options": [
      "2 3",
      "3 3",
      "2 2",
      "TypeError: cannot push to reference"
    ],
    "correctAnswer": 1,
    "explanation": "Arrays are non-primitive reference types. `let arr2 = arr1;` copies the reference pointing to the same memory location. Pushing 30 into `arr2` modifies the underlying array, so both `arr1.length` and `arr2.length` are 3."
  },
  {
    "id": 19,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Basic",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "Identifying Primitive Data Types",
    "question": "Which of the following are PRIMITIVE types in JavaScript? (Select all that apply)",
    "code": null,
    "options": [
      "Boolean",
      "Array",
      "BigInt",
      "Object",
      "Symbol"
    ],
    "correctAnswer": [
      0,
      2,
      4
    ],
    "explanation": "Boolean, BigInt, and Symbol are primitive data types. Array and Object are non-primitive reference types."
  },
  {
    "id": 20,
    "topicId": 1,
    "topicName": "01. Variables & Data Types",
    "weightage": 2,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "var Re-declaration in Same Scope",
    "question": "What is the output of the following code?",
    "code": "var city = \"Mumbai\";\nvar city = \"Delhi\";\nconsole.log(city);",
    "options": [
      "\"Mumbai\"",
      "\"Delhi\"",
      "SyntaxError: Identifier 'city' has already been declared",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "`var` allows variables to be re-declared within the same scope without throwing an error. The second declaration assigns \"Delhi\" to `city`, so \"Delhi\" is logged. (In contrast, `let` and `const` would throw a SyntaxError)."
  },
  {
    "id": 21,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Prefix vs Postfix Increment",
    "question": "What is logged to the console by the following code?",
    "code": "let x = 3;\nlet y = x++ + ++x;\nconsole.log(x, y);",
    "options": [
      "5 8",
      "5 7",
      "4 8",
      "5 9"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: `x++` evaluates to current value 3, then x becomes 4. Step 2: `++x` increments x from 4 to 5, then evaluates to 5. Step 3: `y = 3 + 5 = 8`. Final values: `x = 5`, `y = 8`."
  },
  {
    "id": 22,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Addition vs Subtraction Type Coercion",
    "question": "What is the output of the following operations?",
    "code": "console.log(\"5\" + 2);\nconsole.log(\"5\" - 2);",
    "options": [
      "\"52\" and 3",
      "7 and 3",
      "\"52\" and \"3\"",
      "NaN and 3"
    ],
    "correctAnswer": 0,
    "explanation": "When `+` is used with a string operand, JavaScript coerces the number `2` to string and performs string concatenation (\"52\"). The `-` operator is purely arithmetic, so JavaScript coerces \"5\" to the number 5, resulting in 5 - 2 = 3."
  },
  {
    "id": 23,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Division by Zero in JavaScript",
    "question": "What does `10 / 0` evaluate to in JavaScript?",
    "code": "console.log(10 / 0);",
    "options": [
      "ZeroDivisionError",
      "Infinity",
      "NaN",
      "null"
    ],
    "correctAnswer": 1,
    "explanation": "In JavaScript, dividing a positive non-zero number by zero yields `Infinity` (a special numeric value), rather than throwing an exception. Dividing a negative number by zero yields `-Infinity`."
  },
  {
    "id": 24,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Zero Divided by Zero",
    "question": "What is the result of dividing 0 by 0 in JavaScript?",
    "code": "console.log(0 / 0);",
    "options": [
      "0",
      "Infinity",
      "NaN",
      "undefined"
    ],
    "correctAnswer": 2,
    "explanation": "0 / 0 is mathematically indeterminate. In JavaScript floating point arithmetic, indeterminate operations evaluate to `NaN` (Not-a-Number)."
  },
  {
    "id": 25,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "Strict vs Loose Equality Truth Table",
    "question": "Which of the following equality comparisons evaluate to TRUE? (Select all that apply)",
    "code": null,
    "options": [
      "5 == \"5\"",
      "5 === \"5\"",
      "null == undefined",
      "null === undefined",
      "0 == false"
    ],
    "correctAnswer": [
      0,
      2,
      4
    ],
    "explanation": "Loose equality (`==`) coerces types: `5 == \"5\"` is true, `null == undefined` is true (by ECMAScript spec), and `0 == false` is true (false coerces to 0). Strict equality (`===`) checks both value and type without coercion, so `5 === \"5\"` and `null === undefined` are false."
  },
  {
    "id": 26,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Self-Comparison of NaN",
    "question": "What does `NaN === NaN` evaluate to in JavaScript?",
    "code": "console.log(NaN === NaN);",
    "options": [
      "true",
      "false",
      "TypeError",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "In JavaScript (and IEEE 754 standard), `NaN` is unique because it is not equal to any value, including itself! Both `NaN == NaN` and `NaN === NaN` evaluate to `false`. To check for NaN, use `Number.isNaN()`."
  },
  {
    "id": 27,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Lexicographical String Comparison",
    "question": "What is logged to the console by the following comparison?",
    "code": "console.log(\"15\" < \"2\");",
    "options": [
      "true",
      "false",
      "TypeError",
      "NaN"
    ],
    "correctAnswer": 0,
    "explanation": "When both operands of `<` are strings, JavaScript performs lexicographical (dictionary/Unicode) comparison character by character. The first character of '15' is '1' (Unicode code point 49), which is smaller than '2' (code point 50). Therefore, '15' < '2' is `true`!"
  },
  {
    "id": 28,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Logical OR Short-circuit Evaluation",
    "question": "What is returned by the logical OR (||) expression below?",
    "code": "let result = \"\" || \"Hello\" || false;\nconsole.log(result);",
    "options": [
      "true",
      "\"Hello\"",
      "\"\"",
      "false"
    ],
    "correctAnswer": 1,
    "explanation": "The `||` operator evaluates operands from left to right and returns the first TRUTHY operand directly (not converted to boolean). `\"\"` is falsy, so it moves to `\"Hello\"`, which is truthy, so `\"Hello\"` is returned immediately without evaluating `false`."
  },
  {
    "id": 29,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Logical AND Short-circuit Evaluation",
    "question": "What is logged to the console by the following logical AND expression?",
    "code": "let val = \"Cat\" && \"Dog\" && 0 && \"Bird\";\nconsole.log(val);",
    "options": [
      "\"Cat\"",
      "\"Bird\"",
      "0",
      "false"
    ],
    "correctAnswer": 2,
    "explanation": "The `&&` operator evaluates from left to right and returns the first FALSY operand it encounters. \"Cat\" is truthy, \"Dog\" is truthy, but `0` is falsy. Hence, evaluation stops and `0` is returned."
  },
  {
    "id": 30,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "fill_blank",
    "isBonus": false,
    "title": "Exponentiation Operator Symbol",
    "question": "What two-character operator symbol was introduced in ES2016 for exponentiation (raising a base to a power), equivalent to Math.pow(a, b)?",
    "code": "let cube = 3 _______ 3; // 27",
    "options": [],
    "correctAnswer": "**",
    "acceptedAnswers": [
      "**",
      "exponentiation"
    ],
    "explanation": "The `**` operator is the exponentiation operator in JavaScript, where `base ** exponent` calculates base raised to exponent."
  },
  {
    "id": 31,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Boolean Coercion in Arithmetic",
    "question": "What is the numeric output of evaluating the following expression?",
    "code": "console.log(true + true - false);",
    "options": [
      "true",
      "2",
      "1",
      "NaN"
    ],
    "correctAnswer": 1,
    "explanation": "In numeric contexts, `true` is coerced to `1` and `false` is coerced to `0`. So: `1 + 1 - 0 = 2`."
  },
  {
    "id": 32,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Implicit String Conversion via Concatenation",
    "question": "What does the following typeof expression return?",
    "code": "console.log(typeof (\"\" + 100));",
    "options": [
      "\"number\"",
      "\"string\"",
      "\"undefined\"",
      "\"object\""
    ],
    "correctAnswer": 1,
    "explanation": "Concatenating an empty string `\"\"` with a number `100` coerces the number into string `\"100\"`. `typeof \"100\"` returns `\"string\"`."
  },
  {
    "id": 33,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "Comprehensive Falsy Values Identification",
    "question": "Which of the following values are FALSY in JavaScript? (Select all that apply)",
    "code": null,
    "options": [
      "0",
      "\"0\"",
      "\"\"",
      "[]",
      "null",
      "NaN"
    ],
    "correctAnswer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "JavaScript has exactly 6 falsy values (plus -0 and 0n): `false`, `0`, `\"\"` (empty string), `null`, `undefined`, and `NaN`. Note that `\"0\"` is a non-empty string and `[]` is an object, so both are TRUTHY!"
  },
  {
    "id": 34,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Logical NOT with Truthy and Falsy Strings",
    "question": "What is the output of the following arithmetic expression?",
    "code": "console.log(!\"\" + !0 + !\"false\");",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "`!\"\"` (not empty string) -> `!false` -> `true` -> `1`. `!0` -> `!false` -> `true` -> `1`. `!\"false\"` (\"false\" is a non-empty string, hence truthy!) -> `!true` -> `false` -> `0`. Total: `1 + 1 + 0 = 2`."
  },
  {
    "id": 35,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "true_false",
    "isBonus": false,
    "title": "Coercion in Empty Array vs Boolean Equality",
    "question": "True or False: In JavaScript, `[] == false` evaluates to true.",
    "code": "console.log([] == false);",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True! In loose equality, `false` is coerced to number `0`. `[]` is coerced to primitive via `[].toString()`, which is `\"\"`. Then `\"\"` is coerced to number `0`. Since `0 == 0`, `[] == false` evaluates to `true`!"
  },
  {
    "id": 36,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Compound Assignment and Precedence",
    "question": "What is the final value of variable a?",
    "code": "let a = 10;\na += 5 * 2;\nconsole.log(a);",
    "options": [
      "30",
      "20",
      "25",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Multiplication `*` has higher precedence than compound assignment `+=`. So `5 * 2` is evaluated first to `10`. Then `a += 10` executes, resulting in `a = 10 + 10 = 20`."
  },
  {
    "id": 37,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Arithmetic with null vs undefined",
    "question": "What is printed by these two console statements?",
    "code": "console.log(null + 10);\nconsole.log(undefined + 10);",
    "options": [
      "10 and NaN",
      "10 and 10",
      "NaN and NaN",
      "TypeError and NaN"
    ],
    "correctAnswer": 0,
    "explanation": "`null` is converted to numeric `0` in arithmetic operations, so `0 + 10 = 10`. `undefined` converts to `NaN` in numeric operations, so `NaN + 10 = NaN`."
  },
  {
    "id": 38,
    "topicId": 2,
    "topicName": "02. Operators & Type Coercion",
    "weightage": 2.5,
    "difficulty": "Basic",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Accidental Assignment Operator in Condition",
    "question": "What bug is present in the following conditional code?",
    "code": "let loggedIn = false;\nif (loggedIn = true) {\n  console.log(\"Access Granted\");\n}",
    "options": [
      "SyntaxError: Missing parentheses around condition",
      "Using '=' assignment operator instead of '===' equality operator; condition always evaluates to true",
      "TypeError: Cannot assign to boolean literal",
      "No bug, it checks if loggedIn is equal to true"
    ],
    "correctAnswer": 1,
    "explanation": "`=` is the assignment operator. `(loggedIn = true)` assigns `true` to `loggedIn` and then returns `true` to the `if` statement, so the condition always executes regardless of the previous value. Strict comparison `===` should be used instead."
  },
  {
    "id": 39,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Sequential Evaluation of else-if Ladder",
    "question": "What is printed when the following conditional ladder executes?",
    "code": "let marks = 65;\nif (marks >= 90) {\n  console.log(\"Grade A\");\n} else if (marks >= 60) {\n  console.log(\"Grade B\");\n} else if (marks >= 40) {\n  console.log(\"Grade C\");\n} else {\n  console.log(\"Grade F\");\n}",
    "options": [
      "Grade B",
      "Grade C",
      "Grade B and Grade C",
      "Grade A"
    ],
    "correctAnswer": 0,
    "explanation": "In an `if-else if-else` chain, JavaScript checks conditions sequentially from top to bottom. As soon as a condition evaluates to true (`marks >= 60`), its corresponding block runs and the entire remaining chain is skipped. Thus, only 'Grade B' is logged."
  },
  {
    "id": 40,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Ternary Operator Syntax and Operands",
    "question": "How many operands does the ternary conditional operator take in JavaScript?",
    "code": "let result = condition ? expr1 : expr2;",
    "options": [
      "1 operand (unary)",
      "2 operands (binary)",
      "3 operands (ternary: condition, expr1, expr2)",
      "Variable number of operands"
    ],
    "correctAnswer": 2,
    "explanation": "The ternary operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), an expression to execute if the condition is truthy, followed by a colon (`:`), and an expression to execute if the condition is falsy."
  },
  {
    "id": 41,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Truthy Evaluation of String '0'",
    "question": "What will the following code log to the console?",
    "code": "let code = \"0\";\nif (code) {\n  console.log(\"Valid Code\");\n} else {\n  console.log(\"Invalid Code\");\n}",
    "options": [
      "Invalid Code",
      "Valid Code",
      "SyntaxError",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "The variable `code` contains the non-empty string `\"0\"`. In JavaScript, all non-empty strings are TRUTHY (only the empty string `\"\"` is falsy). Hence the condition is true and 'Valid Code' is printed."
  },
  {
    "id": 42,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Chained Ternary Operator Evaluation",
    "question": "What is logged by the chained ternary operator expression below?",
    "code": "let score = 75;\nlet tier = score >= 90 ? \"Platinum\" : score >= 70 ? \"Gold\" : \"Silver\";\nconsole.log(tier);",
    "options": [
      "Platinum",
      "Gold",
      "Silver",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "First, `score >= 90` is false (75 < 90). The engine moves to the false branch: `score >= 70 ? \"Gold\" : \"Silver\"`. Since `75 >= 70` is true, \"Gold\" is returned."
  },
  {
    "id": 43,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "single_choice",
    "isBonus": false,
    "title": "Strict Comparison in Switch Statements",
    "question": "When matching expression values against 'case' values in a switch statement, what type of comparison does JavaScript perform?",
    "code": "switch (expression) {\n  case value1: // how is expression compared to value1?\n}",
    "options": [
      "Loose equality (==), type coercion is allowed",
      "Strict equality (===), no type coercion is performed",
      "Object.is() equivalence only",
      "Relational comparison (< and >)"
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript switch statements strictly compare (`===`) the input expression against the case clauses. Therefore, `switch ('5')` will NOT match `case 5:` because their types differ ('string' !== 'number')."
  },
  {
    "id": 44,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Switch Statement Fall-Through Without Break",
    "question": "What is the exact output printed by this switch statement?",
    "code": "let day = 2;\nlet schedule = \"\";\nswitch (day) {\n  case 1:\n    schedule += \"Physics \";\n  case 2:\n    schedule += \"Math \";\n  case 3:\n    schedule += \"Chemistry \";\n    break;\n  case 4:\n    schedule += \"Biology \";\n  default:\n    schedule += \"Rest\";\n}\nconsole.log(schedule.trim());",
    "options": [
      "Math",
      "Math Chemistry",
      "Math Chemistry Rest",
      "Physics Math Chemistry"
    ],
    "correctAnswer": 1,
    "explanation": "`day === 2` matches `case 2:`. Because `case 2:` lacks a `break` statement, execution falls through into `case 3:`, appending 'Chemistry '. `case 3:` has a `break`, which exits the switch. The result is 'Math Chemistry'."
  },
  {
    "id": 45,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Switch Default Clause at Top Without Break",
    "question": "What is the output when default is placed at the top of a switch statement without a break?",
    "code": "let category = \"Unknown\";\nlet out = \"\";\nswitch (category) {\n  default:\n    out += \"General \";\n  case \"VIP\":\n    out += \"Priority \";\n    break;\n  case \"Guest\":\n    out += \"Limited \";\n}\nconsole.log(out.trim());",
    "options": [
      "General",
      "General Priority",
      "Priority",
      "SyntaxError: default must be at bottom"
    ],
    "correctAnswer": 1,
    "explanation": "A `default` clause does not have to be at the bottom. Since `category` does not match any other case, execution jumps to `default:`. Because there is no `break` on `default`, it falls through into `case \"VIP\":`, appending 'Priority ' before hitting `break`. Output: 'General Priority'."
  },
  {
    "id": 46,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "Properties of Switch Statements",
    "question": "Which of the following statements regarding the JavaScript 'switch' statement are TRUE? (Select all that apply)",
    "code": null,
    "options": [
      "Case clauses can be grouped together to execute the same code block for multiple values.",
      "The switch expression matches case values using loose equality (==).",
      "If the 'break' statement is omitted from a matching case, execution falls through to subsequent cases.",
      "A switch statement must always include a 'default' clause, otherwise a SyntaxError is thrown."
    ],
    "correctAnswer": [
      0,
      2
    ],
    "explanation": "Option A is true (grouping cases e.g. `case 1: case 2: ...`). Option C is true (fall-through happens without break). Option B is false (it uses strict === equality). Option D is false (the `default` clause is entirely optional)."
  },
  {
    "id": 47,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Spot the Unintended Switch Fall-through",
    "question": "What is the bug causing 'Status: Active Status: Inactive' to be printed when statusCode is 1?",
    "code": "let statusCode = 1;\nswitch (statusCode) {\n  case 1:\n    console.log(\"Status: Active\");\n  case 0:\n    console.log(\"Status: Inactive\");\n    break;\n}",
    "options": [
      "case 1 is missing a break statement, causing fall-through into case 0",
      "statusCode should be a string in case 1",
      "switch does not allow numeric cases",
      "Missing default clause causes duplicate logging"
    ],
    "correctAnswer": 0,
    "explanation": "Because `case 1:` does not contain a `break;` statement, execution continues into `case 0:`, logging both messages."
  },
  {
    "id": 48,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Nested Ternary in Access Control",
    "question": "What is logged by the ternary operator expression below?",
    "code": "let role = \"admin\";\nlet access = (role === \"admin\") ? \"Full\" : (role === \"editor\") ? \"Edit\" : \"View\";\nconsole.log(access);",
    "options": [
      "\"Full\"",
      "\"Edit\"",
      "\"View\"",
      "undefined"
    ],
    "correctAnswer": 0,
    "explanation": "`role === 'admin'` evaluates to true immediately, returning \"Full\" without evaluating the second ternary branch."
  },
  {
    "id": 49,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "fill_blank",
    "isBonus": false,
    "title": "Switch Fallback Keyword",
    "question": "In a JavaScript switch statement, what keyword is used to define the fallback code block executed when no case values match?",
    "code": "switch (value) {\n  case 1: break;\n  _______: // fallback clause\n    console.log(\"No match\");\n}",
    "options": [],
    "correctAnswer": "default",
    "acceptedAnswers": [
      "default"
    ],
    "explanation": "The `default` clause in a switch statement acts like the `else` block in an `if-else` statement, executing when no matching `case` is found."
  },
  {
    "id": 50,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Complex Logical Conditions in If-Else",
    "question": "What is logged to the console by the following code?",
    "code": "let a = 10, b = 20;\nif (a > 5 && b < 15) {\n  console.log(\"Path 1\");\n} else if (a === 10 || b === 10) {\n  console.log(\"Path 2\");\n} else {\n  console.log(\"Path 3\");\n}",
    "options": [
      "Path 1",
      "Path 2",
      "Path 3",
      "Path 1 and Path 2"
    ],
    "correctAnswer": 1,
    "explanation": "Condition 1: `a > 5` (true) && `b < 15` (20 < 15 is false) -> false. Condition 2: `a === 10` (true) || `b === 10` (false) -> true. Thus, 'Path 2' is executed."
  },
  {
    "id": 51,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "true_false",
    "isBonus": false,
    "title": "Braceless If Statement Scope",
    "question": "True or False: An 'if' statement without curly braces { } controls only the single immediately following statement.",
    "code": "if (condition)\n  doSomething();\ndoSomethingElse(); // runs regardless!",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True. In JavaScript, omitting curly braces `{}` means only the very next single statement belongs to the `if` block. Any subsequent statement is outside the conditional and executes unconditionally."
  },
  {
    "id": 52,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Indentation Trap in Braceless If",
    "question": "What is the final value of x printed to the console?",
    "code": "let x = 5;\nif (x < 0)\n  x++;\n  x += 10;\nconsole.log(x);",
    "options": [
      "5",
      "6",
      "15",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "Because there are no curly braces `{}` on the `if` statement, only `x++;` belongs to the `if`. Since `x < 0` (5 < 0) is false, `x++;` is skipped. Then `x += 10;` runs unconditionally! `5 + 10 = 15`."
  },
  {
    "id": 53,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Negative Numbers in Conditionals",
    "question": "What does the following snippet log to the console?",
    "code": "let balance = -1;\nif (balance) {\n  console.log(\"Account Active\");\n} else {\n  console.log(\"Account Inactive\");\n}",
    "options": [
      "Account Inactive",
      "Account Active",
      "SyntaxError",
      "NaN"
    ],
    "correctAnswer": 1,
    "explanation": "All numbers in JavaScript are truthy EXCEPT `0` (and `-0`, `NaN`). Negative numbers like `-1` are non-zero, hence truthy! The `if` branch executes."
  },
  {
    "id": 54,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Optimal Choice Between Switch and If-Else",
    "question": "When is a 'switch' statement generally preferred over an 'if-else' ladder in JavaScript?",
    "code": null,
    "options": [
      "When comparing complex floating point ranges (e.g. x > 10.5 && x < 20.3)",
      "When evaluating a single variable against multiple discrete constant values",
      "When asynchronous callbacks are involved",
      "When evaluating boolean condition flags exclusively"
    ],
    "correctAnswer": 1,
    "explanation": "A `switch` statement is best suited and most readable when matching a single variable or expression against multiple discrete, known constant values (e.g. days of week, menu options, action types)."
  },
  {
    "id": 55,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Ternary Operator with Null Return",
    "question": "What is logged to the console by the following code?",
    "code": "let isLoggedIn = false;\nlet userGreeting = isLoggedIn ? \"Welcome Back!\" : null;\nconsole.log(userGreeting);",
    "options": [
      "\"Welcome Back!\"",
      "null",
      "undefined",
      "false"
    ],
    "correctAnswer": 1,
    "explanation": "Since `isLoggedIn` is `false`, the false branch of the ternary operator is evaluated, returning `null`."
  },
  {
    "id": 56,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 3,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Assignment Condition Bug Logic",
    "question": "Why does the following code print 'Failed' even when marks are below passing threshold?",
    "code": "let marks = 25;\nif (marks = 50) {\n  console.log(\"Exam Cleared\");\n} else {\n  console.log(\"Exam Failed\");\n}",
    "options": [
      "The condition assigns 50 to marks; since 50 is a non-zero truthy number, 'Exam Cleared' is always logged",
      "JavaScript throws a runtime error when assigning inside if statements",
      "marks is converted to a string '50' which is falsy",
      "The else block runs because marks was initially 25"
    ],
    "correctAnswer": 0,
    "explanation": "`(marks = 50)` is an assignment expression. It sets `marks` to 50 and evaluates to 50. In JavaScript, 50 is a truthy value, so the `if` block ALWAYS executes, printing 'Exam Cleared'. Comparison operator (`===`) should be used."
  },
  {
    "id": 57,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "While vs Do...While Fundamental Difference",
    "question": "What is the primary difference between a 'while' loop and a 'do...while' loop?",
    "code": null,
    "options": [
      "A while loop checks its condition at the end, do...while checks at the start.",
      "A do...while loop is guaranteed to execute its code body at least once, even if the condition is false initially.",
      "A while loop cannot use the break keyword, while do...while can.",
      "There is no operational difference; they are syntactic synonyms."
    ],
    "correctAnswer": 1,
    "explanation": "Because `do...while` is an exit-controlled loop that tests its condition after executing the body, it always runs at least once. A `while` loop is entry-controlled and may run 0 times if the condition is initially false."
  },
  {
    "id": 58,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Do...While Single Execution with False Condition",
    "question": "What is logged to the console by the following do...while loop?",
    "code": "let count = 0;\ndo {\n  count++;\n} while (count < 0);\nconsole.log(count);",
    "options": [
      "0",
      "1",
      "Infinite loop",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "The body executes first: `count++` increments count to 1. Then the condition `count < 0` (1 < 0) is evaluated, which is false. The loop terminates immediately. Final value of count is 1."
  },
  {
    "id": 59,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Basic For Loop Accumulator",
    "question": "What is the output of the following accumulator loop?",
    "code": "let sum = 0;\nfor (let i = 1; i <= 4; i++) {\n  sum += i;\n}\nconsole.log(sum);",
    "options": [
      "10",
      "6",
      "15",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "The loop sums integers from 1 to 4: `1 + 2 + 3 + 4 = 10`."
  },
  {
    "id": 60,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Break Statement Early Termination",
    "question": "What is the string stored in 'result' after the loop completes?",
    "code": "let result = \"\";\nfor (let i = 0; i < 5; i++) {\n  if (i === 3) break;\n  result += i;\n}\nconsole.log(result);",
    "options": [
      "\"01234\"",
      "\"012\"",
      "\"0123\"",
      "\"34\""
    ],
    "correctAnswer": 1,
    "explanation": "When `i` reaches 3, the `if (i === 3)` check succeeds and `break` immediately terminates the loop. Only values 0, 1, and 2 are appended: '012'."
  },
  {
    "id": 61,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Continue Statement Skipping Iteration",
    "question": "What does the following code log to the console?",
    "code": "let result = \"\";\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  result += i;\n}\nconsole.log(result);",
    "options": [
      "\"0134\"",
      "\"01234\"",
      "\"2\"",
      "\"01\""
    ],
    "correctAnswer": 0,
    "explanation": "When `i === 2`, `continue` executes, skipping the rest of that iteration (`result += i`) and jumping directly to `i++`. The remaining numbers 0, 1, 3, 4 are appended: '0134'."
  },
  {
    "id": 62,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "single_choice",
    "isBonus": false,
    "title": "Identifying Infinite Loop Causes",
    "question": "Why does the following loop run indefinitely (infinite loop)?",
    "code": "for (let i = 0; i < 5; ) {\n  console.log(i);\n}",
    "options": [
      "The initialization let i = 0 is invalid inside a for statement",
      "The update/increment expression is missing, so i remains 0 and i < 5 is always true",
      "for loops require exactly four semicolon-separated expressions",
      "console.log resets the loop counter"
    ],
    "correctAnswer": 1,
    "explanation": "The third clause of the for loop header (the update expression) is omitted and `i` is not modified inside the body. Since `i` stays 0 forever, the condition `i < 5` remains true indefinitely."
  },
  {
    "id": 63,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Nested Loop Total Iteration Count",
    "question": "How many times does the innermost statement (count++) execute?",
    "code": "let count = 0;\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 4; j++) {\n    count++;\n  }\n}\nconsole.log(count);",
    "options": [
      "7",
      "12",
      "16",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "The outer loop runs 3 times (i = 0, 1, 2). For each outer turn, the inner loop runs 4 times (j = 0, 1, 2, 3). Total executions = 3 * 4 = 12."
  },
  {
    "id": 64,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Break in Nested Loop",
    "question": "What is the final value of sum in this nested loop with break?",
    "code": "let sum = 0;\nfor (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    if (j === 2) break;\n    sum += j;\n  }\n}\nconsole.log(sum);",
    "options": [
      "3",
      "6",
      "9",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "`break` only exits the innermost loop containing it. For each of the 3 outer iterations: j=1 adds 1 to sum; then j=2 triggers `break`, terminating the inner loop. So sum increases by 1 each outer loop: 1 + 1 + 1 = 3."
  },
  {
    "id": 65,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "fill_blank",
    "isBonus": false,
    "title": "Loop Skip Keyword",
    "question": "What JavaScript keyword is used inside a loop to immediately skip the remaining statements of the current iteration and proceed to the next iteration?",
    "code": "while (hasMore) {\n  if (shouldSkip) _______;\n  process();\n}",
    "options": [],
    "correctAnswer": "continue",
    "acceptedAnswers": [
      "continue"
    ],
    "explanation": "The `continue` statement terminates the current iteration of the enclosing loop and continues to the next cycle."
  },
  {
    "id": 66,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "While Loop Decrement and Exit State",
    "question": "What is the value of i logged to the console after the while loop finishes?",
    "code": "let i = 5;\nwhile (i > 0) {\n  i -= 2;\n}\nconsole.log(i);",
    "options": [
      "0",
      "1",
      "-1",
      "-2"
    ],
    "correctAnswer": 2,
    "explanation": "Trace: Start i=5. Iteration 1: i becomes 3 (3 > 0 true). Iteration 2: i becomes 1 (1 > 0 true). Iteration 3: i becomes -1 (-1 > 0 is false, loop terminates). Console logs -1."
  },
  {
    "id": 67,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "true_false",
    "isBonus": false,
    "title": "Optionality of For Loop Clauses",
    "question": "True or False: In JavaScript, all three expressions inside a 'for (expr1; expr2; expr3)' statement are optional.",
    "code": "// Is this valid JavaScript syntax?\nfor (;;) {\n  break;\n}",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True. In JavaScript, `for (;;)` is completely valid syntax. If the test condition (expr2) is omitted, it defaults to `true` (an infinite loop unless broken internally)."
  },
  {
    "id": 68,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "var Leakage Outside For Loop",
    "question": "What is printed when accessing the loop index variable i declared with 'var' outside the loop?",
    "code": "var i = 10;\nfor (var i = 0; i < 3; i++) {\n  // empty\n}\nconsole.log(i);",
    "options": [
      "10",
      "2",
      "3",
      "undefined"
    ],
    "correctAnswer": 2,
    "explanation": "Because `var` is function-scoped (or globally scoped) and does NOT have block scope, the loop's `var i = 0` reuses and overwrites the outer `i`. The loop ends when `i` increments to 3 (which makes 3 < 3 false). Outside the loop, `i` is 3."
  },
  {
    "id": 69,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Digit Counting While Loop",
    "question": "What is the output of the following digit-counting algorithm?",
    "code": "let num = 1234;\nlet count = 0;\nwhile (num > 0) {\n  count++;\n  num = Math.floor(num / 10);\n}\nconsole.log(count);",
    "options": [
      "3",
      "4",
      "5",
      "1234"
    ],
    "correctAnswer": 1,
    "explanation": "In each iteration, `Math.floor(num / 10)` strips the last digit: 1234 -> 123 -> 12 -> 1 -> 0. The loop runs exactly 4 times, so `count` is 4."
  },
  {
    "id": 70,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "Exit-Controlled vs Entry-Controlled Loops",
    "question": "Which of the following loop structures evaluates its condition AFTER executing the loop body? (Select all that apply)",
    "code": null,
    "options": [
      "for loop",
      "while loop",
      "do...while loop",
      "switch statement"
    ],
    "correctAnswer": [
      2
    ],
    "explanation": "`do...while` is the only exit-controlled loop in JavaScript where the condition is evaluated after the body has executed."
  },
  {
    "id": 71,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Decrementing Loop Concatenation",
    "question": "What string does this decrementing loop produce?",
    "code": "let str = \"\";\nfor (let i = 3; i >= 1; i--) {\n  str += i + \"-\";\n}\nconsole.log(str);",
    "options": [
      "\"1-2-3-\"",
      "\"3-2-1-\"",
      "\"3-2-1-0-\"",
      "\"-3-2-1\""
    ],
    "correctAnswer": 1,
    "explanation": "The loop starts at `i = 3`, then `2`, then `1`, appending each number followed by a hyphen: '3-2-1-'."
  },
  {
    "id": 72,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Directional Mismatch Causing Infinite Loop",
    "question": "What is the critical bug in the following for loop?",
    "code": "for (let i = 1; i <= 5; i--) {\n  console.log(i);\n}",
    "options": [
      "i is declared with let instead of var",
      "The update expression i-- decrements i instead of incrementing, so i <= 5 is always true, causing an infinite loop",
      "Missing curly braces around console.log",
      "i <= 5 must be written as i < 6"
    ],
    "correctAnswer": 1,
    "explanation": "Starting from `i = 1`, `i--` decreases `i` to 0, -1, -2, -3... All of these values will forever be `<= 5`, creating an infinite loop that crashes or freezes the execution thread."
  },
  {
    "id": 73,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Sum of Odd Numbers using Continue",
    "question": "What is the final value of sum printed by this loop?",
    "code": "let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  if (i % 2 === 0) continue;\n  sum += i;\n}\nconsole.log(sum);",
    "options": [
      "15",
      "6",
      "9",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "When `i` is even (`i % 2 === 0`), `continue` skips the addition. Thus, only odd numbers are added: 1 + 3 + 5 = 9."
  },
  {
    "id": 74,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Multiplication Step While Loop",
    "question": "What is the final value of x after the loop finishes?",
    "code": "let x = 1;\nwhile (x < 10) {\n  x *= 2;\n}\nconsole.log(x);",
    "options": [
      "8",
      "10",
      "16",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "Values of x: 1 -> 2 -> 4 -> 8 (still < 10) -> 16 (16 < 10 is false, loop exits). Final x is 16."
  },
  {
    "id": 75,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Zero Execution For Loop",
    "question": "How many times does the console.log execute in the following loop?",
    "code": "for (let i = 0; i < 0; i++) {\n  console.log(\"Run\");\n}",
    "options": [
      "0 times (does not execute)",
      "1 time",
      "Infinite times",
      "Throws SyntaxError"
    ],
    "correctAnswer": 0,
    "explanation": "The initial condition `i < 0` (0 < 0) is false right from the start. Hence the body never executes (0 times)."
  },
  {
    "id": 76,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 3.5,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Triangular Dependent Nested Loop",
    "question": "What is the final value of variable a?",
    "code": "let a = 0;\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < i; j++) {\n    a++;\n  }\n}\nconsole.log(a);",
    "options": [
      "0",
      "3",
      "6",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "- When i = 0: j < 0 is false (0 runs)\n- When i = 1: j = 0 runs (1 run)\n- When i = 2: j = 0, 1 runs (2 runs)\nTotal executions: 0 + 1 + 2 = 3."
  },
  {
    "id": 77,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "single_choice",
    "isBonus": false,
    "title": "Declaration vs Expression Hoisting",
    "question": "What is the primary difference between a function declaration and a function expression regarding hoisting?",
    "code": null,
    "options": [
      "Function expressions are hoisted with their complete body, while declarations are not hoisted at all.",
      "Function declarations are hoisted completely with their definition, allowing them to be invoked before their line of declaration. Function expressions assigned to variables are not hoisted as callable functions.",
      "Function declarations cannot have parameters, whereas function expressions can.",
      "Both are hoisted identically in all JavaScript environments."
    ],
    "correctAnswer": 1,
    "explanation": "Function declarations (`function foo() {}`) are hoisted in their entirety to the top of their containing scope during compilation. In contrast, function expressions (`var foo = function() {}`) have only their variable name hoisted (initialized to `undefined`), so calling them beforehand throws a `TypeError: foo is not a function`."
  },
  {
    "id": 78,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Function Declaration Hoisting Call",
    "question": "What is logged when calling a declared function before its definition in the code?",
    "code": "sayHello();\n\nfunction sayHello() {\n  console.log(\"Welcome to JavaScript!\");\n}",
    "options": [
      "\"Welcome to JavaScript!\"",
      "ReferenceError: Cannot access 'sayHello' before initialization",
      "undefined",
      "TypeError: sayHello is not a function"
    ],
    "correctAnswer": 0,
    "explanation": "Because function declarations are hoisted completely along with their body to the top of the scope during the creation phase, `sayHello()` can be called anywhere in that scope without error."
  },
  {
    "id": 79,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "typeof Hoisted Function Expression Variable",
    "question": "What does the following console statement print?",
    "code": "console.log(typeof greet);\n\nvar greet = function() {\n  return \"Namaste!\";\n};",
    "options": [
      "\"function\"",
      "\"undefined\"",
      "ReferenceError",
      "\"object\""
    ],
    "correctAnswer": 1,
    "explanation": "`var greet` is hoisted and initialized to `undefined`. The assignment to the function occurs later at runtime. Therefore, before that line executes, `greet` is `undefined`, and `typeof greet` returns `\"undefined\"`."
  },
  {
    "id": 80,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Invoking Hoisted Function Expression Error",
    "question": "What specific error is thrown when executing this code?",
    "code": "computeTotal();\n\nvar computeTotal = function() {\n  console.log(\"Total computed\");\n};",
    "options": [
      "ReferenceError: computeTotal is not defined",
      "TypeError: computeTotal is not a function",
      "SyntaxError: Invalid invocation",
      "No error, it prints 'Total computed'"
    ],
    "correctAnswer": 1,
    "explanation": "At the time `computeTotal()` is called, `var computeTotal` has been hoisted with value `undefined`. Attempting to invoke `undefined` as a function throws a `TypeError: computeTotal is not a function`."
  },
  {
    "id": 81,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Missing Arguments Resulting in NaN",
    "question": "What is the return value of multiplying when one argument is omitted?",
    "code": "function multiply(a, b) {\n  return a * b;\n}\n\nconsole.log(multiply(5));",
    "options": [
      "25",
      "5",
      "NaN",
      "TypeError: Expected 2 arguments but got 1"
    ],
    "correctAnswer": 2,
    "explanation": "JavaScript does not enforce parameter counts. When `multiply(5)` is called, `a` receives `5` and `b` defaults to `undefined`. In arithmetic, `5 * undefined` evaluates to `NaN`."
  },
  {
    "id": 82,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Default Parameters and Explicit Undefined",
    "question": "What does the following function call output?",
    "code": "function calculateFare(base, tax = 20) {\n  return base + tax;\n}\n\nconsole.log(calculateFare(100, undefined));",
    "options": [
      "100",
      "120",
      "NaN",
      "TypeError"
    ],
    "correctAnswer": 1,
    "explanation": "Default parameters are triggered NOT ONLY when an argument is missing, but also whenever `undefined` is explicitly passed. Here, `tax` falls back to `20`, so `100 + 20 = 120`."
  },
  {
    "id": 83,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Empty Return Statement Value",
    "question": "What is returned by a function with an empty return statement?",
    "code": "function checkStatus() {\n  let status = \"OK\";\n  return;\n}\n\nconsole.log(checkStatus());",
    "options": [
      "\"OK\"",
      "null",
      "undefined",
      "false"
    ],
    "correctAnswer": 2,
    "explanation": "An empty `return;` statement immediately halts function execution and returns `undefined` to the caller."
  },
  {
    "id": 84,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Unreachable Code After Return",
    "question": "What is logged to the console by calling processData()?",
    "code": "function processData() {\n  return \"Completed\";\n  console.log(\"Sending Notification...\");\n}\n\nconsole.log(processData());",
    "options": [
      "Sending Notification... Completed",
      "\"Completed\"",
      "undefined",
      "Sending Notification..."
    ],
    "correctAnswer": 1,
    "explanation": "A `return` statement immediately terminates function execution. The console.log on the subsequent line is unreachable dead code and never executes."
  },
  {
    "id": 85,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Variable Shadowing in Function Scope",
    "question": "What values are printed in order by this code?",
    "code": "var balance = 500;\n\nfunction updateAccount() {\n  var balance = 900;\n  console.log(balance);\n}\n\nupdateAccount();\nconsole.log(balance);",
    "options": [
      "900 and 900",
      "900 and 500",
      "500 and 900",
      "undefined and 500"
    ],
    "correctAnswer": 1,
    "explanation": "Inside `updateAccount`, the local variable `var balance = 900` shadows the global `balance`. When `updateAccount()` runs, it prints `900`. Outside the function, the global `balance` was never altered, so it remains `500`."
  },
  {
    "id": 86,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Lexical Scope Chain Traversal",
    "question": "What is the output of the nested function execution below?",
    "code": "var x = 10;\n\nfunction outer() {\n  var y = 20;\n  function inner() {\n    console.log(x + y);\n  }\n  inner();\n}\n\nouter();",
    "options": [
      "30",
      "NaN",
      "ReferenceError: x is not defined",
      "undefined"
    ],
    "correctAnswer": 0,
    "explanation": "The `inner` function has access to variables in its own scope, its parent outer scope (`y = 20`), and the global scope (`x = 10`) via the scope chain. It successfully evaluates `10 + 20 = 30`."
  },
  {
    "id": 87,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "var Ignores Block Scope Inside Functions",
    "question": "What is logged when accessing x after an if-block inside a function?",
    "code": "function verifyCode() {\n  if (true) {\n    var code = 404;\n  }\n  console.log(code);\n}\n\nverifyCode();",
    "options": [
      "404",
      "ReferenceError: code is not defined",
      "undefined",
      "null"
    ],
    "correctAnswer": 0,
    "explanation": "Variables declared with `var` are function-scoped, NOT block-scoped. `var code` ignores the `if` block boundary and is scoped to the entire `verifyCode` function body. Therefore, `console.log(code)` prints `404`."
  },
  {
    "id": 88,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Local Hoisting Shadowing Global Variable",
    "question": "What is logged by the function call below?",
    "code": "var rate = 5;\n\nfunction printRate() {\n  console.log(rate);\n  var rate = 10;\n}\n\nprintRate();",
    "options": [
      "5",
      "10",
      "undefined",
      "ReferenceError"
    ],
    "correctAnswer": 2,
    "explanation": "Inside `printRate`, the local `var rate` declaration is hoisted to the top of the function scope and initialized to `undefined`. This local declaration shadows the global `rate` from the start of the function! At the moment `console.log(rate)` runs, local `rate` is still `undefined`."
  },
  {
    "id": 89,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Accessing Function Local Variable Externally",
    "question": "What happens when trying to access variable 'tax' outside the function where it was declared?",
    "code": "function computeTax() {\n  var tax = 15;\n}\n\ncomputeTax();\nconsole.log(tax);",
    "options": [
      "Prints 15",
      "Prints undefined",
      "Throws ReferenceError: tax is not defined",
      "Prints null"
    ],
    "correctAnswer": 2,
    "explanation": "`var tax` is local to `computeTax`. Variables declared inside a function cannot be accessed from outside in the enclosing global scope. Attempting to reference it results in `ReferenceError: tax is not defined`."
  },
  {
    "id": 90,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "multiple_choice",
    "isBonus": false,
    "title": "First-Class Functions Properties",
    "question": "In JavaScript, functions are 'first-class citizens'. What does this mean? (Select all that apply)",
    "code": null,
    "options": [
      "Functions can be stored in variables and data structures (arrays/objects).",
      "Functions can be passed as arguments to other functions.",
      "Functions can be returned as values from other functions.",
      "Functions can only be created at compile time and never during runtime."
    ],
    "correctAnswer": [
      0,
      1,
      2
    ],
    "explanation": "First-class citizen status in programming languages means functions are treated as regular values: they can be assigned to variables, passed as arguments (callbacks), returned from other functions (higher-order functions), and created dynamically at runtime."
  },
  {
    "id": 91,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "fill_blank",
    "isBonus": false,
    "title": "Default Return Value of Functions",
    "question": "What value is returned by a JavaScript function that completes execution without encountering a return statement?",
    "code": "function doWork() {\n  let a = 10;\n}\nlet res = doWork(); // res is _______",
    "options": [],
    "correctAnswer": "undefined",
    "acceptedAnswers": [
      "undefined"
    ],
    "explanation": "If a function body finishes executing without a return statement, JavaScript automatically returns `undefined`."
  },
  {
    "id": 92,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Mutating Global Variable from Function",
    "question": "What is logged to the console after the function call?",
    "code": "var score = 50;\n\nfunction incrementScore() {\n  score = score + 25;\n}\n\nincrementScore();\nconsole.log(score);",
    "options": [
      "50",
      "75",
      "undefined",
      "ReferenceError"
    ],
    "correctAnswer": 1,
    "explanation": "Inside `incrementScore`, `score` is not redeclared with `var`, `let`, or `const`. The engine resolves `score` up the scope chain to the global `score` variable and modifies it directly. `50 + 25 = 75`."
  },
  {
    "id": 93,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Higher-Order Function Returning Function",
    "question": "What is logged by calling the returned inner function?",
    "code": "function createMultiplier(multiplier) {\n  return function(num) {\n    return num * multiplier;\n  };\n}\n\nlet double = createMultiplier(2);\nconsole.log(double(7));",
    "options": [
      "14",
      "undefined",
      "NaN",
      "TypeError: double is not a function"
    ],
    "correctAnswer": 0,
    "explanation": "`createMultiplier(2)` returns an inner function that remembers `multiplier = 2` via lexical scoping (closure). Calling `double(7)` calculates `7 * 2 = 14`."
  },
  {
    "id": 94,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "single_choice",
    "isBonus": false,
    "title": "Definition of Lexical Scope",
    "question": "What does 'Lexical Scoping' mean in JavaScript?",
    "code": null,
    "options": [
      "Variable scope is determined dynamically at runtime based on where functions are called from.",
      "Variable scope is determined by the physical location of variables and blocks where they are authored in the source code.",
      "Scope is determined strictly by alphabetical sorting of variable names.",
      "Scope is reset every time the event loop ticks."
    ],
    "correctAnswer": 1,
    "explanation": "Lexical (or static) scoping means that variable accessibility is determined by the location of code within the nested source code structures written by the programmer, NOT where functions are invoked."
  },
  {
    "id": 95,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Pass by Value with Primitive Parameters",
    "question": "What is the final value of originalNumber logged to the console?",
    "code": "function modifyValue(val) {\n  val = 999;\n}\n\nlet originalNumber = 42;\nmodifyValue(originalNumber);\nconsole.log(originalNumber);",
    "options": [
      "999",
      "42",
      "undefined",
      "NaN"
    ],
    "correctAnswer": 1,
    "explanation": "Primitive data types (such as numbers) are passed by value. `val` receives a copy of `42`. Reassigning `val = 999` modifies only the local parameter variable, leaving `originalNumber` unchanged at 42."
  },
  {
    "id": 96,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Excess Arguments Handling",
    "question": "What does the function return when passed extra arguments?",
    "code": "function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(10, 20, 30, 40));",
    "options": [
      "30",
      "100",
      "TypeError: Expected 2 arguments, got 4",
      "NaN"
    ],
    "correctAnswer": 0,
    "explanation": "JavaScript does not throw errors when extra arguments are passed. `a` takes 10, `b` takes 20, and the extra arguments (30, 40) are simply ignored by the named parameters. `10 + 20 = 30`."
  },
  {
    "id": 97,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Basic",
    "type": "true_false",
    "isBonus": false,
    "title": "First-Class Citizen Status of Functions",
    "question": "True or False: In JavaScript, functions are treated as objects and can be assigned properties just like objects.",
    "code": "function greet() {}\ngreet.language = \"English\";\nconsole.log(greet.language); // \"English\"",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True. In JavaScript, functions are 'Function objects'. They inherit from `Function.prototype` (and ultimately `Object.prototype`) and can have custom properties attached to them."
  },
  {
    "id": 98,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Default Parameter Dependent on Earlier Parameter",
    "question": "What is logged to the console by the following function call?",
    "code": "function calculate(x, y = x * 2) {\n  return x + y;\n}\n\nconsole.log(calculate(5));",
    "options": [
      "15",
      "10",
      "NaN",
      "ReferenceError: x is not defined"
    ],
    "correctAnswer": 0,
    "explanation": "Default parameters can reference preceding parameters that have already been evaluated. When `calculate(5)` is called: `x = 5`. `y` defaults to `x * 2 = 10`. The returned sum is `5 + 10 = 15`."
  },
  {
    "id": 99,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "output_prediction",
    "isBonus": false,
    "title": "Duplicate Function Declaration Overriding",
    "question": "What is returned when multiple function declarations share the same name?",
    "code": "function getVersion() {\n  return \"v1.0\";\n}\n\nfunction getVersion() {\n  return \"v2.0\";\n}\n\nconsole.log(getVersion());",
    "options": [
      "\"v1.0\"",
      "\"v2.0\"",
      "SyntaxError: Identifier 'getVersion' has already been declared",
      "undefined"
    ],
    "correctAnswer": 1,
    "explanation": "When multiple function declarations share the exact same identifier in the same scope, the later declaration completely overwrites any earlier declaration during the hoisting phase. Thus, `getVersion()` returns \"v2.0\"."
  },
  {
    "id": 100,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 4,
    "difficulty": "Medium",
    "type": "bug_spot",
    "isBonus": false,
    "title": "Missing Identifier in Function Declaration",
    "question": "Why does the following standalone statement throw a SyntaxError?",
    "code": "function (a, b) {\n  return a + b;\n}",
    "options": [
      "Function declarations require a function identifier/name; only function expressions can be anonymous",
      "Missing semicolon after function definition",
      "return keyword cannot be used without var",
      "Parameters must have explicit types declared"
    ],
    "correctAnswer": 0,
    "explanation": "A standalone function declaration must have an identifier name (`function add(a, b) {}`). Anonymous functions are only allowed as expressions (e.g. assigned to a variable or passed as an inline callback)."
  },
  {
    "id": 101,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Nested Ternary with Short-Circuit Falsy Coercion",
    "question": "What is the final evaluated value of 'res' logged to the console?",
    "code": "let res = (0 || (\"0\" && !\"\") ? (\"false\" ? 1 : 2) : 3);\nconsole.log(res);",
    "options": [
      "1",
      "2",
      "3",
      "undefined"
    ],
    "correctAnswer": 0,
    "explanation": "Step-by-step evaluation:\n1. `!\"\"`: empty string is falsy, so `!\"\"` evaluates to `true`.\n2. `\"0\" && true`: \"0\" is a non-empty string, hence TRUTHY. In `&&`, if left is truthy, the right operand `true` is returned.\n3. `0 || true`: 0 is falsy, so `||` moves to the right operand `true`.\n4. Condition is `true`, so we evaluate `(\"false\" ? 1 : 2)`.\n5. `\"false\"` is a non-empty string, which is TRUTHY in JavaScript! Therefore, the truthy branch `1` is selected.\nFinal result: 1."
  },
  {
    "id": 102,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Switch Strict Matching and Fall-Through Trap",
    "question": "What is the exact output of this switch block with numeric and string cases?",
    "code": "let val = 5;\nlet out = \"\";\nswitch (val) {\n  case \"5\":\n    out += \"String \";\n  case 5:\n    out += \"Num \";\n  case 5 + 0:\n    out += \"Sum \";\n    break;\n  default:\n    out += \"Def\";\n}\nconsole.log(out.trim());",
    "options": [
      "\"Num Sum\"",
      "\"String Num Sum\"",
      "\"Num\"",
      "\"Def\""
    ],
    "correctAnswer": 0,
    "explanation": "1. `val = 5` (number). `case \"5\":` fails because `5 === \"5\"` is false (switch uses strict equality).\n2. `case 5:` succeeds! `out += \"Num \"`.\n3. Since `case 5:` has no `break`, execution falls through into `case 5 + 0:` (evaluates to case 5). `out += \"Sum \"`.\n4. Then `break` terminates the switch.\nOutput: 'Num Sum'."
  },
  {
    "id": 103,
    "topicId": 3,
    "topicName": "03. Control Structures: Conditionals",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Comma Operator Side Effects in Conditional Assignment",
    "question": "What are the values of a and b printed to the console?",
    "code": "let a = (1, 0, 5);\nlet b = (a > 3) ? (a++, ++a) : 0;\nconsole.log(a, b);",
    "options": [
      "7 7",
      "6 7",
      "7 6",
      "5 0"
    ],
    "correctAnswer": 0,
    "explanation": "1. The comma operator evaluates each expression and returns the last. `(1, 0, 5)` returns `5`, so `a = 5`.\n2. In `(a > 3) ? (a++, ++a) : 0`: `5 > 3` is true.\n3. In `(a++, ++a)`:\n   - `a++` returns 5, then increments `a` from 5 to 6.\n   - `,` moves to `++a` which increments `a` from 6 to 7 and returns 7.\n   - The comma expression returns the final value `7`, which is assigned to `b`.\n4. Both `a` and `b` are now 7. Output: 7 7."
  },
  {
    "id": 104,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Infinite Loop Trap in Do...While Condition Mutation",
    "question": "What happens when executing the following do...while loop?",
    "code": "let i = 0, count = 0;\ndo {\n  count += i--;\n} while (++i < 3);\nconsole.log(count, i);",
    "options": [
      "Infinite loop",
      "0 3",
      "3 3",
      "-1 3"
    ],
    "correctAnswer": 0,
    "explanation": "Trace:\n1. Start `i = 0`.\n2. Loop body: `count += i--` adds 0 to count, then decrements `i` from 0 to -1.\n3. Loop condition: `++i` increments `i` from -1 back to 0, then checks `0 < 3` (true!).\n4. Loop body runs again: `i--` decrements `i` to -1.\n5. Condition runs: `++i` increments `i` back to 0, checks `0 < 3` (true!).\n`i` oscillates endlessly between 0 and -1, never reaching 3. This creates an infinite loop!"
  },
  {
    "id": 105,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Outer Loop Mutation Inside Nested Loop",
    "question": "What is the final value of 'total' logged to the console?",
    "code": "let total = 0;\nfor (let i = 0; i < 4; i++) {\n  for (let j = 0; j < 4; j++) {\n    if (i === j) {\n      i++;\n      continue;\n    }\n    total++;\n  }\n}\nconsole.log(total);",
    "options": [
      "0",
      "6",
      "12",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "Trace how `i` is mutated:\n1. i=0, j=0: `i === j` is true. `i++` makes `i = 1`. `continue` moves inner loop to j=1.\n2. i=1, j=1: `i === j` is true. `i++` makes `i = 2`. `continue` moves inner loop to j=2.\n3. i=2, j=2: `i === j` is true. `i++` makes `i = 3`. `continue` moves inner loop to j=3.\n4. i=3, j=3: `i === j` is true. `i++` makes `i = 4`. `continue` moves inner loop to j=4. Inner loop terminates (4 < 4 is false).\n5. Outer loop update: `i++` makes `i = 5`. Check `5 < 4` is false! Outer loop terminates!\n`total++` was NEVER reached! Output: 0."
  },
  {
    "id": 106,
    "topicId": 4,
    "topicName": "04. Control Structures: Loops",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Converging Multi-Variable For Loop",
    "question": "What is the value of 'res' after the multi-variable for loop completes?",
    "code": "let res = 0;\nfor (let i = 0, j = 10; i < j; i += 2, j -= 3) {\n  res += i + j;\n}\nconsole.log(res);",
    "options": [
      "19",
      "29",
      "10",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "Step-by-step execution:\n- Iteration 1: i=0, j=10. 0 < 10 (true). res += 0 + 10 = 10. Update: i=2, j=7.\n- Iteration 2: i=2, j=7. 2 < 7 (true). res += 2 + 7 = 19. Update: i=4, j=4.\n- Check: 4 < 4 is false. Loop terminates immediately!\nFinal res: 19."
  },
  {
    "id": 107,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Variable vs Function Declaration Hoisting Precedence",
    "question": "What are the two typeof outputs printed by the following code?",
    "code": "console.log(typeof foo);\n\nvar foo = 10;\nfunction foo() {}\n\nconsole.log(typeof foo);",
    "options": [
      "\"function\" and \"number\"",
      "\"undefined\" and \"number\"",
      "\"function\" and \"function\"",
      "TypeError: foo is not a function"
    ],
    "correctAnswer": 0,
    "explanation": "During the creation phase (hoisting):\n1. Function declarations are hoisted before variable declarations. `function foo() {}` is hoisted first.\n2. When `var foo` is encountered, the identifier `foo` already exists in the scope, so the declaration is ignored without overwriting the function.\n3. Thus, at line 1, `foo` is the hoisted function. `typeof foo` is `\"function\"`.\n4. At line 2, `foo = 10` executes at runtime, reassigning `foo` to the number 10.\n5. At line 5, `typeof foo` is `\"number\"`."
  },
  {
    "id": 108,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Parameter Shadowing and Global Scope Isolation",
    "question": "What is printed by the inner function and the final global console statement?",
    "code": "var x = 10;\n\nfunction outer(x) {\n  var x = 20;\n  function inner() {\n    x++;\n    console.log(x);\n  }\n  inner();\n}\n\nouter(30);\nconsole.log(x);",
    "options": [
      "21 and 10",
      "21 and 21",
      "31 and 10",
      "20 and 10"
    ],
    "correctAnswer": 0,
    "explanation": "1. `outer(30)` is called. The parameter `x` initially takes 30.\n2. `var x = 20` assigns 20 to the function-scoped variable `x` (parameters and local vars share the same function scope).\n3. `inner()` runs. It looks up the scope chain and finds `outer`'s `x` (20), increments it to 21, and logs 21.\n4. Global `var x = 10` was completely shadowed by `outer`'s local scope and remains untouched.\n5. `console.log(x)` logs 10. Output: 21 and 10."
  },
  {
    "id": 109,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Function Hoisting Inside Function Protecting Global Scope",
    "question": "What is printed by the final console.log(a) statement?",
    "code": "var a = 1;\n\nfunction b() {\n  a = 10;\n  return;\n  function a() {}\n}\n\nb();\nconsole.log(a);",
    "options": [
      "1",
      "10",
      "undefined",
      "TypeError: a is not a function"
    ],
    "correctAnswer": 0,
    "explanation": "Inside function `b`: \n1. `function a() {}` is a function declaration. It is hoisted to the TOP of function `b`'s local scope!\n2. This creates a local variable `a` inside function `b`!\n3. When `a = 10` executes, it assigns 10 to the LOCAL variable `a`, not the global `a`.\n4. Then `return` exits the function.\n5. The global variable `a` was never modified and remains `1`! Hence `console.log(a)` logs `1`."
  },
  {
    "id": 110,
    "topicId": 5,
    "topicName": "05. Functions & Scope",
    "weightage": 5,
    "difficulty": "High - Bonus",
    "type": "output_prediction",
    "isBonus": true,
    "title": "[BONUS] Independent Lexical Environments in Closures",
    "question": "What is logged by the two counter calls at the end?",
    "code": "function buildCounter() {\n  var count = 0;\n  return {\n    up: function() { return ++count; },\n    down: function() { return --count; }\n  };\n}\n\nvar c1 = buildCounter();\nvar c2 = buildCounter();\n\nc1.up();\nc1.up();\nconsole.log(c1.up(), c2.up());",
    "options": [
      "3 1",
      "3 3",
      "2 1",
      "3 0"
    ],
    "correctAnswer": 0,
    "explanation": "Each invocation of `buildCounter()` creates a brand-new, independent execution context and lexical environment with its own private `count = 0` variable:\n- `c1` increments its own count: 0 -> 1 -> 2 -> 3. `c1.up()` returns 3.\n- `c2` has its own separate count variable: 0 -> 1. `c2.up()` returns 1.\nOutput: 3 1."
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA;
}
