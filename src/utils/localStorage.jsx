 
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "a@a.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Complete the monthly report.",
        taskDate: "2024-12-25",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Prepare for the client meeting.",
        taskDate: "2024-12-26",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 3",
        taskDescription: "Update project documentation.",
        taskDate: "2024-12-27",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Organize team building activities.",
        taskDate: "2024-12-28",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Fix UI bugs in the dashboard.",
        taskDate: "2024-12-29",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Perform security audits.",
        taskDate: "2024-12-30",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Optimize database queries.",
        taskDate: "2024-12-31",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 3",
        taskDescription: "Prepare the quarterly roadmap.",
        taskDate: "2025-01-01",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Task 4",
        taskDescription: "Test new application features.",
        taskDate: "2025-01-02",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Set up new employee onboarding.",
        taskDate: "2025-01-03",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Update marketing collateral.",
        taskDate: "2025-01-04",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Advika",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Analyze competitor strategies.",
        taskDate: "2025-01-05",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Develop a new API endpoint.",
        taskDate: "2025-01-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Task 3",
        taskDescription: "Improve search engine optimization.",
        taskDate: "2025-01-07",
        category: "SEO",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
}