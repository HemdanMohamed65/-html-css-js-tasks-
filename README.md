# Student Validation & Table App

A simple web-based JavaScript project that allows you to manage student data with real-time validation and dynamic table display.

This project consists of **three mini tasks**, combined into one user-friendly app.
---
 Task 1: Add Student to Table
- Users can input:
  - Student **Name**
  - Unique **ID**
  - **Age**
- Upon clicking “Add Student”, a new row appears in the student table with the entered data.
---
Task 2: Input Validation

Before adding a student, the form validates the following:
- All fields must be **filled**
- Name must be at least **3 characters**
- ID and Age must be **numbers**
- The **ID must be unique**
---
 Task 3: Error Messages under Inputs
- Error messages are shown **below the input fields** using `<span>` elements.
- No `alert()` popups used — cleaner user experience.
---
 Traffic Light Simulator - Task 4

Task 4: Pause on Hover (Active Light Only)

This task builds an interactive traffic light system using HTML, CSS, and JavaScript. The system automatically cycles through red, yellow, and green lights at one-second intervals.

🔁 Feature
- The light changes every 1 second in sequence: red → yellow → green → red...
- When the user hovers over the **currently active light**, the cycling **pauses**.
- When the mouse leaves the active light, the cycling **resumes**.
- Hovering over an inactive light does **not** affect the cycle.

🛠️ Technologies Used
- HTML
- CSS (for layout and light styling)
- JavaScript (for dynamic control and user interaction)
  ---
  
💼 Task 5: Store and Display User Info using Cookies
📄 Description:
In this task, the user is asked to fill out a simple form that includes:

Name

Age

Gender (male/female via radio buttons)

Once the user clicks Submit, the form data is stored in cookies, and the page redirects to a result page (result.html) where the data is retrieved and displayed.

🛠️ Technologies Used:
HTML

CSS (optional for styling)

JavaScript (DOM + Cookies API)

📁 Files Included:
index.html – Form for user input

script.js – JavaScript to handle form logic and cookie storage

result.html – Displays user info from cookies

⚙️ Features:
Prevents submission if any field is empty

Stores data securely in browser cookies

Redirects to another page and displays the data dynamically

Easily expandable to include images or more fields



