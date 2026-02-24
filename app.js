import {
  addTaskCallback,
  listTasksCallback,
  addTaskPromise,
  listTasksPromise
} from "./taskManager.js";

const output = document.getElementById("output");

// -----------------------------
// Callback Version
// -----------------------------
window.runCallbackVersion = () => {
  addTaskCallback("Learn JS", (err, message) => {
    if (err) return console.log(err);

    listTasksCallback((err, tasks) => {
      output.innerHTML = `
        <h3>Callback Version</h3>
        <p>${message}</p>
        <p>Tasks: ${tasks.join(", ")}</p>
      `;
    });
  });
};

// -----------------------------
// Promise Version
// -----------------------------
window.runPromiseVersion = () => {
  addTaskPromise("Learn Promises")
    .then(message => {
      return listTasksPromise().then(tasks => ({ message, tasks }));
    })
    .then(({ message, tasks }) => {
      output.innerHTML = `
        <h3>Promise Version</h3>
        <p>${message}</p>
        <p>Tasks: ${tasks.join(", ")}</p>
      `;
    });
};

// -----------------------------
// Async/Await Version
// -----------------------------
window.runAsyncVersion = async () => {
  const message = await addTaskPromise("Learn Async/Await");
  const tasks = await listTasksPromise();

  output.innerHTML = `
    <h3>Async/Await Version</h3>
    <p>${message}</p>
    <p>Tasks: ${tasks.join(", ")}</p>
  `;
};