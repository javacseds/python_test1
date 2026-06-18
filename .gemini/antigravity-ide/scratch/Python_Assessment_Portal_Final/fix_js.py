import re

js_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js"
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read()

# The python script literally wrote a newline character inside the string.
# For example: split('\n') instead of split('\\n')
# We need to replace these specifically.

js = js.replace("split('\n')", "split('\\n')")
js = js.replace("stdoutBuffer += t + '\n'", "stdoutBuffer += t + '\\n'")
js = js.replace("return window.stdinLines.shift() + '\n'", "return window.stdinLines.shift() + '\\n'")
js = js.replace("return '\n'", "return '\\n'")
js = js.replace("csv += `${i + 1},${s.roll},\"${s.name}\",${s.branch},${status},${marks}\n`;", "csv += `${i + 1},${s.roll},\"${s.name}\",${s.branch},${status},${marks}\\n`;")
js = js.replace("let csv = \"S.No,Roll Number,Student Name,Branch,Status,Marks\n\";", "let csv = \"S.No,Roll Number,Student Name,Branch,Status,Marks\\n\";")

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js)

print("Fixed newlines in app.js!")
