const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "development",
    instructor: "John Smith",
    price: "$49.99",
    rating: "★★★★★",
    ratingValue: "4.8",
    image: "web.jpg",
    description: "Master HTML, CSS, JavaScript, React, Node.js and more!",
    duration: "40 hours",
    level: "Beginner",
    lectures: "200+ Lectures",
    resources: "50+ Resources",
    learningPoints: [
      "HTML5 & CSS3 fundamentals",
      "Modern JavaScript (ES6+)",
      "React.js for building UIs",
      "Node.js & Express backend",
      "MongoDB database",
      "RESTful API development",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: [
          "Welcome to the course (5:30)",
          "Setting up your environment (10:15)",
          "Course resources",
        ],
      },
      {
        title: "HTML & CSS Basics",
        lessons: [
          "HTML elements (15:20)",
          "CSS styling (20:45)",
          "Flexbox & Grid (25:10)",
        ],
      },
      {
        title: "JavaScript Fundamentals",
        lessons: [
          "Variables and data types (18:30)",
          "Functions and scope (22:15)",
          "DOM manipulation (30:40)",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "data-science",
    instructor: "Sarah Johnson",
    price: "$59.99",
    rating: "★★★★★",
    ratingValue: "4.9",
    image: "ds.jpeg",
    description:
      "Learn Python, data analysis, and machine learning algorithms.",
    duration: "50 hours",
    level: "Intermediate",
    lectures: "180+ Lectures",
    resources: "60+ Resources",
    learningPoints: [
      "Python programming fundamentals",
      "Data analysis with Pandas & NumPy",
      "Data visualization with Matplotlib & Seaborn",
      "Machine learning algorithms",
      "Model evaluation and optimization",
      "Real-world data science projects",
    ],
    curriculum: [
      {
        title: "Introduction to Data Science",
        lessons: [
          "What is Data Science? (8:20)",
          "Python for Data Science (12:45)",
          "Setting up Jupyter Notebook (7:30)",
        ],
      },
      {
        title: "Data Analysis Fundamentals",
        lessons: [
          "Pandas for data manipulation (25:15)",
          "NumPy for numerical computing (18:40)",
          "Data cleaning techniques (22:10)",
        ],
      },
      {
        title: "Machine Learning Basics",
        lessons: [
          "Supervised vs Unsupervised Learning (15:30)",
          "Linear Regression (28:45)",
          "Classification Algorithms (32:20)",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    category: "marketing",
    instructor: "Mike Brown",
    price: "$39.99",
    rating: "★★★★☆",
    ratingValue: "4.7",
    image: "dm.jpg",
    description: "Master SEO, social media, email marketing, and more.",
    duration: "35 hours",
    level: "Beginner",
    lectures: "150+ Lectures",
    resources: "40+ Resources",
    learningPoints: [
      "SEO optimization techniques",
      "Social media marketing strategies",
      "Email marketing campaigns",
      "Content marketing planning",
      "Google Analytics mastery",
      "Conversion rate optimization",
    ],
    curriculum: [
      {
        title: "Digital Marketing Fundamentals",
        lessons: [
          "Introduction to Digital Marketing (10:15)",
          "Marketing Funnel Basics (12:30)",
          "Setting Marketing Goals (8:45)",
        ],
      },
      {
        title: "SEO & Content Marketing",
        lessons: [
          "Keyword Research (22:20)",
          "On-Page SEO (18:45)",
          "Content Strategy (25:10)",
        ],
      },
      {
        title: "Social Media Marketing",
        lessons: [
          "Facebook Marketing (20:30)",
          "Instagram Strategies (16:45)",
          "LinkedIn B2B Marketing (19:20)",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "UI/UX Design Complete Course",
    category: "design",
    instructor: "Emily White",
    price: "$44.99",
    rating: "★★★★★",
    ratingValue: "4.8",
    image: "ui.jpg",
    description: "Learn to create beautiful and user-friendly interfaces.",
    duration: "45 hours",
    level: "Beginner",
    lectures: "170+ Lectures",
    resources: "45+ Resources",
    learningPoints: [
      "User research and persona creation",
      "Wireframing and prototyping",
      "Visual design principles",
      "Typography and color theory",
      "Design tools (Figma, Adobe XD)",
      "Usability testing methods",
    ],
    curriculum: [
      {
        title: "Introduction to UI/UX Design",
        lessons: [
          "What is UI/UX Design? (9:25)",
          "Design Thinking Process (14:30)",
          "Industry Tools Overview (11:45)",
        ],
      },
      {
        title: "User Research & Analysis",
        lessons: [
          "Creating User Personas (18:20)",
          "User Journey Mapping (22:15)",
          "Competitive Analysis (16:40)",
        ],
      },
      {
        title: "Visual Design Principles",
        lessons: [
          "Color Theory & Psychology (25:30)",
          "Typography Fundamentals (19:45)",
          "Layout & Composition (21:20)",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Python Programming Masterclass",
    category: "development",
    instructor: "David Lee",
    price: "$54.99",
    rating: "★★★★★",
    ratingValue: "4.9",
    image: "py.avif",
    description: "From basics to advanced Python programming concepts.",
    duration: "55 hours",
    level: "Beginner to Advanced",
    lectures: "220+ Lectures",
    resources: "70+ Resources",
    learningPoints: [
      "Python syntax and fundamentals",
      "Object-oriented programming",
      "Data structures and algorithms",
      "File handling and databases",
      "Web scraping and automation",
      "Building real-world applications",
    ],
    curriculum: [
      {
        title: "Python Basics",
        lessons: [
          "Installing Python (6:15)",
          "Variables and Data Types (12:40)",
          "Control Structures (18:25)",
        ],
      },
      {
        title: "Intermediate Python",
        lessons: [
          "Functions and Modules (22:30)",
          "File Handling (16:45)",
          "Error Handling (14:20)",
        ],
      },
      {
        title: "Advanced Concepts",
        lessons: [
          "Object-Oriented Programming (28:15)",
          "Working with APIs (24:40)",
          "Database Connectivity (26:30)",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Social Media Marketing",
    category: "marketing",
    instructor: "Lisa Anderson",
    price: "$34.99",
    rating: "★★★★☆",
    ratingValue: "4.6",
    image: "social.jpg",
    description: "Grow your brand on Facebook, Instagram, Twitter, and more.",
    duration: "30 hours",
    level: "Beginner",
    lectures: "130+ Lectures",
    resources: "35+ Resources",
    learningPoints: [
      "Social media strategy development",
      "Content creation and scheduling",
      "Audience engagement techniques",
      "Paid advertising on social platforms",
      "Analytics and performance tracking",
      "Influencer marketing strategies",
    ],
    curriculum: [
      {
        title: "Social Media Fundamentals",
        lessons: [
          "Platform Overview (8:45)",
          "Creating a Social Media Strategy (14:20)",
          "Content Planning (11:30)",
        ],
      },
      {
        title: "Platform-Specific Strategies",
        lessons: [
          "Facebook Marketing (24:15)",
          "Instagram Growth (19:40)",
          "Twitter Engagement (16:25)",
        ],
      },
      {
        title: "Advanced Techniques",
        lessons: [
          "Paid Social Advertising (28:30)",
          "Social Media Analytics (22:45)",
          "Community Management (18:20)",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Mobile App Development with React Native",
    category: "development",
    instructor: "Tom Harris",
    price: "$64.99",
    rating: "★★★★★",
    ratingValue: "4.8",
    image: "mobile.jpg",
    description: "Build iOS and Android apps with React Native.",
    duration: "60 hours",
    level: "Intermediate",
    lectures: "190+ Lectures",
    resources: "65+ Resources",
    learningPoints: [
      "React Native fundamentals",
      "Cross-platform app development",
      "State management with Redux",
      "Native device features access",
      "App deployment to stores",
      "Performance optimization",
    ],
    curriculum: [
      {
        title: "React Native Basics",
        lessons: [
          "Introduction to React Native (9:30)",
          "Setting up Development Environment (15:45)",
          "First Mobile App (12:20)",
        ],
      },
      {
        title: "Core Components",
        lessons: [
          "UI Components (24:30)",
          "Navigation (20:15)",
          "State Management (26:40)",
        ],
      },
      {
        title: "Advanced Features",
        lessons: [
          "Native Modules (32:25)",
          "App Deployment (28:50)",
          "Performance Optimization (24:15)",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Graphic Design Fundamentals",
    category: "design",
    instructor: "Amy Roberts",
    price: "$42.99",
    rating: "★★★★☆",
    ratingValue: "4.7",
    image: "graphic.jpg",
    description: "Master Adobe Photoshop, Illustrator, and design principles.",
    duration: "38 hours",
    level: "Beginner",
    lectures: "160+ Lectures",
    resources: "42+ Resources",
    learningPoints: [
      "Adobe Photoshop essentials",
      "Vector graphics with Illustrator",
      "Design theory and principles",
      "Brand identity creation",
      "Print and digital design",
      "Portfolio development",
    ],
    curriculum: [
      {
        title: "Design Fundamentals",
        lessons: [
          "Introduction to Graphic Design (10:25)",
          "Color & Composition (14:40)",
          "Typography Basics (12:15)",
        ],
      },
      {
        title: "Adobe Tools",
        lessons: [
          "Photoshop Essentials (28:30)",
          "Illustrator Basics (24:45)",
          "Working with Layers (19:20)",
        ],
      },
      {
        title: "Practical Projects",
        lessons: [
          "Logo Design (32:15)",
          "Poster Creation (26:40)",
          "Brand Identity Kit (29:25)",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Deep Learning & Neural Networks",
    category: "data-science",
    instructor: "Dr. James Wilson",
    price: "$69.99",
    rating: "★★★★★",
    ratingValue: "4.9",
    image: "deep.webp",
    description: "Advanced machine learning with TensorFlow and PyTorch.",
    duration: "70 hours",
    level: "Advanced",
    lectures: "210+ Lectures",
    resources: "80+ Resources",
    learningPoints: [
      "Neural network architectures",
      "Deep learning frameworks (TensorFlow, PyTorch)",
      "Computer vision with CNNs",
      "Natural language processing",
      "Reinforcement learning",
      "Model deployment and serving",
    ],
    curriculum: [
      {
        title: "Neural Network Basics",
        lessons: [
          "Introduction to Neural Networks (12:30)",
          "Perceptrons and Activation Functions (18:45)",
          "Backpropagation (22:20)",
        ],
      },
      {
        title: "Deep Learning Frameworks",
        lessons: [
          "TensorFlow Fundamentals (28:15)",
          "PyTorch Basics (24:40)",
          "Model Building (32:30)",
        ],
      },
      {
        title: "Advanced Applications",
        lessons: [
          "Computer Vision with CNNs (35:25)",
          "Natural Language Processing (30:40)",
          "Reinforcement Learning (38:15)",
        ],
      },
    ],
  },
];


/*PAGE NAVIGATION*/
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
  window.scrollTo(0, 0);

  if (pageId === "courses") {
    displayCourses(courses);
  }
}

/*DISPLAY COURSES*/
function displayCourses(courseList) {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";

  courseList.forEach(course => {
    grid.innerHTML += `
      <div class="col-md-4 course-item"
           data-title="${course.title.toLowerCase()}"
           data-category="${course.category}">
        <div class="card course-card">
          <img src="assets/${course.image}" class="card-img-top course-img">
          <div class="card-body">
            <h5>${course.title}</h5>
            <p>${course.description}</p>
            <button class="btn btn-success w-100"
                    onclick="openCourse(${course.id})">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

/*FILTER BY CATEGORY*/
function filterByCategory(category) {
  const filtered =
    category === "all"
      ? courses
      : courses.filter(c => c.category === category);

  displayCourses(filtered);
}

/*SEARCH COURSES*/
function filterCourses() {
  const text = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".course-item");

  items.forEach(item => {
    item.style.display =
      item.dataset.title.includes(text) ? "block" : "none";
  });
}

/*COURSE DETAILS*/
function openCourse(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  document.getElementById("detailTitle").textContent = course.title;
  document.getElementById("detailDescription").textContent = course.description;
  document.getElementById("detailImage").src = "assets/" + course.image;
  document.getElementById("detailPrice").textContent = course.price;
  document.getElementById("detailDuration").textContent = course.duration;
  document.getElementById("detailLevel").textContent = course.level;
  document.getElementById("detailLectures").textContent = course.lectures;
  document.getElementById("detailResources").textContent = course.resources;

  const points = document.getElementById("detailLearningPoints");
  points.innerHTML = "";
  course.learningPoints.forEach(p => {
    points.innerHTML += `<li>${p}</li>`;
  });

  showPage("courseDetail");
}

/*CONTACT FORM*/
function handleContactSubmit(e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  e.target.reset();
}

/*INITIAL LOAD*/
document.addEventListener("DOMContentLoaded", () => {
  displayCourses(courses);
});
