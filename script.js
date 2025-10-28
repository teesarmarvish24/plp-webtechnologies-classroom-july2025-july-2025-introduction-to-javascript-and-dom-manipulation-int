// =================================================================
//  ASSIGNMENT: MASTERING JAVASCRIPT FUNDAMENTALS
// =================================================================

/**
 *  PART 1: MASTERING JAVASCRIPT BASICS
 * This section demonstrates variables, data types, and conditional logic.
 */
console.log("Part 1: JavaScript Basics");

// Variable declarations: using const for a value that won't change, and let for a value that might.
const studentName = "Alex";
let studentScore = 88;

// Conditional (if/else if/else) statement to process logic.
let grade;
if (studentScore >= 90) {
    grade = 'A';
} else if (studentScore >= 80) {
    grade = 'B';
} else if (studentScore >= 70) {
    grade = 'C';
} else {
    grade = 'D';
}

// Output results to the browser console.
console.log(`${studentName} scored ${studentScore}, which is a grade of ${grade}.`);


// =================================================================
/**
 * ❤️ PART 2: JAVASCRIPT FUNCTIONS — THE HEART OF REUSABILITY
 * This section includes custom functions to make code reusable and clean.
 */
console.log("\nPart 2: JavaScript Functions");

/**
 * Function 1: Calculates a letter grade based on a numerical score.
 * @param {number} score - The numerical score (0-100).
 * @returns {string} The corresponding letter grade.
 */
function calculateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'D';
}

/**
 * Function 2: Formats a personalized greeting message.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A formatted welcome message.
 */
function formatGreeting(name) {
    return `Welcome, ${name}!`;
}

// Using the functions
let calculatedGrade = calculateGrade(studentScore);
let greetingMessage = formatGreeting(studentName);

console.log(`Function Result: The calculated grade is ${calculatedGrade}.`);
console.log(`Function Result: ${greetingMessage}`);


// =================================================================
/**
 * 🔁 PART 3: JAVASCRIPT LOOPS — EMBRACE THE POWER OF REPETITION
 * This section uses loops to perform repetitive tasks.
 */
console.log("\nPart 3: JavaScript Loops");

const topics = ["HTML", "CSS", "JavaScript Basics", "Functions", "Loops", "DOM Manipulation"];

// Loop Example 1: `forEach` loop to log each topic to the console.
console.log("Logging topics with forEach loop:");
topics.forEach(function(topic, index) {
    console.log(`Topic ${index + 1}: ${topic}`);
});

// Loop Example 2: `for` loop will be used in Part 4 to generate dynamic content on the page.


// =================================================================
/**
 * 🌐 PART 4: MASTERING THE DOM WITH JAVASCRIPT
 * This section brings the page to life by interacting with the HTML elements.
 */
console.log("\nPart 4: DOM Manipulation");

// Ensure the DOM is fully loaded before running our script
document.addEventListener('DOMContentLoaded', function() {

    // DOM Interaction 1: Select an element and change its text content.
    const mainHeading = document.getElementById('main-heading');
    if (mainHeading) {
        mainHeading.textContent = greetingMessage; // Using a variable from Part 2
    }

    // Update the grade result on the page
    const gradeResultElement = document.getElementById('grade-result');
    if (gradeResultElement) {
        gradeResultElement.textContent = `Based on your score of ${studentScore}, your grade is ${calculatedGrade}.`;
    }

    // DOM Interaction 2: Create and append elements using a loop (for loop from Part 3).
    const topicList = document.getElementById('topic-list');
    if (topicList) {
        // Clear existing list items before adding new ones
        topicList.innerHTML = ''; 
        
        for (let i = 0; i < topics.length; i++) {
            const listItem = document.createElement('li'); // Create a new <li> element
            listItem.textContent = topics[i]; // Set its text
            topicList.appendChild(listItem); // Add it to the <ul>
        }
    }

    // DOM Interaction 3: Add an event listener to a button to toggle a class.
    const themeToggleButton = document.getElementById('toggle-theme-btn');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            // Toggle the 'dark-mode' class on the body element
            document.body.classList.toggle('dark-mode');
            console.log("Theme toggled!");
        });
    }

});