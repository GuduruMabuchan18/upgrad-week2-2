let tasks = [];

// -----------------------------
// Callback Version
// -----------------------------
export const addTaskCallback = (task, callback) => {
  setTimeout(() => {
    tasks.push(task);
    callback(null, `Task "${task}" added.`);
  }, 1000);
};

export const listTasksCallback = (callback) => {
  setTimeout(() => {
    callback(null, tasks);
  }, 1000);
};

// -----------------------------
// Promise Version
// -----------------------------
export const addTaskPromise = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(task);
      resolve(`Task "${task}" added.`);
    }, 1000);
  });
};

export const listTasksPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
};