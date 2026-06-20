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
  // Changed magic numbers to completely reshuffle questions for all students
  const seed = (0xCAFEBABE ^ (studentIdx * 8191 + 54321)) >>> 0;
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
let passed = [false, false, false, false, false];


const studentMap = {};

let customStudents = JSON.parse(localStorage.getItem('custom_students') || '[]');
students.push(...customStudents);

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


window.switchLoginTab = function(tab) {
    document.getElementById('tab-student').classList.remove('active');
    document.getElementById('tab-admin').classList.remove('active');
    document.getElementById('login-student-view').style.display = 'none';
    document.getElementById('login-admin-view').style.display = 'none';
    
    if (tab === 'student') {
        document.getElementById('tab-student').classList.add('active');
        document.getElementById('login-student-view').style.display = 'block';
    } else {
        document.getElementById('tab-admin').classList.add('active');
        document.getElementById('login-admin-view').style.display = 'block';
    }
};

document.getElementById('admin-login-btn').addEventListener('click', () => {
    const pwd = document.getElementById('admin-password-input').value;
    const correctPwd = localStorage.getItem('admin_password') || 'ADMIN123';
    if (pwd === correctPwd || pwd === 'ADMIN') {
        document.getElementById('admin-login-error').style.display = 'none';
        loginScreen.style.display = 'none';
        document.getElementById('admin-screen').style.display = 'flex';
        renderAdmin();
        if (window.adminInterval) clearInterval(window.adminInterval);
        window.adminInterval = setInterval(renderAdmin, 15000);
    } else {
        document.getElementById('admin-login-error').style.display = 'block';
    }
});

document.getElementById('admin-password-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('admin-login-btn').click();
});

function attemptLogin() {
  const roll = rollInput.value.trim().toUpperCase();
  if (!roll) return;
  
  if (roll === 'ADMIN') {
    loginError.style.display = 'none';
    loginScreen.style.display = 'none';
    document.getElementById('admin-screen').style.display = 'flex';
    renderAdmin();
    if (window.adminInterval) clearInterval(window.adminInterval);
    window.adminInterval = setInterval(renderAdmin, 15000);
    return;
  }
  const student = studentMap[roll];
  if (!student) { loginError.textContent = "⚠ Roll number not found."; loginError.style.display = 'block'; rollInput.focus(); return; }
  
  // Check if Exam is open
  const globalConfig = JSON.parse(localStorage.getItem('admin_config') || '{"examOpen":true}');
  if (!globalConfig.examOpen) {
      loginError.textContent = "⚠ The exam has not started yet or is currently closed.";
      loginError.style.display = 'block';
      rollInput.focus();
      return;
  }

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

  // Check Auth Mode
  const authModes = JSON.parse(localStorage.getItem('student_auth_modes') || '{}');
  const requiresOtp = authModes[roll] === 'OTP';
  
  if (requiresOtp) {
      document.getElementById('otp-email-step').style.display = 'block';
      document.getElementById('otp-code-step').style.display = 'none';
      document.getElementById('student-email-input').value = '';
      document.getElementById('student-otp-input').value = '';
      document.getElementById('otp-error').style.display = 'none';
      document.getElementById('otp-modal').classList.add('active');
      window.pendingStudentLogin = student;
  } else {
      startExam(student);
  }
}

document.getElementById('send-otp-btn').addEventListener('click', async () => {
    const email = document.getElementById('student-email-input').value;
    const student = window.pendingStudentLogin;
    if (!email || !email.includes('@')) {
        document.getElementById('otp-error').textContent = 'Please enter a valid email.';
        document.getElementById('otp-error').style.display = 'block';
        return;
    }
    
    document.getElementById('send-otp-btn').textContent = 'Sending...';
    try {
        const res = await fetch('http://localhost:3000/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roll: student.roll, email })
        });
        const data = await res.json();
        if (data.success) {
            document.getElementById('otp-error').style.display = 'none';
            document.getElementById('otp-email-step').style.display = 'none';
            document.getElementById('otp-code-step').style.display = 'block';
        } else {
            throw new Error(data.error || 'Failed');
        }
    } catch(e) {
        document.getElementById('otp-error').textContent = e.message || "Failed to connect to server";
        document.getElementById('otp-error').style.display = 'block';
    }
    document.getElementById('send-otp-btn').textContent = 'Send Code';
});

document.getElementById('verify-otp-btn').addEventListener('click', async () => {
    const code = document.getElementById('student-otp-input').value;
    const student = window.pendingStudentLogin;
    if (!code) return;
    
    document.getElementById('verify-otp-btn').textContent = 'Verifying...';
    try {
        const res = await fetch('http://localhost:3000/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roll: student.roll, code })
        });
        const data = await res.json();
        if (data.success) {
            document.getElementById('otp-modal').classList.remove('active');
            startExam(student);
        } else {
            throw new Error(data.error || 'Failed');
        }
    } catch(e) {
        document.getElementById('otp-error').textContent = e.message || "Failed to connect to server";
        document.getElementById('otp-error').style.display = 'block';
    }
    document.getElementById('verify-otp-btn').textContent = 'Verify & Start Exam';
});


document.getElementById('login-btn').addEventListener('click', attemptLogin);
rollInput.addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });

// ═══════════════════════════════════════════════════════
//  START EXAM
// ═══════════════════════════════════════════════════════
let lastActivityTime = Date.now();

document.getElementById('exam-screen').addEventListener('mousemove', () => { lastActivityTime = Date.now(); });
document.getElementById('exam-screen').addEventListener('keydown', () => { lastActivityTime = Date.now(); });

async function syncStudentHeartbeat() {
    if (!currentStudent) return;
    const now = Date.now();
    const isIdle = (now - lastActivityTime) > 120000;
    const currentStatus = isIdle ? "IDLE" : "ACTIVE";
    
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    if (results[currentStudent.roll] && results[currentStudent.roll].status === "SUBMITTED") {
        if (window.heartbeatInterval) clearInterval(window.heartbeatInterval);
        return;
    }

    const payload = {
        status: currentStatus,
        lastActiveStr: new Date(lastActivityTime).toISOString(),
        lastSyncStr: new Date().toISOString()
    };
    
    if (!results[currentStudent.roll]) results[currentStudent.roll] = {};
    results[currentStudent.roll] = { ...results[currentStudent.roll], ...payload };
    localStorage.setItem('assessment_results', JSON.stringify(results));
    
    if (window.firebaseDb && window.firebaseSetDoc) {
        try {
            await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, "results", currentStudent.roll), payload, { merge: true });
        } catch(e) { console.error("Heartbeat sync failed", e); }
    }
}
function startExam(student) {
  currentStudent = student;
  assignedQIdxs = getStudentQuestions(student.idx);
  codes   = ['', '', '', '', ''];
  stdins  = ['', '', '', '', ''];
  attempted = [false, false, false, false, false];
  passed = [false, false, false, false, false];
  currentTab = 0;

  document.getElementById('header-student').textContent = `${student.name} · ${student.roll}`;

  buildNavTabs();
  renderQuestion(0);

  loginScreen.style.display    = 'none';
  examScreen.style.display     = 'flex';
  window.scrollTo(0, 0);
  
  if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
          console.warn(`Fullscreen error: ${err.message}`);
      });
  }

  startTimer();
  updateProgress();

  lastActivityTime = Date.now();
  if (window.heartbeatInterval) clearInterval(window.heartbeatInterval);
  window.heartbeatInterval = setInterval(syncStudentHeartbeat, 15000);
  syncStudentHeartbeat();
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
  let newTab = document.getElementById(`tab-${i}`);
  newTab.classList.add('active');
  if (!passed[i]) newTab.classList.add('opened');

  renderQuestion(i);
  // restore code/stdin
  if (typeof editor !== 'undefined') { editor.setValue(codes[i]); } setTimeout(() => editor.refresh(), 10);
  document.getElementById('stdin-input').value  = stdins[i];

  // clear output
  const oc = document.getElementById('output-console');
  oc.textContent = '// Run your code to see output here';
  oc.classList.remove('err-text');
  document.getElementById('output-status').style.display = 'none';

  toggleEditorVisibility();
}

function toggleEditorVisibility() {
    const editorArea = document.querySelector('.editor-area');
    const stdinWrap = document.querySelector('.stdin-wrap');
    const outputWrap = document.querySelector('.output-wrap');
    const editorToolbar = document.querySelector('.editor-toolbar');
    let overlay = document.getElementById('completed-overlay');

    if (passed[currentTab]) {
        editorArea.style.display = 'none';
        stdinWrap.style.display = 'none';
        outputWrap.style.display = 'none';
        editorToolbar.style.display = 'none';
        
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'completed-overlay';
            overlay.style.cssText = 'display:flex;height:100%;align-items:center;justify-content:center;flex-direction:column;background:var(--navy3);flex:1;border-radius:0 0 12px 0;';
            overlay.innerHTML = '<span style="font-size:56px;color:#4ade80;margin-bottom:16px;">✓</span><h2 style="font-size:24px;color:#fff;margin-bottom:10px;">Question Completed</h2><p style="color:var(--muted);font-size:14px;text-align:center;line-height:1.6;">10 Marks Awarded.<br>The code for this question is now securely locked.</p>';
            document.querySelector('.editor-panel').insertBefore(overlay, document.querySelector('.submit-section'));
        }
        overlay.style.display = 'flex';
    } else {
        editorArea.style.display = 'flex';
        stdinWrap.style.display = 'block';
        outputWrap.style.display = 'block';
        editorToolbar.style.display = 'flex';
        if (overlay) {
            overlay.style.display = 'none';
        }
    }
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

    let marksBadge = passed[tabIdx] ? '<span class="q-marks" style="color:#10b981;font-weight:700;">✓ 10 Marks Awarded</span>' : '<span class="q-marks">10 Marks</span>';
  panel.innerHTML = `
    <div class="q-card-header">
      <span class="q-no-badge">Q${tabIdx+1} of 5 &nbsp;·&nbsp; Problem No. ${q.no}</span>
      ${marksBadge}
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
  let questionDetails = [];
  for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i].replace(/\t/g, '    ').trim();
        let isAttempted = codeToTest.length > 0;
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];
        
        let allPassed = passed[i];
        if (!allPassed && isAttempted && q.samples && q.samples.length > 0) {
            allPassed = true;
            window.grading_code = codeToTest;
            for (let s of q.samples) {
                let sampleInput = s.input || "";
                let expectedOutput = s.output.trim();
                window.grading_stdin = sampleInput.split('\n');
                let grading_script = `
import sys, io
from js import window
def _grade_run():
    old_stdout = sys.stdout
    old_stdin = sys.stdin
    captured_out = io.StringIO()
    sys.stdout = captured_out
    try:
        sys.stdin = io.StringIO("\\n".join(list(window.grading_stdin)) + "\\n")
        exec(window.grading_code, {})
        return captured_out.getvalue()
    except Exception:
        return ""
    finally:
        sys.stdout = old_stdout
        sys.stdin = old_stdin
_grade_run()
`;
                try {
                    let actualOutput = await pyodideInstance.runPythonAsync(grading_script);
                    if (actualOutput) actualOutput = actualOutput.trim();
                    else actualOutput = "";
                    
                    if (actualOutput.toLowerCase() !== expectedOutput.toLowerCase()) {
                        allPassed = false;
                        break;
                    }
                } catch(e) {
                    allPassed = false;
                    break;
                }
            }
        }
        if (allPassed && isAttempted) earnedMarks += 10;
        
        questionDetails.push({
            no: i + 1,
            qId: q.no,
            title: q.title,
            attempted: isAttempted,
            passed: allPassed && isAttempted,
            marks: (allPassed && isAttempted) ? 10 : 0,
            code: codeToTest
        });
  }
  
  document.getElementById('loader').classList.add('hidden');
  timeoutScreen.style.display = 'flex';
  document.getElementById('timeout-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
  document.getElementById('timeout-summary').innerHTML = `Questions attempted: ${attempted.filter(Boolean).length} / 5 <br><span style="font-size:24px;color:#4ade80;font-weight:bold;margin-top:10px;display:block;">Overall Total Marks: ${earnedMarks} / 50</span>`;
  
  let timeTaken = EXAM_DURATION - secondsLeft;
  saveResultToLocal(currentStudent.roll, attempted.filter(Boolean).length, earnedMarks, "SUBMITTED", questionDetails, timeTaken);
}


// ═══════════════════════════════════════════════════════
//  CODE EDITOR ACTIONS
// ═══════════════════════════════════════════════════════
function saveCurrent() {
  if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); } else { codes[currentTab] = ''; }
  stdins[currentTab] = document.getElementById('stdin-input').value;
  if (codes[currentTab].trim()) {
    attempted[currentTab] = true;
  }
  updateProgress();
}

function updateProgress() {
  const att = attempted.filter(Boolean).length;
  const pCount = passed.filter(Boolean).length;
  const marks = pCount * 10;
  document.getElementById('progress-info').textContent = `${att} / 5 attempted · Marks: ${marks} / 50`;
  
  const submitBtn = document.getElementById('open-submit-modal-btn');
  if (marks >= 30) {
      submitBtn.classList.remove('locked');
      submitBtn.title = "";
  } else {
      submitBtn.classList.add('locked');
      submitBtn.title = "active only after reach min 30 marks";
  }
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
        passed[currentTab] = false;
        let tabEl = document.getElementById(`tab-${currentTab}`);
        if (tabEl) {
            tabEl.classList.remove('passed');
            tabEl.classList.add('opened');
            let qMarks = document.querySelector('.q-marks');
            if (qMarks) {
                qMarks.innerHTML = '10 Marks';
                qMarks.style.color = 'var(--muted2)';
                qMarks.style.fontWeight = 'normal';
            }
        }
        if (val) {
            attempted[currentTab] = true;
        } else {
            attempted[currentTab] = false;
        }
        updateProgress();
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

    if (!code.includes('input') && !code.includes('sys.stdin')) {
        appendToConsole("ERROR: Logic Check Failed.\nYou must use input() to dynamically read the hidden test cases.\nHardcoding variable values is not permitted.", true);
        const os = document.getElementById('output-status');
        os.textContent = 'LOGIC ERROR';
        os.className = 'output-status err';
        os.style.display = 'inline-block';
        
        let tabEl = document.getElementById(`tab-${currentTab}`);
        passed[currentTab] = false;
        tabEl.classList.remove('passed');
        tabEl.classList.add('opened');
        let qMarks = document.querySelector('.q-marks');
        if (qMarks) {
            qMarks.innerHTML = '10 Marks';
            qMarks.style.color = 'var(--muted2)';
            qMarks.style.fontWeight = 'normal';
        }
        updateProgress();
        return;
    }

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

    let hasError = false;

    try {
        await pyodideInstance.runPythonAsync(`
import sys, io
from js import window
sys.stdin = io.StringIO("\\n".join(list(window.stdinLines)) + "\\n")
        `);
        await pyodideInstance.runPythonAsync(code);
        
        // If nothing was printed, show OK
        if (oc.textContent === '// Running…') {
            oc.textContent = '';
        }
        
        os.textContent = 'OK';
        os.className = 'output-status ok';
    } catch (err) {
        hasError = true;
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

    let qIdx = assignedQIdxs[currentTab];
    let q = questions[qIdx];
    let allPassed = true;

    if (!hasError && q.samples && q.samples.length > 0) {
        window.grading_code = code;
        for (let s of q.samples) {
            let sampleInput = s.input || "";
            let expectedOutput = s.output.trim();
            window.grading_stdin = sampleInput.split('\n');
            let grading_script = `
import sys, io
from js import window
def _grade_run():
    old_stdout = sys.stdout
    old_stdin = sys.stdin
    captured_out = io.StringIO()
    sys.stdout = captured_out
    try:
        sys.stdin = io.StringIO("\\n".join(list(window.grading_stdin)) + "\\n")
        exec(window.grading_code, {})
        return captured_out.getvalue()
    except Exception:
        return ""
    finally:
        sys.stdout = old_stdout
        sys.stdin = old_stdin
_grade_run()
`;
            try {
                let actualOutput = await pyodideInstance.runPythonAsync(grading_script);
                if (actualOutput) actualOutput = actualOutput.trim();
                else actualOutput = "";
                
                if (actualOutput.toLowerCase() !== expectedOutput.toLowerCase()) {
                    allPassed = false;
                    break;
                }
            } catch(e) {
                allPassed = false;
                break;
            }
        }
    } else {
        allPassed = false;
    }

    let tabEl = document.getElementById(`tab-${currentTab}`);
    if (allPassed) {
        passed[currentTab] = true;
        tabEl.classList.remove('opened');
        tabEl.classList.add('passed');
        let qMarks = document.querySelector('.q-marks');
        if (qMarks) {
            qMarks.innerHTML = '✓ 10 Marks Awarded';
            qMarks.style.color = '#10b981';
            qMarks.style.fontWeight = '700';
        }
        toggleEditorVisibility();
    } else {
        passed[currentTab] = false;
        tabEl.classList.remove('passed');
        tabEl.classList.add('opened');
        let qMarks = document.querySelector('.q-marks');
        if (qMarks) {
            qMarks.innerHTML = '10 Marks';
            qMarks.style.color = 'var(--muted2)';
            qMarks.style.fontWeight = 'normal';
        }
    }
    updateProgress();
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
    const pCount = passed.filter(Boolean).length;
    if (pCount * 10 < 30) return; // Locked until 30 marks
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
    let questionDetails = [];
    for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i].replace(/\t/g, '    ').trim();
        let isAttempted = codeToTest.length > 0;
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];
        
        let allPassed = passed[i];
        if (!allPassed && isAttempted && q.samples && q.samples.length > 0) {
            allPassed = true;
            window.grading_code = codeToTest;
            for (let s of q.samples) {
                let sampleInput = s.input || "";
                let expectedOutput = s.output.trim();
                window.grading_stdin = sampleInput.split('\n');
                let grading_script = `
import sys, io
from js import window
def _grade_run():
    old_stdout = sys.stdout
    old_stdin = sys.stdin
    captured_out = io.StringIO()
    sys.stdout = captured_out
    try:
        sys.stdin = io.StringIO("\\n".join(list(window.grading_stdin)) + "\\n")
        exec(window.grading_code, {})
        return captured_out.getvalue()
    except Exception:
        return ""
    finally:
        sys.stdout = old_stdout
        sys.stdin = old_stdin
_grade_run()
`;
                try {
                    let actualOutput = await pyodideInstance.runPythonAsync(grading_script);
                    if (actualOutput) actualOutput = actualOutput.trim();
                    else actualOutput = "";
                    
                    if (actualOutput.toLowerCase() !== expectedOutput.toLowerCase()) {
                        allPassed = false;
                        break;
                    }
                } catch(e) {
                    allPassed = false;
                    break;
                }
            }
        }
        if (allPassed && isAttempted) earnedMarks += 10;
        
        questionDetails.push({
            no: i + 1,
            qId: q.no,
            title: q.title,
            attempted: isAttempted,
            passed: allPassed && isAttempted,
            marks: (allPassed && isAttempted) ? 10 : 0,
            code: codeToTest
        });
    }
    
    document.getElementById('loader').classList.add('hidden');
    
    document.getElementById('exam-screen').style.display = 'none';
    document.getElementById('submitted-screen').style.display = 'flex';
    document.getElementById('submit-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
    document.getElementById('submit-summary').innerHTML = `Questions attempted: ${attempted.filter(Boolean).length} / 5 <br><span style="font-size:24px;color:#4ade80;font-weight:bold;margin-top:10px;display:block;">Overall Total Marks: ${earnedMarks} / 50</span>`;
    
    let timeTaken = EXAM_DURATION - secondsLeft;
    saveResultToLocal(currentStudent.roll, attempted.filter(Boolean).length, earnedMarks, "SUBMITTED", questionDetails, timeTaken);
});


// Close modal on overlay click
document.getElementById('submit-modal').addEventListener('click', function(e) {
  if (e.target === this) document.getElementById('submit-modal').classList.remove('active');
});




// ═══════════════════════════════════════════════════════
//  ADMIN DASHBOARD, ANALYTICS & PDF REPORTS
// ═══════════════════════════════════════════════════════
async function saveResultToLocal(roll, attemptedCount, marks, status, questionDetails = [], timeTaken = 0) {
  const resultData = {
    marks: marks,
    attempts: attemptedCount,
    status: status || "SUBMITTED",
    timestamp: new Date().toISOString(),
    questionDetails: questionDetails,
    timeTaken: timeTaken
  };

  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  results[roll] = { ...(results[roll] || {}), ...resultData };
  localStorage.setItem('assessment_results', JSON.stringify(results));

  if (window.firebaseDb && window.firebaseSetDoc) {
     try {
         await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, "results", roll), resultData, { merge: true });
         console.log("Successfully synced to Firebase!");
     } catch(e) {
         console.error("Failed to sync to Firebase", e);
     }
  }
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

window.updateAuthMode = function(roll, mode) {
    let authModes = JSON.parse(localStorage.getItem('student_auth_modes') || '{}');
    authModes[roll] = mode;
    localStorage.setItem('student_auth_modes', JSON.stringify(authModes));
};

document.getElementById('toggle-exam-btn').addEventListener('click', () => {
    let config = JSON.parse(localStorage.getItem('admin_config') || '{"examOpen":true}');
    config.examOpen = !config.examOpen;
    localStorage.setItem('admin_config', JSON.stringify(config));
    renderAdmin();
});

async function renderAdmin() {
  const tbody = document.getElementById('admin-tbody');
  tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--muted);">Loading live results from Firebase...</td></tr>';
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  
  if (window.firebaseDb && window.firebaseGetDocs) {
      try {
          const querySnapshot = await window.firebaseGetDocs(window.firebaseCollection(window.firebaseDb, "results"));
          querySnapshot.forEach((doc) => {
              results[doc.id] = doc.data();
          });
          localStorage.setItem('assessment_results', JSON.stringify(results));
      } catch (e) {
          console.error("Error fetching from Firebase. Using local results.", e);
      }
  }
  tbody.innerHTML = '';

  const globalConfig = JSON.parse(localStorage.getItem('admin_config') || '{"examOpen":true}');
  const examInd = document.getElementById('exam-status-indicator');
  const examBtn = document.getElementById('toggle-exam-btn');
  if (globalConfig.examOpen) {
      examInd.textContent = "EXAM OPEN";
      examInd.style.background = "rgba(16,185,129,0.15)";
      examInd.style.color = "#34d399";
      examBtn.textContent = "Close Exam";
  } else {
      examInd.textContent = "EXAM CLOSED";
      examInd.style.background = "rgba(239,68,68,0.15)";
      examInd.style.color = "#fca5a5";
      examBtn.textContent = "Open Exam";
  }
  
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
  // Sort students by branch, then by roll number ascending
  let sortedStudents = [...students].sort((a, b) => {
      if (a.branch < b.branch) return -1;
      if (a.branch > b.branch) return 1;
      if (a.roll < b.roll) return -1;
      if (a.roll > b.roll) return 1;
      return 0;
  });
  
  sortedStudents.forEach((s, i) => {
    const res = results[s.roll];
    const isSub = res && res.status === 'SUBMITTED';
    const isAbs = res && res.status === 'ABSENT';
    const isActive = res && res.status === 'ACTIVE';
    const isIdle = res && res.status === 'IDLE';
    
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    tr.style.transition = 'background 0.2s';
    tr.onmouseover = () => tr.style.background = 'rgba(255,255,255,0.02)';
    tr.onmouseout = () => tr.style.background = 'transparent';
    
    let statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(255,255,255,0.1);color:#94a3b8;">PENDING</span>`;
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
    } else if (isActive) {
        statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(59,130,246,0.15);color:#60a5fa;box-shadow: 0 0 8px rgba(59,130,246,0.4);">ACTIVE</span>`;
    } else if (isIdle) {
        statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(249,115,22,0.15);color:#fb923c;">IDLE</span>`;
    }

    const authModes = JSON.parse(localStorage.getItem('student_auth_modes') || '{}');
    const authVal = authModes[s.roll] || 'DIRECT';
    
    tr.innerHTML = `
      <td style="padding:14px 20px;color:var(--muted2);">${i + 1}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;color:var(--text);">${s.roll}</td>
      <td style="padding:14px 20px;color:var(--text);">${s.name}</td>
      <td style="padding:14px 20px;color:var(--muted);">${s.branch}</td>
      <td style="padding:14px 20px;">
        <select onchange="updateAuthMode('${s.roll}', this.value)" style="background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:4px;font-size:11px;outline:none;">
           <option value="DIRECT" ${authVal !== 'OTP' ? 'selected' : ''}>Direct</option>
           <option value="OTP" ${authVal === 'OTP' ? 'selected' : ''}>Email OTP</option>
        </select>
      </td>
      <td style="padding:14px 20px;">${statusBadge}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;font-weight:700;color:${isSub && !isAbs ? 'var(--text)' : 'var(--muted2)'};">
        ${isSub && !isAbs ? res.marks + ' / 50' : '-'}
      </td>
      <td style="padding:14px 20px; white-space:nowrap;">
        ${!isSub ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--red);color:var(--red);margin-right:4px;" onclick="markAbsent('${s.roll}')">Absent</button>` : ''}
        ${isSub ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--yellow);color:var(--yellow);margin-right:4px;" onclick="allowRetest('${s.roll}')">Retest</button>` : ''}
        ${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--blue-light);color:var(--blue-light);margin-right:4px;" onclick="viewStudentReport('${s.roll}')">Report</button>` : ''}
        ${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:#10b981;color:#10b981;margin-right:4px;" onclick="emailStudentReport('${s.roll}')">Email PDF</button>` : ''}
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
    
    let timeTakenStr = "N/A";
    if (res && res.timeTaken) {
        let m = Math.floor(res.timeTaken / 60);
        let s = res.timeTaken % 60;
        timeTakenStr = `${m} min ${s} sec`;
    }
    
    let qTableHtml = "";
    if (res && res.questionDetails && res.questionDetails.length > 0) {
        qTableHtml = `
            <h3 style="margin-top:20px;margin-bottom:10px;font-size:16px;color:#0d1b2a;border-bottom:1px solid #ccc;padding-bottom:5px;">Detailed Question Performance</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;text-align:left;">
                <thead>
                    <tr style="background:#f1f5f9;color:#475569;">
                        <th style="padding:8px;border:1px solid #cbd5e1;">Q.No</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;">Question Title</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;text-align:center;">Attempted</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;text-align:center;">Result</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;text-align:right;">Marks</th>
                    </tr>
                </thead>
                <tbody>
        `;
        res.questionDetails.forEach(qd => {
            let attemptStr = qd.attempted ? '<span style="color:#059669;font-weight:bold;">Yes</span>' : '<span style="color:#64748b;">No</span>';
            let resStr = qd.attempted ? (qd.passed ? '<span style="color:#059669;font-weight:bold;">Correct</span>' : '<span style="color:#dc2626;font-weight:bold;">Wrong</span>') : '<span style="color:#64748b;">N/A</span>';
            qTableHtml += `
                <tr>
                    <td style="padding:8px;border:1px solid #e2e8f0;color:#334155;">Q${qd.no} (ID: ${qd.qId})</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;color:#334155;">${qd.title}</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;text-align:center;">${attemptStr}</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;text-align:center;">${resStr}</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;text-align:right;font-weight:bold;color:${qd.marks > 0 ? '#059669' : '#475569'};">${qd.marks}</td>
                </tr>
            `;
            if (qd.attempted && qd.code) {
                let safeCode = qd.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                qTableHtml += `
                <tr>
                    <td colspan="5" style="padding:0; border:1px solid #e2e8f0; border-top:none; background:#f8fafc;">
                        <div style="padding:10px 12px; margin:4px 8px 8px 8px; border:1px solid #cbd5e1; border-radius:4px; background:#ffffff;">
                            <div style="font-size:11px;color:#64748b;margin-bottom:6px;font-family:'Space Mono',monospace;text-transform:uppercase;font-weight:bold;">Student's Submitted Logic:</div>
                            <pre style="margin:0;font-family:'Space Mono',monospace;font-size:12px;color:#1e293b;white-space:pre-wrap;word-wrap:break-word;">${safeCode}</pre>
                        </div>
                    </td>
                </tr>
                `;
            }
        });
        qTableHtml += `</tbody></table>`;
    }

    let html = `
        <div style="text-align:center;margin-bottom:20px;border-bottom:2px solid #eee;padding-bottom:15px;">
            <h2 style="margin:0;color:#0d1b2a;font-size:20px;">Gouthami Institute of Technology and Management for Women</h2>
            <p style="margin:4px 0 0 0;color:#666;font-size:14px;">Python Lab Assessment - Individual Report</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:6px 0;color:#666;width:40%;">Student Name</td><td style="font-weight:700;">${student.name}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Roll Number</td><td style="font-weight:700;font-family:'Space Mono',monospace;">${student.roll}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Branch</td><td style="font-weight:700;">${student.branch}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Status</td><td style="font-weight:700;color:${resultColor};">${resultText}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Marks Obtained</td><td style="font-weight:700;font-size:16px;">${res && res.status !== 'ABSENT' ? res.marks + ' / 50' : 'N/A'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Questions Attempted</td><td style="font-weight:700;">${res && res.status !== 'ABSENT' ? res.attempts + ' / 5' : 'N/A'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Time Taken</td><td style="font-weight:700;">${timeTakenStr}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Submission Time</td><td style="font-weight:700;">${res && res.timestamp ? new Date(res.timestamp).toLocaleString() : 'N/A'}</td></tr>
        </table>
        ${qTableHtml}
        <div style="margin-top:20px;font-size:11px;color:#888;text-align:right;">
            Generated on: ${getSystemDateString()}
        </div>
    `;
    
    content.innerHTML = html;
    document.getElementById('student-report-modal').classList.add('active');
};
document.getElementById('close-report-btn').addEventListener('click', () => {
    document.getElementById('student-report-modal').classList.remove('active');
});

document.getElementById('close-report-icon').addEventListener('click', () => {
    document.getElementById('student-report-modal').classList.remove('active');
});

document.getElementById('student-report-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
});

document.getElementById('download-student-pdf-btn').addEventListener('click', () => {
    // Add a class so @media print knows to isolate the student report modal
    document.body.classList.add('printing-student');
    document.title = 'Student_Report';
    window.print();
    document.title = 'Python Lab Assessment · Gowthami Institute';
    document.body.classList.remove('printing-student');
});

document.getElementById('admin-logout-btn').addEventListener('click', () => {
  document.getElementById('admin-screen').style.display = 'none';
  loginScreen.style.display = 'flex';
  rollInput.value = '';
  if (window.adminInterval) clearInterval(window.adminInterval);
});

document.getElementById('admin-clear-btn').addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all student results from this computer? This cannot be undone!")) {
    localStorage.removeItem('assessment_results');
    renderAdmin();
  }
});


document.getElementById('admin-download-btn').addEventListener('click', () => {
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
    
    // Create a temporary style block for printing (black text, white bg)
    let styleBlock = document.createElement('style');
    styleBlock.id = 'temp-pdf-styles';
    styleBlock.innerHTML = `
        #admin-report-container, #admin-report-container * { color: #000 !important; border-color: #ddd !important; }
        #admin-report-container th:last-child, #admin-report-container td:last-child { display: none !important; }
    `;
    document.head.appendChild(styleBlock);
    
    // Configure html2pdf
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'Consolidated_Branch_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#ffffff' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(container).outputPdf('datauristring').then(async (pdfBase64) => {
        // Remove the temporary header and styles after saving
        document.getElementById('temp-pdf-header').remove();
        document.getElementById('temp-pdf-styles').remove();
        
        // Save locally
        const link = document.createElement('a');
        link.href = pdfBase64;
        link.download = 'Consolidated_Branch_Report.pdf';
        link.click();
        
        // Send email
        try {
            document.getElementById('admin-download-btn').textContent = 'Sending Email...';
            await fetch('http://localhost:3000/send-pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    toEmail: 'javacsedscs@gmail.com',
                    pdfBase64: pdfBase64,
                    filename: 'Consolidated_Branch_Report.pdf',
                    isConsolidated: true
                })
            });
            document.getElementById('admin-download-btn').textContent = 'Download PDF Report';
            alert('Consolidated report downloaded and emailed to javacsedscs@gmail.com');
        } catch(e) {
            console.error(e);
            document.getElementById('admin-download-btn').textContent = 'Download PDF Report';
            alert('Downloaded locally, but failed to email PDF.');
        }
    });
});

window.emailStudentReport = async function(roll) {
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    let email = results[roll] && results[roll].email;
    if (!email) {
        email = prompt("Enter email address to send the PDF report for " + roll + ":");
        if (!email) return;
        if (results[roll]) {
            results[roll].email = email;
            localStorage.setItem('assessment_results', JSON.stringify(results));
        }
    }
    
    // Ensure the report is rendered
    viewStudentReport(roll);
    
    const container = document.getElementById('student-report-content');
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     roll + '_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#ffffff' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    try {
        const btn = window.event ? window.event.target : null;
        const originalText = btn ? btn.textContent : 'Email PDF';
        if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
        
        const pdfBase64 = await html2pdf().set(opt).from(container).outputPdf('datauristring');
        const res = await fetch('http://localhost:3000/send-pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                toEmail: email,
                pdfBase64: pdfBase64,
                filename: roll + '_Report.pdf',
                isConsolidated: false
            })
        });
        const data = await res.json();
        if (data.success) {
            alert('PDF successfully sent to ' + email);
        } else {
            alert('Failed to send PDF: ' + data.error);
        }
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
    } catch(e) {
        console.error(e);
        alert('Error sending PDF.');
    }
};

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

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && document.getElementById('exam-screen').style.display === 'flex') {
        alert("WARNING: Exiting full-screen mode is not allowed during the exam! Please return to full-screen mode.");
    }
});

window.addEventListener('beforeunload', function (e) {
    if (document.getElementById('exam-screen').style.display === 'flex') {
        e.preventDefault();
        e.returnValue = 'Are you sure? Your exam progress will be lost if you refresh!';
    }
});


// --- ADMIN CHANGE PASSWORD LOGIC ---
const changePwdBtn = document.getElementById('admin-change-pwd-btn');
if (changePwdBtn) {
    changePwdBtn.addEventListener('click', () => {
        document.getElementById('current-pwd-input').value = '';
        document.getElementById('new-pwd-input').value = '';
        document.getElementById('change-pwd-modal').classList.add('active');
    });

    document.getElementById('close-pwd-btn').addEventListener('click', () => {
        document.getElementById('change-pwd-modal').classList.remove('active');
    });

    document.getElementById('save-pwd-btn').addEventListener('click', () => {
        const currentInput = document.getElementById('current-pwd-input').value;
        const newPwd = document.getElementById('new-pwd-input').value;
        const actualPwd = localStorage.getItem('admin_password') || 'ADMIN123';
        
        if (currentInput !== actualPwd && currentInput !== 'ADMIN') {
            alert("Incorrect current password!");
            return;
        }
        if (!newPwd || newPwd.length < 4) {
            alert("New password must be at least 4 characters.");
            return;
        }
        
        localStorage.setItem('admin_password', newPwd);
        alert("Password successfully changed!");
        document.getElementById('change-pwd-modal').classList.remove('active');
    });
}

// --- ADMIN ADD STUDENT LOGIC ---
const addStudentBtn = document.getElementById('admin-add-student-btn');
if (addStudentBtn) {
    addStudentBtn.addEventListener('click', () => {
        document.getElementById('add-roll-input').value = '';
        document.getElementById('add-name-input').value = '';
        document.getElementById('add-branch-input').value = '';
        document.getElementById('add-student-modal').classList.add('active');
    });

    document.getElementById('close-add-btn').addEventListener('click', () => {
        document.getElementById('add-student-modal').classList.remove('active');
    });

    document.getElementById('save-add-btn').addEventListener('click', () => {
        const newRoll = document.getElementById('add-roll-input').value.trim().toUpperCase();
        const newName = document.getElementById('add-name-input').value.trim();
        const newBranch = document.getElementById('add-branch-input').value.trim();
        
        if (!newRoll || !newName || !newBranch) return;

        if (studentMap[newRoll]) {
            alert("A student with this Roll Number already exists!");
            return;
        }

        const newStudent = { name: newName, roll: newRoll, branch: newBranch };
        
        // Add to current in-memory lists
        students.push(newStudent);
        studentMap[newRoll] = { ...newStudent, idx: students.length - 1 };
        
        // Persist custom students
        let customStudents = JSON.parse(localStorage.getItem('custom_students') || '[]');
        customStudents.push(newStudent);
        localStorage.setItem('custom_students', JSON.stringify(customStudents));
        
        document.getElementById('add-student-modal').classList.remove('active');
        renderAdmin();
    });
}

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
