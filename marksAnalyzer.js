// marksAnalyzer.js

// Store student marks in an array
const marks = [75, 60, 80, 45, 90];

// Calculate total using reduce()
const calculateTotal = arr =>
  arr.reduce((sum, mark) => sum + mark, 0);

// Calculate average
const calculateAverage = arr =>
  calculateTotal(arr) / arr.length;

// Determine pass or fail (average >= 50 is Pass)
const getResult = avg => (avg >= 50 ? "Pass" : "Fail");

// Process Data
const total = calculateTotal(marks);
const average = calculateAverage(marks);
const result = getResult(average);

// Display output using template literals
console.log(`
Student Marks: ${marks.map(mark => mark).join(", ")}
Total Marks: ${total}
Average Marks: ${average.toFixed(2)}
Result: ${result}
`);