# Goal Description
We will implement the final tier of Admin control by allowing you to edit the roster directly from the dashboard, as well as add a strict keyboard blocker for accidental refreshes during the exam.

## Proposed Changes

### 1. Admin Roster Editing
- We will add an **Edit Student** button next to every student in the `ADMIN` Dashboard.
- Clicking this will open an "Edit Student" popup where you can permanently change their Name, Roll Number, and Branch directly on that computer.
- These edits will be securely saved into `localStorage`, so even if you close the browser and come back tomorrow, the corrected names/roll numbers will still be there!

### 2. Custom Refresh Blocker
- The browser handles the standard "Refresh" button in its own way (which we have already blocked with a generic warning). 
- To add extra security, we will intercept **Keyboard Refresh commands** (like pressing `F5` or `Ctrl + R`). 
- If a student presses these keys, the portal will immediately show a custom warning: *"WARNING: Refreshing will close your exam and all unsaved progress will be lost. Are you sure you want to refresh?"*
- If they click "Cancel", the refresh is blocked and they return to the exam. If they click "OK", the page refreshes and the exam is closed.

### 3. Automatic Relaunch
- As requested, the moment I finish programming these updates, I will automatically pop the portal open on your screen so you can immediately test it!

## User Review Required
> [!NOTE]
> Student Edits are saved locally. Because this is an offline portal, if you edit a student's name on Computer #1, that edit is only saved on Computer #1. You would need to edit it on Computer #2 if they took the exam there.
> 
> **Are you ready for me to build this final update?** If you approve, I will begin execution immediately!
