const data = {
  sidemenu: [
    { icon: "👤", label: "About", link: "#about" },
    { icon: "📁", label: "Projects", link: "#projects" },
    { icon: "📝", label: "Blogs", link: "#blogs" },
    { 
      icon: "🏆", 
      label: "Achievements", 
      link: "#achievements",
      subitems: [
        { icon: "🎯", label: "Hackathons", link: "#achievements-hackathons" },
        { icon: "⭐", label: "Awards", link: "#achievements-awards" }
      ]
    }
  ],
  about: [
    {
      introduction: "Hi, I'm Babuaravind Gururaj"
    }
  ],
  projects: [
    {
      id: 1,
      title: "DSC eDemo - Virtual Stock Trading Platform",
      description: "DSC Securities",
      category: "Cloud",
      image: "" // Add image URL if available
    },
    {
      id: 2,
      title: "HaThanhMansion",
      description: "HaThanhMansion",
      category: "Others",
      image: "" // Add image URL if available
    },
    {
      id: 3,
      title: "Blockchain Project",
      description: "Sample Blockchain Project",
      category: "Blockchain",
      image: "" // Add image URL if available
    },
    {
      id: 4,
      title: "iOS App",
      description: "Sample iOS Application",
      category: "iOS",
      image: "" // Add image URL if available
    }
  ],
  
  blogs: [
    {
      id: 1,
      title: "Understanding React Hooks",
      description: "A deep dive into React Hooks and their use cases",
      category: "React",
      image: "" // Add image URL if available
    },
    {
      id: 2,
      title: "Getting Started with Blockchain",
      description: "Introduction to blockchain technology",
      category: "Blockchain",
      image: "" // Add image URL if available
    },
    {
      id: 3,
      title: "Cloud Computing Basics",
      description: "Fundamentals of cloud computing",
      category: "Cloud",
      image: "" // Add image URL if available
    },
    {
      id: 4,
      title: "iOS Development Tips",
      description: "Best practices for iOS development",
      category: "iOS",
      image: "" // Add image URL if available
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Lux Veritas Virtus Society of Distinction",
      issuer: "Northeastern University",
      date: "Apr 2024",
      description: "Inducted into the Lux. Veritas. Virtus. society as one of the 75 candidates from a eligible pool of about 5000 graduating grad students from all the Northeastern University campuses",
      category: "Awards",
      link: "https://coe.northeastern.edu/news/2024-lux-veritas-virtus-inductees/"
    },
    {
      id: 2,
      title: "Richard E. Sochacki Organization of the Year Award",
      issuer: "Northeastern Center for Student Involvement",
      date: "Apr 2024",
      description: "Awarded to Northeastern Graduate Student Government and honors an Executive Board for their above and beyond work in the organisation, where I served as the Vice President of Finance.",
      category: "Awards",
      subcategories: ["Organizational Award"],
      image: require('./images/Org.OfTheYear.png')
    },
    {
      id: 3,
      title: "First Place - NEU Hackathon 2024",
      description: "Built an AI-powered solution for sustainable energy management, winning first place among 50+ teams",
      category: "Hackathons",
      image: require('./images/Org.OfTheYear.png'), // Temporary image
      link: "https://devpost.com/your-project"
    },
    {
      id: 4,
      title: "Runner Up - HackHarvard 2023",
      description: "Developed an innovative blockchain-based solution for supply chain transparency",
      category: "Hackathons",
      image: require('./images/Org.OfTheYear.png'), // Temporary image
      link: "https://devpost.com/your-project"
    }
  ]
};

export default data; 