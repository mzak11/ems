const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve authentication issue for users",
        date: "2025-02-10",
        category: "Development",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        title: "Write API docs",
        description: "Document all API endpoints for the mobile team",
        date: "2025-02-12",
        category: "Documentation",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Client demo setup",
        description: "Prepare and test the client demo environment",
        date: "2025-02-15",
        category: "Sales",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        title: "Market research",
        description: "Analyze competitors and draft a comparison report",
        date: "2025-02-14",
        category: "Research",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Discuss project updates with the development team",
        date: "2025-02-13",
        category: "Meetings",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design landing page",
        description: "Create a new UI for the product landing page",
        date: "2025-02-18",
        category: "Design",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review pull requests from junior developers",
        date: "2025-02-17",
        category: "Development",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write blog post",
        description: "Draft a technical blog about React performance",
        date: "2025-02-16",
        category: "Content Writing",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Update database schema",
        description: "Optimize database schema for better performance",
        date: "2025-02-20",
        category: "Database",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix UI bugs",
        description: "Resolve CSS and layout issues reported by QA",
        date: "2025-02-21",
        category: "Frontend",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Security audit",
        description: "Conduct a security audit for vulnerabilities",
        date: "2025-02-22",
        category: "Security",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy new feature",
        description: "Deploy the latest feature update to production",
        date: "2025-02-25",
        category: "DevOps",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        title: "User feedback analysis",
        description: "Analyze feedback from customers and report insights",
        date: "2025-02-26",
        category: "Customer Support",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize performance",
        description: "Improve website performance by reducing load times",
        date: "2025-02-27",
        category: "Optimization",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees',))
    const admin = JSON.parse(localStorage.getItem('admin',))

    console.log(employees,admin)
};
