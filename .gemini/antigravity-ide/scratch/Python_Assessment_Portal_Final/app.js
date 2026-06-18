// ═══════════════════════════════════════════════════════
//  ALL 25 QUESTIONS
// ═══════════════════════════════════════════════════════
const questions = [
  { no: 1, title: "Sum of List Numbers",
    statement: "Write a Python program to find the sum of all numbers in a given list.",
    inputFormat: ["First line contains an integer N, representing the number of elements.", "Second line contains N space-separated integers."],
    outputFormat: ["Print the sum of all elements."],
    constraints: ["1 ≤ N ≤ 100", "-1000 ≤ Element ≤ 1000"],
    samples: [{ input: "5\n10 20 30 40 50", output: "150" }] },
  { no: 2, title: "Reverse the String",
    statement: "Write a Python program to reverse the given string.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the reversed string."],
    constraints: ["Length ≤ 100"],
    samples: [{ input: "Python", output: "nohtyP" }] },
  { no: 3, title: "Count the Characters in a String",
    statement: "Write a program to count the total number of characters in a string including spaces.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the total number of characters."],
    constraints: [],
    samples: [{ input: "Python", output: "6" }] },
  { no: 4, title: "Palindrome of String",
    statement: "Write a program to check whether the given string is a palindrome.",
    inputFormat: ["A string."],
    outputFormat: ["Print \"Palindrome\" if the string reads the same backward as forward, otherwise print \"Not Palindrome\"."],
    constraints: [],
    samples: [{ input: "madam", output: "Palindrome" }] },
  { no: 5, title: "Convert Lowercase to Uppercase",
    statement: "Write a Python program to convert all lowercase letters into uppercase.",
    inputFormat: ["A string."],
    outputFormat: ["Print the converted string."],
    constraints: [],
    samples: [{ input: "python", output: "PYTHON" }] },
  { no: 6, title: "Count the Number of Words",
    statement: "Write a Python program to count the number of words in a sentence.",
    inputFormat: ["A sentence."],
    outputFormat: ["Print the total number of words."],
    constraints: [],
    samples: [{ input: "Python is easy to learn", output: "5" }] },
  { no: 7, title: "Alternate Character Removal",
    statement: "Write a Python program to remove every alternate character from a given string, starting from the second character (index 1).",
    inputFormat: ["A single string."],
    outputFormat: ["Print the modified string after removing alternate characters."],
    constraints: ["1 ≤ Length of string ≤ 100"],
    samples: [{ input: "Python", output: "Pto" }] },
  { no: 8, title: "Character Frequency Winner",
    statement: "Write a Python program to find the character that appears the maximum number of times in a string. If multiple characters have the same highest frequency, print the character that appears first.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the character with the highest frequency."],
    constraints: ["1 ≤ Length ≤ 100"],
    samples: [{ input: "banana", output: "a" }] },
  { no: 9, title: "Mirror Word Check",
    statement: "Write a Python program to check whether the first half of a string is the mirror (reverse) of the second half.",
    inputFormat: ["A single string of even length."],
    outputFormat: ["Print \"Mirror Word\" if the first half is the reverse of the second half, otherwise print \"Not Mirror Word\"."],
    constraints: ["String length is even."],
    samples: [{ input: "abba", output: "Mirror Word" }] },
  { no: 10, title: "Word Weight Calculator",
    statement: "Each word's weight is equal to the number of characters present in it. Write a Python program to display every word along with its weight.",
    inputFormat: ["A sentence."],
    outputFormat: ["Print each word followed by its weight."],
    constraints: [],
    samples: [{ input: "Python is easy", output: "Python : 6\nis : 2\neasy : 4" }] },
  { no: 11, title: "Special Character Filter",
    statement: "Write a Python program to extract and print only the special characters from a given string.",
    inputFormat: ["A single string containing alphabets, digits and special characters."],
    outputFormat: ["Print only the special characters."],
    constraints: ["Length ≤ 100"],
    samples: [{ input: "abc123@#$", output: "@#$" }] },
  { no: 12, title: "Find the Largest Number",
    statement: "Write a Python program to find the largest element in a given list of integers.",
    inputFormat: ["First line contains an integer N, representing the number of elements.", "Second line contains N space-separated integers."],
    outputFormat: ["Print the largest element."],
    constraints: ["1 ≤ N ≤ 100", "-1000 ≤ Element ≤ 1000"],
    samples: [{ input: "5\n12 45 8 67 23", output: "67" }] },
  { no: 13, title: "Sum of Elements",
    statement: "Write a Python program to calculate the sum of all elements in a list.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print the sum."],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "5\n10 20 30 40 50", output: "150" }] },
  { no: 14, title: "Print Only Even Numbers",
    statement: "Write a Python program to print only the even numbers from a list.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print all even numbers separated by spaces."],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "6\n10 15 20 25 30 35", output: "10 20 30" }] },
  { no: 15, title: "Count of Even and Odd Numbers",
    statement: "Write a Python program to count the number of even and odd elements in a list.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print:\nEven Count : X\nOdd Count : Y"],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "6\n1 2 3 4 5 6", output: "Even Count : 3\nOdd Count : 3" }] },
  { no: 16, title: "Reverse the Elements",
    statement: "Write a Python program to print the elements of a list in reverse order.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print the list in reverse order."],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "5\n10 20 30 40 50", output: "50 40 30 20 10" }] },
  { no: 17, title: "Sum of Positive and Negative Numbers",
    statement: "Write a Python program to calculate the sum of positive numbers and the sum of negative numbers separately.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print:\nPositive Sum : X\nNegative Sum : Y"],
    constraints: ["Elements may be positive, negative, or zero."],
    samples: [{ input: "6\n10 -5 20 -15 30 -10", output: "Positive Sum : 60\nNegative Sum : -30" }] },
  { no: 18, title: "Count and Sum of Positive and Negative Numbers",
    statement: "Write a Python program to count and calculate the sum of positive and negative numbers separately.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print:\nPositive Count : X\nNegative Count : Y\nPositive Sum : A\nNegative Sum : B"],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "7\n10 -5 15 -20 25 -30 40", output: "Positive Count : 4\nNegative Count : 3\nPositive Sum : 90\nNegative Sum : -55" }] },
  { no: 19, title: "Count the Numbers in a String",
    statement: "Write a Python program to count the total number of numeric digits present in a given string.",
    inputFormat: ["A single string containing alphabets, digits, and special characters."],
    outputFormat: ["Print the total number of digits."],
    constraints: ["1 ≤ Length of string ≤ 100"],
    samples: [{ input: "abc123xyz45", output: "5" }] },
  { no: 20, title: "Count the Special Characters in a String",
    statement: "Write a Python program to count the number of special characters in a given string.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the total number of special characters."],
    constraints: ["Consider characters other than alphabets and digits as special characters."],
    samples: [{ input: "abc123@#$", output: "3" }] },
  { no: 21, title: "Remove Duplicate Characters",
    statement: "Write a Python program to remove duplicate characters from a string while preserving the order of their first occurrence.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the string after removing duplicate characters."],
    constraints: ["1 ≤ Length ≤ 100"],
    samples: [{ input: "programming", output: "progamin" }] },
  { no: 22, title: "Convert Lowercase to Uppercase (Without upper())",
    statement: "Write a Python program to convert all lowercase letters in a string to uppercase without using the built-in upper() function.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the converted string."],
    constraints: ["Do not use upper()."],
    samples: [{ input: "python", output: "PYTHON" }] },
  { no: 23, title: "Toggle Case",
    statement: "Write a Python program to convert uppercase letters to lowercase and lowercase letters to uppercase, without using the built-in swapcase() function.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the toggled string."],
    constraints: ["Do not use swapcase()."],
    samples: [{ input: "PyThOn", output: "pYtHoN" }, { input: "Hello123", output: "hELLO123" }] },
  { no: 24, title: "Replace Space with Hyphen",
    statement: "Write a Python program to replace every space in a sentence with a hyphen (-).",
    inputFormat: ["A sentence."],
    outputFormat: ["Print the modified sentence."],
    constraints: ["Preserve all non-space characters."],
    samples: [{ input: "Python is easy", output: "Python-is-easy" }] },
  { no: 25, title: "Reverse Each Word in a Sentence",
    statement: "Write a Python program to reverse each word in a sentence while maintaining the original word order.",
    inputFormat: ["A sentence."],
    outputFormat: ["Print the sentence with each word reversed."],
    constraints: ["Words are separated by a single space."],
    samples: [{ input: "Python is easy", output: "nohtyP si ysae" }] }
];

// ═══════════════════════════════════════════════════════
//  STUDENT ROSTER (54 students)
// ═══════════════════════════════════════════════════════
const students = [
  { name: "Anjali",                    roll: "238U1A0568", branch: "B.Tech CSE" },
  { name: "Krishna",                   roll: "238U1A0593", branch: "B.Tech CSE" },
  { name: "Suri Snehanjali",           roll: "238U1A0507", branch: "B.Tech CSE" },
  { name: "Kunta Samatha",             roll: "238U1A0412", branch: "B.Tech CSE" },
  { name: "Lakshmi Bantrothu",         roll: "238U1A0504", branch: "B.Tech CSE" },
  { name: "Pravallika",                roll: "238U1A0505", branch: "B.Tech CSE" },
  { name: "Rajoli",                    roll: "238U1A0573", branch: "B.Tech CSE" },
  { name: "Gaswetha",                  roll: "238U1A0565", branch: "B.Tech CSE" },
  { name: "Dharamani",                 roll: "238U1A0595", branch: "B.Tech CSE" },
  { name: "Chitha",                    roll: "238U1A0533", branch: "B.Tech CSE" },
  { name: "Kalyani",                   roll: "238U1A0509", branch: "B.Tech CSE" },
  { name: "Suvaneswari",               roll: "238U1A0569", branch: "B.Tech CSE" },
  { name: "Jyothika Reddy",            roll: "238U1A0576", branch: "B.Tech CSE" },
  { name: "Lakshmi Devi Pollakati",    roll: "238U1A0566", branch: "B.Tech CSE" },
  { name: "Pravallika",                roll: "238U1A0574", branch: "B.Tech CSE" },
  { name: "Mukkamalla",                roll: "238U1A0554", branch: "B.Tech CSE" },
  { name: "Keerthana",                 roll: "238U1A0547", branch: "B.Tech CSE" },
  { name: "Priya",                     roll: "238U1A0522", branch: "B.Tech CSE" },
  { name: "Jainabi",                   roll: "238U1A0527", branch: "B.Tech CSE" },
  { name: "Yesha",                     roll: "238U1A0559", branch: "B.Tech CSE" },
  { name: "Hemalatha",                 roll: "238U1A0510", branch: "B.Tech CSE" },
  { name: "Pending Name (238U1A3307)", roll: "238U1A3307", branch: "B.Tech CSE" },
  { name: "Pending Name (238U1A0528)", roll: "238U1A0528", branch: "B.Tech CSE" },
  { name: "Lakshminarasamma",          roll: "238U1A0536", branch: "B.Tech CSE" },
  { name: "Param Archana",             roll: "238U1A0544", branch: "B.Tech CSE" },
  { name: "Keerthana Jinka",           roll: "238U1A0535", branch: "B.Tech CSE" },
  { name: "Pranaya Sri",               roll: "238U1A0555", branch: "B.Tech CSE" },
  { name: "Varshitha",                 roll: "238U1A0513", branch: "B.Tech CSE" },
  { name: "Yannam",                    roll: "238U1A0592", branch: "B.Tech CSE" },
  { name: "Devi",                      roll: "238U1A0515", branch: "B.Tech CSE" },
  { name: "Sneha",                     roll: "238U1A0583", branch: "B.Tech CSE" },
  { name: "Chandrika",                 roll: "238U1A0585", branch: "B.Tech CSE" },
  { name: "Bhumika Rama Bhumika",      roll: "238U1A3310", branch: "B.Tech CSE AIML" },
  { name: "Hitha Pathipati",           roll: "238U1A3319", branch: "B.Tech CSE AIML" },
  { name: "Machupalle",                roll: "238U1A0421", branch: "B.Tech ECE" },
  { name: "Swami Golla",               roll: "238U1A0413", branch: "B.Tech ECE" },
  { name: "Pooja",                     roll: "238U1A0415", branch: "B.Tech ECE" },
  { name: "Mamatha",                   roll: "238U1A0443", branch: "B.Tech ECE" },
  { name: "Manasa",                    roll: "238U1A0416", branch: "B.Tech ECE" },
  { name: "Navya Sree",                roll: "238U1A0434", branch: "B.Tech ECE" },
  { name: "Hemalatha",                 roll: "238U1A0417", branch: "B.Tech ECE" },
  { name: "Dadana",                    roll: "238U1A0428", branch: "B.Tech ECE" },
  { name: "Venkata Siri",              roll: "248U5A0404", branch: "B.Tech ECE" },
  { name: "Bukke",                     roll: "238U1A0403", branch: "B.Tech ECE" },
  { name: "Bellamkondu",               roll: "238U1A0402", branch: "B.Tech ECE" },
  { name: "Dara",                      roll: "238U1A0408", branch: "B.Tech ECE" },
  { name: "Bhargavi",                  roll: "248U5A0411", branch: "B.Tech ECE" },
  { name: "Gaddam",                    roll: "238U1A0411", branch: "B.Tech ECE" },
  { name: "Sree Koneti",               roll: "238U1A0419", branch: "B.Tech ECE" },
  { name: "Pending Name (248U5A0206)", roll: "248U5A0206", branch: "B.Tech" },
  { name: "Pending Name (248U5A0208)", roll: "248U5A0208", branch: "B.Tech" },
  { name: "Pending Name (248U5A0207)", roll: "248U5A0207", branch: "B.Tech" },
  { name: "Pending Name (248U5A0209)", roll: "248U5A0209", branch: "B.Tech" },
  { name: "Pending Name (238U1A0440)", roll: "238U1A0440", branch: "B.Tech" }
];

// ═══════════════════════════════════════════════════════
//  SEEDED RANDOM: assign 5 unique questions per student
// ═══════════════════════════════════════════════════════
function seededShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getStudentQuestions(studentIdx) {
  const seed = (0xDEADBEEF ^ (studentIdx * 6271 + 31337)) >>> 0;
  const allIdxs = [...Array(25).keys()];
  const shuffled = seededShuffle(allIdxs, seed);
  return shuffled.slice(0, 5); // 5 unique question indices
}

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const EXAM_DURATION = 2.5 * 60 * 60; // 2h30m in seconds
let timerInterval = null;
let secondsLeft = EXAM_DURATION;
let currentStudent = null;
let assignedQIdxs = []; // 5 question indices for this student
let currentTab = 0;     // which of the 5 questions is shown
let codes = ['', '', '', '', '']; // saved code per question
let stdins = ['', '', '', '', ''];
let attempted = [false, false, false, false, false]; // has user typed code?


const studentMap = {};
students.forEach((s, i) => { studentMap[s.roll] = { ...s, idx: i }; });

// Apply any saved Admin edits from localStorage
let savedOverrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
students.forEach((s) => {
    if (savedOverrides[s.roll]) {
        s.name = savedOverrides[s.roll].name;
        s.branch = savedOverrides[s.roll].branch;
        let newRoll = savedOverrides[s.roll].newRoll;
        if (newRoll && newRoll !== s.roll) {
            // Update mapping for the new roll number
            let sIdx = studentMap[s.roll].idx;
            delete studentMap[s.roll];
            s.roll = newRoll;
            studentMap[newRoll] = { ...s, idx: sIdx };
        }
    }
});
// Rebuild studentMap just to be absolutely safe after edits
Object.keys(studentMap).forEach(k => delete studentMap[k]);
students.forEach((s, i) => { studentMap[s.roll] = { ...s, idx: i }; });


// ═══════════════════════════════════════════════════════
//  LOGIN
// ═══════════════════════════════════════════════════════
const loginScreen    = document.getElementById('login-screen');
const examScreen     = document.getElementById('exam-screen');
const timeoutScreen  = document.getElementById('timeout-screen');
const submittedScreen= document.getElementById('submitted-screen');
const rollInput      = document.getElementById('roll-input');
const loginError     = document.getElementById('login-error');


function attemptLogin() {
  const roll = rollInput.value.trim().toUpperCase();
  if (roll === 'ADMIN') {
    loginError.style.display = 'none';
    loginScreen.style.display = 'none';
    document.getElementById('admin-screen').style.display = 'flex';
    renderAdmin();
    return;
  }
  const student = studentMap[roll];
  if (!student) { loginError.textContent = "⚠ Roll number not found."; loginError.style.display = 'block'; rollInput.focus(); return; }
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  if (results[roll] && results[roll].status === "ABSENT") {
      loginError.textContent = "⚠ Exam has been deactivated for this student (Marked Absent).";
      loginError.style.display = 'block';
      rollInput.focus();
      return;
  }
  if (results[roll] && results[roll].status === "SUBMITTED") {
      loginError.textContent = "⚠ This student has already submitted the exam.";
      loginError.style.display = 'block';
      rollInput.focus();
      return;
  }

  loginError.style.display = 'none';
  startExam(student);
}


document.getElementById('login-btn').addEventListener('click', attemptLogin);
rollInput.addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });

// ═══════════════════════════════════════════════════════
//  START EXAM
// ═══════════════════════════════════════════════════════
function startExam(student) {
  currentStudent = student;
  assignedQIdxs = getStudentQuestions(student.idx);
  codes   = ['', '', '', '', ''];
  stdins  = ['', '', '', '', ''];
  attempted = [false, false, false, false, false];
  currentTab = 0;

  document.getElementById('header-student').textContent = `${student.name} · ${student.roll}`;

  buildNavTabs();
  renderQuestion(0);

  loginScreen.style.display    = 'none';
  examScreen.style.display     = 'flex';
  window.scrollTo(0, 0);

  startTimer();
}

// ═══════════════════════════════════════════════════════
//  NAV TABS
// ═══════════════════════════════════════════════════════
function buildNavTabs() {
  const nav = document.getElementById('q-nav');
  nav.innerHTML = '';
  assignedQIdxs.forEach((qIdx, i) => {
    const q = questions[qIdx];
    const btn = document.createElement('button');
    btn.className = 'q-tab' + (i === 0 ? ' active' : '');
    btn.id = `tab-${i}`;
    btn.textContent = `Q${i+1}: ${q.title.length > 22 ? q.title.slice(0,20)+'…' : q.title}`;
    btn.addEventListener('click', () => switchTab(i));
    nav.appendChild(btn);
  });
}

function switchTab(i) {
  // save current code/stdin
  if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); } else { codes[currentTab] = ''; }
  stdins[currentTab] = document.getElementById('stdin-input').value;

  // update tab state
  document.getElementById(`tab-${currentTab}`).classList.remove('active');
  currentTab = i;
  document.getElementById(`tab-${i}`).classList.add('active');

  renderQuestion(i);
  // restore code/stdin
  if (typeof editor !== 'undefined') { editor.setValue(codes[i]); } setTimeout(() => editor.refresh(), 10);
  document.getElementById('stdin-input').value  = stdins[i];

  // clear output
  const oc = document.getElementById('output-console');
  oc.textContent = '// Run your code to see output here';
  oc.classList.remove('err-text');
  document.getElementById('output-status').style.display = 'none';
}

// ═══════════════════════════════════════════════════════
//  RENDER QUESTION
// ═══════════════════════════════════════════════════════
function renderQuestion(tabIdx) {
  const qIdx = assignedQIdxs[tabIdx];
  const q = questions[qIdx];
  const panel = document.getElementById('q-panel');

  let constraintsHtml = '';
  if (q.constraints && q.constraints.length) {
    constraintsHtml = `<div class="q-section">
      <div class="q-section-title">Constraints</div>
      <ul class="q-format-list">${q.constraints.map(c=>`<li>${c}</li>`).join('')}</ul>
    </div>`;
  }

  let samplesHtml = q.samples.map((s, i) => `
    <div class="q-sample">
      <div class="q-sample-title">Sample Test Case ${i+1}</div>
      <div class="q-sample-io">
        <div><div class="q-io-label">Input</div><div class="q-code-block">${escHtml(s.input)}</div></div>
        <div><div class="q-io-label">Output</div><div class="q-code-block">${escHtml(s.output)}</div></div>
      </div>
    </div>`).join('');

  panel.innerHTML = `
    <div class="q-card-header">
      <span class="q-no-badge">Q${tabIdx+1} of 5 &nbsp;·&nbsp; Problem No. ${q.no}</span>
      <span class="q-marks">10 Marks</span>
    </div>
    <div class="q-inner">
      <h2 class="q-problem-title">${escHtml(q.title)}</h2>
      <p class="q-statement">${escHtml(q.statement)}</p>
      <div class="q-section">
        <div class="q-section-title">Input Format</div>
        <ul class="q-format-list">${q.inputFormat.map(f=>`<li>${escHtml(f)}</li>`).join('')}</ul>
      </div>
      <div class="q-section">
        <div class="q-section-title">Output Format</div>
        <ul class="q-format-list">${q.outputFormat.map(f=>`<li>${escHtml(f)}</li>`).join('')}</ul>
      </div>
      ${constraintsHtml}
      <div class="q-section">
        <div class="q-section-title">Sample Test Case(s)</div>
        ${samplesHtml}
      </div>
    </div>`;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════════════════
//  TIMER
// ═══════════════════════════════════════════════════════
function startTimer() {
  secondsLeft = EXAM_DURATION;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      triggerTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  const display = document.getElementById('timer');
  display.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  if (secondsLeft <= 600) {
    display.className = 'timer-display danger';
  } else if (secondsLeft <= 1800) {
    display.className = 'timer-display warn';
  } else {
    display.className = 'timer-display';
  }
}

function pad(n) { return String(n).padStart(2, '0'); }


async function triggerTimeout() {
  saveCurrent();
  examScreen.style.display    = 'none';
  
  // Grade before timeout screen
  document.getElementById('loader').classList.remove('hidden');
  document.querySelector('.loader-text').textContent = "Auto-Grading in Progress...";
  
  let earnedMarks = 0;
  for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i].replace(/\t/g, '    ').trim();
        if (!codeToTest) continue; // 0 marks
        
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];
        if (!q.samples || q.samples.length === 0) continue;
        
        let sampleInput = q.samples[0].input;
        let expectedOutput = q.samples[0].output.trim();
        
        try {
            window.stdinLines = sampleInput ? sampleInput.split('\n') : [];
            let stdoutBuffer = "";
            let isolatedPyodide = await loadPyodide({
                stdin: () => {
                    if (window.stdinLines && window.stdinLines.length > 0) return window.stdinLines.shift() + '\n';
                    return '\n';
                },
                stdout: (t) => { stdoutBuffer += t + '\n'; },
                stderr: (t) => {}
            });
            await isolatedPyodide.runPythonAsync(`
import sys, io
from js import window
sys.stdin = io.StringIO("
".join(list(window.stdinLines)) + "
")
            `);
            await isolatedPyodide.runPythonAsync(codeToTest);
            let actualOutput = stdoutBuffer.trim();
            if (actualOutput === expectedOutput || actualOutput.includes(expectedOutput)) {
                earnedMarks += 10;
            }
        } catch (err) {}
  }
  
  document.getElementById('loader').classList.add('hidden');
  timeoutScreen.style.display = 'flex';
  document.getElementById('timeout-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
  document.getElementById('timeout-summary').textContent = `Questions attempted: ${attempted.filter(Boolean).length} / 5 · Marks: ${earnedMarks} / 50`;
  saveResultToLocal(currentStudent.roll, attempted.filter(Boolean).length, earnedMarks, "SUBMITTED");
}


// ═══════════════════════════════════════════════════════
//  CODE EDITOR ACTIONS
// ═══════════════════════════════════════════════════════
function saveCurrent() {
  if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); } else { codes[currentTab] = ''; }
  stdins[currentTab] = document.getElementById('stdin-input').value;
  if (codes[currentTab].trim()) {
    attempted[currentTab] = true;
    document.getElementById(`tab-${currentTab}`).classList.add('solved');
  }
  updateProgress();
}

function updateProgress() {
  const att = attempted.filter(Boolean).length;
  document.getElementById('progress-info').textContent = `${att} / 5 attempted`;
}



// ═══════════════════════════════════════════════════════
//  NEW PYODIDE & CODEMIRROR LOGIC
// ═══════════════════════════════════════════════════════
let pyodideInstance;
let editor;

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Setup CodeMirror
    
    editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        mode: "python",
        theme: "material-ocean",
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        autoCloseBrackets: true,
        indentWithTabs: false,
        dragDrop: false
    });


    editor.on('change', () => {
        const val = editor.getValue().trim();
        if (val) {
            attempted[currentTab] = true;
            document.getElementById(`tab-${currentTab}`).classList.add('solved');
            updateProgress();
        }
    });

    // 2. Load Pyodide
    try {
        window.stdinLines = [];
        pyodideInstance = await loadPyodide({
            stdin: () => {
                if (window.stdinLines && window.stdinLines.length > 0) {
                    return window.stdinLines.shift() + '\n';
                }
                return '\n';
            },
            stdout: (text) => { appendToConsole(text, false); },
            stderr: (text) => { appendToConsole(text, true); }
        });
        document.getElementById('loader').classList.add('hidden');
    } catch (err) {
        alert("Failed to load Secure Python Environment: " + err.message);
    }
});

function appendToConsole(text, isError) {
    const consoleDiv = document.getElementById('output-console');
    if (consoleDiv.textContent === '// Running…' || consoleDiv.textContent === '// Run your code to see output here') {
        consoleDiv.textContent = '';
    }
    const span = document.createElement('span');
    span.textContent = text + '\n';
    if (isError) { span.className = 'err-text'; }
    consoleDiv.appendChild(span);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

document.getElementById('run-btn').addEventListener('click', async () => {
    saveCurrent();
    let code = editor.getValue();
    if (!code.trim()) return;
    
    // Automatically convert any tabs to 4 spaces to prevent TabError
    code = code.replace(/\t/g, '    ');

    const runBtn = document.getElementById('run-btn');
    const spinner = document.getElementById('run-spinner');
    const oc = document.getElementById('output-console');
    const os = document.getElementById('output-status');

    runBtn.disabled = true;
    spinner.style.display = 'inline-block';
    oc.textContent = '// Running…';
    oc.classList.remove('err-text');
    os.style.display = 'none';

    // Set up standard input buffer from the textarea
    let rawInput = document.getElementById('stdin-input').value;
    window.stdinLines = rawInput ? rawInput.split('\n') : [];

    try {
        await pyodideInstance.runPythonAsync(code);
        
        // If nothing was printed, show OK
        if (oc.textContent === '// Running…') {
            oc.textContent = '';
        }
        
        os.textContent = 'OK';
        os.className = 'output-status ok';
    } catch (err) {
        if (err.message && err.message.includes('PythonError')) {
            appendToConsole(err.message, true);
        } else {
            console.error("Execution error:", err);
            appendToConsole(err.message, true);
        }
        os.textContent = 'ERROR';
        os.className = 'output-status err';
    } finally {
        os.style.display = 'inline-block';
        runBtn.disabled = false;
        spinner.style.display = 'none';
    }
});

document.getElementById('clear-btn').addEventListener('click', () => {
    if (confirm('Clear the editor for this question?')) {
        editor.setValue('');
        codes[currentTab] = '';
    }
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
});

document.getElementById('open-submit-modal-btn').addEventListener('click', () => {
    saveCurrent();
    const att = attempted.filter(Boolean).length;
    document.getElementById('modal-attempt-info').textContent =
      `${att} of 5 questions attempted · Estimated marks: ${att * 10} / 50`;
    document.getElementById('submit-modal').classList.add('active');
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('submit-modal').classList.remove('active');
});


document.getElementById('confirm-submit-btn').addEventListener('click', async () => {
    clearInterval(timerInterval);
    document.getElementById('submit-modal').classList.remove('active');
    
    // Show grading loader
    document.getElementById('loader').classList.remove('hidden');
    document.querySelector('.loader-text').textContent = "Auto-Grading in Progress...";
    
    saveCurrent();
    
    // Auto Grade
    let earnedMarks = 0;
    for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i].replace(/\t/g, '    ').trim();
        if (!codeToTest) continue; // 0 marks
        
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];
        if (!q.samples || q.samples.length === 0) continue;
        
        let sampleInput = q.samples[0].input;
        let expectedOutput = q.samples[0].output.trim();
        
        // Run code with sample input
        try {
            window.stdinLines = sampleInput ? sampleInput.split('\n') : [];
            let stdoutBuffer = "";
            let isolatedPyodide = await loadPyodide({
                stdin: () => {
                    if (window.stdinLines && window.stdinLines.length > 0) {
                        return window.stdinLines.shift() + '\n';
                    }
                    return '\n';
                },
                stdout: (t) => { stdoutBuffer += t + '\n'; },
                stderr: (t) => {} // ignore stderr for grading
            });
            
            // Mock stdin in Python space too just in case
            await isolatedPyodide.runPythonAsync(`
import sys
import io
class DOMStdin(io.StringIO):
    def __init__(self, lines):
        super().__init__()
        self._lines = lines
    def readline(self, size=-1):
        if self._lines:
            return self._lines.pop(0) + '
'
        return ''
from js import window
sys.stdin = DOMStdin(list(window.stdinLines))
            `);
            
            await isolatedPyodide.runPythonAsync(codeToTest);
            let actualOutput = stdoutBuffer.trim();
            if (actualOutput === expectedOutput || actualOutput.includes(expectedOutput)) {
                earnedMarks += 10;
            }
        } catch (err) {
            // Error means 0 marks for this question
        }
    }
    
    document.getElementById('loader').classList.add('hidden');
    
    document.getElementById('exam-screen').style.display = 'none';
    document.getElementById('submitted-screen').style.display = 'flex';
    document.getElementById('submit-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
    document.getElementById('submit-summary').textContent = `Questions attempted: ${attempted.filter(Boolean).length} / 5 · Marks: ${earnedMarks} / 50`;
    
    // Save to local storage
    saveResultToLocal(currentStudent.roll, attempted.filter(Boolean).length, earnedMarks, "SUBMITTED");
});


// Close modal on overlay click
document.getElementById('submit-modal').addEventListener('click', function(e) {
  if (e.target === this) document.getElementById('submit-modal').classList.remove('active');
});




// ═══════════════════════════════════════════════════════
//  ADMIN DASHBOARD, ANALYTICS & PDF REPORTS
// ═══════════════════════════════════════════════════════
function saveResultToLocal(roll, attemptedCount, marks, status) {
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  results[roll] = {
    marks: marks,
    attempts: attemptedCount,
    status: status || "SUBMITTED",
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('assessment_results', JSON.stringify(results));
}

window.markAbsent = function(roll) {
  if (confirm("Mark student " + roll + " as ABSENT? They will not be able to login.")) {
      saveResultToLocal(roll, 0, 0, "ABSENT");
      renderAdmin();
  }
};

window.allowRetest = function(roll) {
  if (confirm("Allow student " + roll + " to retake the test? This will permanently delete their current score!")) {
      let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
      delete results[roll];
      localStorage.setItem('assessment_results', JSON.stringify(results));
      renderAdmin();
  }
};

let chartInstance1 = null;
let chartInstance2 = null;

function renderAdmin() {
  const tbody = document.getElementById('admin-tbody');
  tbody.innerHTML = '';
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  
  // 1. Calculate Analytics
  let branchStats = {};
  let totalExcellent = 0;
  let totalPass = 0;
  let totalFail = 0;
  let totalAbsent = 0;
  
  students.forEach((s) => {
    if (!branchStats[s.branch]) {
      branchStats[s.branch] = { total: 0, submitted: 0, totalMarks: 0, absent: 0 };
    }
    branchStats[s.branch].total++;
    
    if (results[s.roll]) {
      if (results[s.roll].status === "ABSENT") {
         branchStats[s.branch].absent++;
         totalAbsent++;
      } else {
         branchStats[s.branch].submitted++;
         branchStats[s.branch].totalMarks += results[s.roll].marks;
         if (results[s.roll].marks >= 40) totalExcellent++;
         else if (results[s.roll].marks >= 30) totalPass++;
         else totalFail++;
      }
    }
  });

  // Render Analytics HTML
  const analyticsDiv = document.getElementById('admin-analytics');
  let analyticsHTML = `<div style="flex:2;display:flex;gap:20px;flex-wrap:wrap;">`;
  let labels = [];
  let avgData = [];

  for (let branch in branchStats) {
    let stat = branchStats[branch];
    let avg = stat.submitted > 0 ? (stat.totalMarks / stat.submitted).toFixed(1) : 0;
    labels.push(branch);
    avgData.push(avg);

    analyticsHTML += `
      <div style="flex:1;min-width:200px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:center;">
        <div style="font-family:'Space Mono',monospace;color:var(--accent2);font-size:14px;margin-bottom:12px;">${branch} ANALYSIS</div>
        <div style="display:flex;justify-content:space-between;gap:12px;font-size:13px;color:var(--muted);">
          <div>
             <div style="font-size:24px;color:var(--text);font-weight:700;">${stat.total}</div>
             <div>Total</div>
          </div>
          <div>
             <div style="font-size:24px;color:#34d399;font-weight:700;">${stat.submitted}</div>
             <div>Submitted</div>
          </div>
          <div>
             <div style="font-size:24px;color:var(--blue-light);font-weight:700;">${avg}</div>
             <div>Avg Marks</div>
          </div>
        </div>
      </div>
    `;
  }
  
  analyticsHTML += `
    </div>
    <div style="flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;flex-direction:column;align-items:center;">
        <canvas id="branchChart" style="max-height:150px;"></canvas>
    </div>
    <div style="flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;flex-direction:column;align-items:center;">
        <canvas id="statusChart" style="max-height:150px;"></canvas>
    </div>
  `;
  analyticsDiv.innerHTML = analyticsHTML;

  // Render Charts
  setTimeout(() => {
    const ctx1 = document.getElementById('branchChart').getContext('2d');
    if (chartInstance1) chartInstance1.destroy();
    chartInstance1 = new Chart(ctx1, {
        type: 'bar',
        data: { labels: labels, datasets: [{ label: 'Avg Marks', data: avgData, backgroundColor: '#3b82f6' }] },
        options: { plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false }
    });

    const ctx2 = document.getElementById('statusChart').getContext('2d');
    if (chartInstance2) chartInstance2.destroy();
    chartInstance2 = new Chart(ctx2, {
        type: 'doughnut',
        data: { labels: ['Excellent', 'Pass', 'Fail', 'Absent', 'Pending'], datasets: [{ data: [totalExcellent, totalPass, totalFail, totalAbsent, students.length - (totalExcellent+totalPass+totalFail+totalAbsent)], backgroundColor: ['#eab308', '#10b981', '#ef4444', '#8b5cf6', '#374151'], borderWidth: 0 }] },
        options: { plugins: { legend: { position: 'right', labels: { color: '#ccc' } } }, responsive: true, maintainAspectRatio: false }
    });
  }, 100);
  
  // 2. Render Table
  students.forEach((s, i) => {
    const res = results[s.roll];
    const isSub = !!res;
    const isAbs = res && res.status === 'ABSENT';
    
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    tr.style.transition = 'background 0.2s';
    tr.onmouseover = () => tr.style.background = 'rgba(255,255,255,0.02)';
    tr.onmouseout = () => tr.style.background = 'transparent';
    
    let statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(245,158,11,0.15);color:#fbbf24;">PENDING</span>`;
    if (isAbs) {
        statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(139,92,246,0.15);color:#a78bfa;">ABSENT</span>`;
    } else if (isSub) {
        if (res.marks >= 40) {
            statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(234,179,8,0.15);color:#fde047;">EXCELLENT</span>`;
        } else if (res.marks >= 30) {
            statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(16,185,129,0.15);color:#34d399;">PASS</span>`;
        } else {
            statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(239,68,68,0.15);color:#fca5a5;">FAIL</span>`;
        }
    }

    tr.innerHTML = `
      <td style="padding:14px 20px;color:var(--muted2);">${i + 1}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;color:var(--text);">${s.roll}</td>
      <td style="padding:14px 20px;color:var(--text);">${s.name}</td>
      <td style="padding:14px 20px;color:var(--muted);">${s.branch}</td>
      <td style="padding:14px 20px;">${statusBadge}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;font-weight:700;color:${isSub && !isAbs ? 'var(--text)' : 'var(--muted2)'};">
        ${isSub && !isAbs ? res.marks + ' / 50' : '-'}
      </td>
      <td style="padding:14px 20px; white-space:nowrap;">
        ${!isSub ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--red);color:var(--red);margin-right:4px;" onclick="markAbsent('${s.roll}')">Absent</button>` : ''}
        ${isSub ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--yellow);color:var(--yellow);margin-right:4px;" onclick="allowRetest('${s.roll}')">Retest</button>` : ''}
        ${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--blue-light);color:var(--blue-light);" onclick="viewStudentReport('${s.roll}')">Report</button>` : ''}
        <button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--muted);color:var(--muted);margin-left:4px;" onclick="openEditStudent('${s.roll}')">Edit</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function getSystemDateString() {
    const d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

window.viewStudentReport = function(roll) {
    const student = students.find(x => x.roll === roll);
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    const res = results[roll];
    
    let resultText = "Pending";
    let resultColor = "#666";
    if (res && res.status !== "ABSENT") {
        if (res.marks >= 40) { resultText = "EXCELLENT"; resultColor = "#d97706"; }
        else if (res.marks >= 30) { resultText = "PASS"; resultColor = "#059669"; }
        else { resultText = "FAIL"; resultColor = "#dc2626"; }
    } else if (res && res.status === "ABSENT") {
        resultText = "ABSENT"; resultColor = "#7c3aed";
    }

    const content = document.getElementById('student-report-content');
    
    let html = `
        <div style="text-align:center;margin-bottom:20px;border-bottom:2px solid #eee;padding-bottom:15px;">
            <h2 style="margin:0;color:#0d1b2a;font-size:20px;">Gouthami Institute of Technology and Management for Women</h2>
            <p style="margin:4px 0 0 0;color:#666;font-size:14px;">Python Lab Assessment - Individual Report</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
            <tr><td style="padding:8px 0;color:#666;width:40%;">Student Name</td><td style="font-weight:700;">${student.name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Roll Number</td><td style="font-weight:700;font-family:'Space Mono',monospace;">${student.roll}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Branch</td><td style="font-weight:700;">${student.branch}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Status</td><td style="font-weight:700;color:${resultColor};">${resultText}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Marks Obtained</td><td style="font-weight:700;font-size:18px;">${res && res.status !== 'ABSENT' ? res.marks + ' / 50' : 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Questions Attempted</td><td style="font-weight:700;">${res && res.status !== 'ABSENT' ? res.attempts + ' / 5' : 'N/A'}</td></tr>
        </table>
        <div style="margin-top:30px;font-size:12px;color:#888;text-align:right;">
            Generated on: ${getSystemDateString()}
        </div>
    `;
    
    content.innerHTML = html;
    document.getElementById('student-report-modal').classList.add('active');
};
document.getElementById('close-report-btn').addEventListener('click', () => {
    document.getElementById('student-report-modal').classList.remove('active');
});

document.getElementById('download-student-pdf-btn').addEventListener('click', () => {
    const element = document.getElementById('student-report-content');
    const opt = {
        margin:       0.5,
        filename:     'Student_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});

document.getElementById('admin-logout-btn').addEventListener('click', () => {
  document.getElementById('admin-screen').style.display = 'none';
  loginScreen.style.display = 'flex';
  rollInput.value = '';
});

document.getElementById('admin-clear-btn').addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all student results from this computer? This cannot be undone!")) {
    localStorage.removeItem('assessment_results');
    renderAdmin();
  }
});

document.getElementById('admin-download-btn').addEventListener('click', () => {
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  let csv = "S.No,Roll Number,Student Name,Branch,Status,Marks\n";
  
  students.forEach((s, i) => {
    const res = results[s.roll];
    const status = res ? "Submitted" : "Pending";
    const marks = res ? res.marks : 0;
    csv += `${i + 1},${s.roll},"${s.name}",${s.branch},${status},${marks}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'Python_Assessment_Results.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.getElementById('admin-download-pdf-btn').addEventListener('click', () => {
    // We will generate PDF of the entire admin-report-container
    // First, let's inject a header with date
    const container = document.getElementById('admin-report-container');
    
    // Create a temporary print header
    const header = document.createElement('div');
    header.id = 'temp-pdf-header';
    header.style.textAlign = 'center';
    header.style.marginBottom = '20px';
    header.innerHTML = `
        <h1 style="color:var(--text);margin-bottom:5px;">Python Lab Assessment - Consolidated Report</h1>
        <p style="color:var(--muted);font-size:14px;margin-top:0;">Generated on: ${getSystemDateString()}</p>
    `;
    container.insertBefore(header, container.firstChild);
    
    // Configure html2pdf
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'Consolidated_Branch_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#0d1b2a' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(container).save().then(() => {
        // Remove the temporary header after saving
        document.getElementById('temp-pdf-header').remove();
    });
});

// --- ANTI-CHEAT & SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    // Ctrl + Shift + X => Force Submit
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'x') {
        if (examScreen.style.display !== 'none') {
            document.getElementById('confirm-submit-btn').click();
        }
    }
});

// Block copy/paste globally on the exam screen
document.getElementById('exam-screen').addEventListener('copy', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('cut', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('paste', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('contextmenu', e => e.preventDefault());

// Also update CodeMirror setup inside DOMContentLoaded


// --- STRICT PROCTORING ---
let tabSwitches = 0;
document.addEventListener('visibilitychange', () => {
    if (document.hidden && document.getElementById('exam-screen').style.display === 'flex') {
        tabSwitches++;
        if (tabSwitches >= 3) {
            alert("STRIKE 3: You have switched tabs 3 times. Your exam is now being forcibly submitted.");
            document.getElementById('confirm-submit-btn').click();
        } else {
            alert(`WARNING: Do not switch tabs or windows! Strike ${tabSwitches} of 3.\nIf you reach 3 strikes, your exam will automatically submit!`);
        }
    }
});

window.addEventListener('beforeunload', function (e) {
    if (document.getElementById('exam-screen').style.display === 'flex') {
        e.preventDefault();
        e.returnValue = 'Are you sure? Your exam progress will be lost if you refresh!';
    }
});


// --- ADMIN EDIT STUDENT LOGIC ---
window.openEditStudent = function(roll) {
    const student = students.find(s => s.roll === roll);
    document.getElementById('edit-original-roll').value = roll;
    document.getElementById('edit-roll-input').value = student.roll;
    document.getElementById('edit-name-input').value = student.name;
    document.getElementById('edit-branch-input').value = student.branch;
    document.getElementById('edit-student-modal').classList.add('active');
};

document.getElementById('close-edit-btn').addEventListener('click', () => {
    document.getElementById('edit-student-modal').classList.remove('active');
});

document.getElementById('save-edit-btn').addEventListener('click', () => {
    const originalRoll = document.getElementById('edit-original-roll').value;
    const newRoll = document.getElementById('edit-roll-input').value.trim().toUpperCase();
    const newName = document.getElementById('edit-name-input').value.trim();
    const newBranch = document.getElementById('edit-branch-input').value.trim();
    
    if (!newRoll || !newName || !newBranch) return;

    // Update in-memory
    const student = students.find(s => s.roll === originalRoll);
    if (!student) return;
    student.name = newName;
    student.branch = newBranch;
    
    // Save to overrides
    let overrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
    if (!overrides[originalRoll]) overrides[originalRoll] = {};
    overrides[originalRoll].name = newName;
    overrides[originalRoll].branch = newBranch;
    overrides[originalRoll].newRoll = newRoll;
    localStorage.setItem('student_overrides', JSON.stringify(overrides));
    
    // If roll changed, update results mapping so grades aren't lost
    if (newRoll !== originalRoll) {
        student.roll = newRoll;
        let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
        if (results[originalRoll]) {
            results[newRoll] = results[originalRoll];
            delete results[originalRoll];
            localStorage.setItem('assessment_results', JSON.stringify(results));
        }
    }
    
    // Refresh admin panel
    document.getElementById('edit-student-modal').classList.remove('active');
    renderAdmin();
});

// --- CUSTOM KEYBOARD REFRESH BLOCKER ---
document.addEventListener('keydown', (e) => {
    // Check for F5 or Ctrl+R
    if (e.key === 'F5' || (e.ctrlKey && e.key.toLowerCase() === 'r')) {
        if (document.getElementById('exam-screen').style.display === 'flex') {
            e.preventDefault();
            if (confirm("WARNING: Refreshing will close your exam and all unsaved progress will be lost. Are you sure you want to refresh?")) {
                // If they say OK, let it refresh
                window.location.reload();
            }
        }
    }
});
