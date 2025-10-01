const quizData = {
  java: [
  { q: "Which keyword is used to inherit a class in Java?", options: ["super", "this", "extends", "implements"], answer: "extends" },
  { q: "Which of these is not a Java feature?", options: ["Object-Oriented", "Use of pointers", "Portable", "Robust"], answer: "Use of pointers" },
  { q: "Which method is the entry point of a Java program?", options: ["start()", "main()", "run()", "execute()"], answer: "main()" },
  { q: "Which keyword is used to define a constant in Java?", options: ["final", "static", "const", "immutable"], answer: "final" },
  { q: "Which operator is used for object creation in Java?", options: ["create", "alloc", "new", "malloc"], answer: "new" },
  { q: "Which package is imported by default in every Java program?", options: ["java.sql", "java.lang", "java.util", "java.io"], answer: "java.lang" },
  { q: "What is the size of int data type in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"], answer: "4 bytes" },
  { q: "Which keyword is used to prevent a method from being overridden?", options: ["static", "final", "const", "abstract"], answer: "final" },
  { q: "Which method is called automatically when an object is created?", options: ["main()", "finalize()", "constructor", "static()"], answer: "constructor" },
  { q: "Which collection class allows key-value pairs?", options: ["List", "Set", "Map", "Queue"], answer: "Map" },
  { q: "Which keyword is used to handle exceptions in Java?", options: ["try", "catch", "throw", "All of these"], answer: "All of these" },
  { q: "Which concept of OOP is achieved by method overloading?", options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"], answer: "Polymorphism" },
  { q: "Which keyword is used to inherit interfaces in Java?", options: ["super", "extends", "implements", "inherits"], answer: "implements" },
  { q: "Which access modifier makes a variable accessible only within the same class?", options: ["public", "private", "protected", "default"], answer: "private" },
  { q: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], answer: "false" },
  { q: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
  { q: "Which of these is a marker interface in Java?", options: ["Runnable", "Serializable", "Cloneable", "Both Serializable and Cloneable"], answer: "Both Serializable and Cloneable" },
  { q: "Which operator is used to compare two objects in Java?", options: ["==", "equals()", "compare()", "==="], answer: "equals()" },
  { q: "Which keyword is used to define a subclass in Java?", options: ["super", "subclass", "extends", "derived"], answer: "extends" },
  { q: "Which of these is used for garbage collection in Java?", options: ["delete", "free()", "Garbage Collector", "dispose"], answer: "Garbage Collector" }

  ],
  python: [
    
  { q: "Which keyword is used to define a function in Python?", options: ["function", "def", "fun", "lambda"], answer: "def" },
  { q: "Which of these is the correct file extension for Python files?", options: [".pyt", ".pt", ".py", ".python"], answer: ".py" },
  { q: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple" },
  { q: "Which keyword is used to handle exceptions in Python?", options: ["try", "catch", "except", "finally"], answer: "except" },
  { q: "Which function is used to get the length of a list in Python?", options: ["size()", "count()", "length()", "len()"], answer: "len()" },
  { q: "Which of the following is used to define a block of code in Python?", options: ["Brackets {}", "Indentation", "Parentheses ()", "Quotes"], answer: "Indentation" },
  { q: "Which operator is used for exponentiation in Python?", options: ["^", "**", "pow", "//"], answer: "**" },
  { q: "What is the output of 7 // 2 in Python?", options: ["3.5", "4", "3", "Error"], answer: "3" },
  { q: "Which of these is not a core data type in Python?", options: ["List", "Tuple", "Dictionary", "Class"], answer: "Class" },
  { q: "Which keyword is used to create a class in Python?", options: ["define", "struct", "class", "object"], answer: "class" },
  { q: "Which of the following is used to define an anonymous function in Python?", options: ["lambda", "def", "fun", "anon"], answer: "lambda" },
  { q: "What is the default return value of a function that does not return anything in Python?", options: ["0", "None", "False", "Empty string"], answer: "None" },
  { q: "Which module in Python is used for regular expressions?", options: ["regex", "pyregex", "re", "expr"], answer: "re" },
  { q: "Which of the following is the correct way to start a comment in Python?", options: ["//", "#", "/* */", "<!-- -->"], answer: "#" },
  { q: "Which of these functions converts a string into a list of characters?", options: ["list()", "str()", "split()", "char()"], answer: "list()" },
  { q: "What is the correct way to check the data type of a variable in Python?", options: ["typeof(x)", "type(x)", "checktype(x)", "datatype(x)"], answer: "type(x)" },
  { q: "Which of these collections does not allow duplicate elements?", options: ["List", "Tuple", "Set", "Dictionary"], answer: "Set" },
  { q: "Which function is used to take input from the user in Python?", options: ["input()", "scan()", "read()", "get()"], answer: "input()" },
  { q: "Which loop is used to iterate over a sequence in Python?", options: ["while", "foreach", "for", "loop"], answer: "for" },
  { q: "Which keyword is used to import a module in Python?", options: ["include", "require", "import", "using"], answer: "import" }
  ],
  cpp: 
   [
  { q: "Which of these is the correct file extension for C++ files?", options: [".cp", ".cpp", ".cxx", ".ccp"], answer: ".cpp" },
  { q: "Which operator is used to allocate memory dynamically in C++?", options: ["malloc", "alloc", "new", "create"], answer: "new" },
  { q: "Which keyword is used to inherit a class in C++?", options: ["super", "extends", "inherits", "public"], answer: "public" },
  { q: "Which of the following is not a fundamental data type in C++?", options: ["int", "float", "string", "double"], answer: "string" },
  { q: "Which function is the entry point of a C++ program?", options: ["start()", "main()", "run()", "program()"], answer: "main()" },
  { q: "Which of the following is used to define a constant in C++?", options: ["static", "const", "final", "#define"], answer: "const" },
  { q: "Which operator is overloaded by default in C++?", options: ["+", "=", "()", "[]"], answer: "=" },
  { q: "Which of the following is not a storage class in C++?", options: ["auto", "register", "static", "volatile"], answer: "volatile" },
  { q: "Which type of function has the same name but different parameters?", options: ["Overloaded function", "Inline function", "Virtual function", "Friend function"], answer: "Overloaded function" },
  { q: "Which of the following concepts is used to implement runtime polymorphism in C++?", options: ["Inheritance", "Virtual functions", "Encapsulation", "Overloading"], answer: "Virtual functions" },
  { q: "Which operator is used to access members of a structure through a pointer?", options: [".", "->", "::", "&"], answer: "->" },
  { q: "Which of these is used to free dynamically allocated memory in C++?", options: ["free()", "delete", "remove()", "clear()"], answer: "delete" },
  { q: "Which of these is a reference variable operator in C++?", options: ["*", "&", "->", "::"], answer: "&" },
  { q: "Which keyword is used to define a class in C++?", options: ["struct", "class", "object", "define"], answer: "class" },
  { q: "Which of these is a valid scope resolution operator in C++?", options: ["::", ":", "->", "."], answer: "::" },
  { q: "Which of the following is an exit-controlled loop in C++?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
  { q: "Which of the following allows defining multiple functions with the same name in C++?", options: ["Polymorphism", "Inheritance", "Overloading", "Encapsulation"], answer: "Overloading" },
  { q: "Which keyword is used to define a constructor in C++?", options: ["function", "class name", "constructor", "void"], answer: "class name" },
  { q: "Which header file is needed for using cout and cin in C++?", options: ["stdio.h", "iostream", "stdlib.h", "string"], answer: "iostream" },
  { q: "Which of these is a feature of C++?", options: ["Object-Oriented", "Platform Independent", "Automatic Garbage Collection", "Interpreted"], answer: "Object-Oriented" }


  ],
  javascript: 
   [
  { q: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of these"], answer: "All of these" },
  { q: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "#", "/* */", "<!-- -->"], answer: "//" },
  { q: "Which method is used to print output to the console in JavaScript?", options: ["console.print()", "log.console()", "console.log()", "print()"], answer: "console.log()" },
  { q: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Oracle", "Sun Microsystems"], answer: "Netscape" },
  { q: "Which of the following is not a JavaScript data type?", options: ["String", "Number", "Boolean", "Character"], answer: "Character" },
  { q: "Which keyword is used to define a function in JavaScript?", options: ["fun", "function", "def", "lambda"], answer: "function" },
  { q: "Which symbol is used for strict equality in JavaScript?", options: ["==", "===", "=", "!=="], answer: "===" },
  { q: "What is the default value of an uninitialized variable in JavaScript?", options: ["null", "undefined", "0", "false"], answer: "undefined" },
  { q: "Which method converts a JSON string into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()" },
  { q: "Which method is used to convert a JavaScript object into a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.encode()", "JSON.toString()"], answer: "JSON.stringify()" },
  { q: "Which operator is used to concatenate strings in JavaScript?", options: ["+", "&", "concat", "."], answer: "+" },
  { q: "Which function is used to execute a block of code after a delay in JavaScript?", options: ["setInterval()", "setTimeout()", "delay()", "wait()"], answer: "setTimeout()" },
  { q: "Which keyword is used to define a constant variable in JavaScript?", options: ["let", "const", "var", "define"], answer: "const" },
  { q: "Which method is used to remove the last element from an array in JavaScript?", options: ["shift()", "pop()", "remove()", "delete()"], answer: "pop()" },
  { q: "Which method adds one or more elements to the end of an array in JavaScript?", options: ["push()", "append()", "insert()", "add()"], answer: "push()" },
  { q: "Which built-in method sorts elements of an array?", options: ["sort()", "order()", "arrange()", "align()"], answer: "sort()" },
  { q: "Which keyword is used to handle exceptions in JavaScript?", options: ["try-catch", "throw", "finally", "All of these"], answer: "All of these" },
  { q: "Which function is used to repeatedly execute a block of code at fixed intervals?", options: ["setTimeout()", "setInterval()", "loop()", "repeat()"], answer: "setInterval()" },
  { q: "Which of the following is the correct way to write 'Hello World' in an alert box?", options: ["alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')", "msgBox('Hello World')"], answer: "alert('Hello World')" },
  { q: "Which symbol is used for multi-line comments in JavaScript?", options: ["//", "#", "/* */", "<!-- -->"], answer: "/* */" }
]

};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 20;

function startQuiz(subject) {
  currentQuiz = quizData[subject];
  currentIndex = 0;
  score = 0;

  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("quiz-section").classList.remove("hidden");
  document.getElementById("quiz-title").innerText = subject.toUpperCase() + " Quiz";

  loadQuestion();
}

function loadQuestion() {
  const questionData = currentQuiz[currentIndex % currentQuiz.length]; // loop if less than 20
  const container = document.getElementById("question-container");
  
  container.innerHTML = `
    <h4>Question ${currentIndex + 1} of ${TOTAL_QUESTIONS}</h4>
    <h3>${questionData.q}</h3>
  `;

  questionData.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option");
    button.onclick = () => selectAnswer(button, option);
    container.appendChild(button);
  });
}

function selectAnswer(button, option) {
  const correct = currentQuiz[currentIndex % currentQuiz.length].answer;
  const options = document.querySelectorAll(".option");

  options.forEach(btn => btn.disabled = true);

  if (option === correct) {
    button.style.backgroundColor = "#28a745";
    button.style.color = "white";
    score++;
  } else {
    button.style.backgroundColor = "#dc3545";
    button.style.color = "white";
    options.forEach(btn => {
      if (btn.innerText === correct) {
        btn.style.backgroundColor = "#28a745";
        btn.style.color = "white";
      }
    });
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < TOTAL_QUESTIONS) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("result-section").classList.remove("hidden");
  document.getElementById("score").innerText = `You scored ${score} out of ${TOTAL_QUESTIONS}`;
}

function restartQuiz() {
  document.getElementById("result-section").classList.add("hidden");
  document.querySelector(".buttons").classList.remove("hidden");
}