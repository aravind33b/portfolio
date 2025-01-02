import React, { useState } from 'react';
import './App.css';
import data from './data';
import { motion, AnimatePresence } from 'framer-motion';

// Create a new component for the Gallery icon
const GalleryIcon = () => (
  <svg 
    role="graphics-symbol" 
    viewBox="0 0 16 16" 
    style={{
      width: '16px', 
      height: '16px', 
      display: 'block', 
      fill: 'rgba(255, 255, 255, 0.45)', 
      flexShrink: 0, 
      marginRight: '6px'
    }} 
    className="gallery-icon"
  >
    <path d="M2.0542 7.75952H5.96973C7.00464 7.75952 7.50562 7.25854 7.50562 6.19727V3.58691C7.50562 2.53223 7.00464 2.03125 5.96973 2.03125H2.0542C1.01929 2.03125 0.518311 2.53223 0.518311 3.58691V6.19727C0.518311 7.25854 1.01929 7.75952 2.0542 7.75952ZM10.0303 7.75952H13.9392C14.9741 7.75952 15.4751 7.25854 15.4751 6.19727V3.58691C15.4751 2.53223 14.9741 2.03125 13.9392 2.03125H10.0303C8.98877 2.03125 8.48779 2.53223 8.48779 3.58691V6.19727C8.48779 7.25854 8.98877 7.75952 10.0303 7.75952ZM2.06079 6.55322C1.83008 6.55322 1.71802 6.44116 1.71802 6.20386V3.58032C1.71802 3.34961 1.83008 3.23755 2.06079 3.23755H5.96313C6.18726 3.23755 6.30591 3.34961 6.30591 3.58032V6.20386C6.30591 6.44116 6.18726 6.55322 5.96313 6.55322H2.06079ZM10.0369 6.55322C9.79956 6.55322 9.69409 6.44116 9.69409 6.20386V3.58032C9.69409 3.34961 9.79956 3.23755 10.0369 3.23755H13.9392C14.1633 3.23755 14.2754 3.34961 14.2754 3.58032V6.20386C14.2754 6.44116 14.1633 6.55322 13.9392 6.55322H10.0369ZM2.0542 14.4634H5.96973C7.00464 14.4634 7.50562 13.969 7.50562 12.9077V10.2974C7.50562 9.24268 7.00464 8.7417 5.96973 8.7417H2.0542C1.01929 8.7417 0.518311 9.24268 0.518311 10.2974V12.9077C0.518311 13.969 1.01929 14.4634 2.0542 14.4634ZM10.0303 14.4634H13.9392C14.9741 14.4634 15.4751 13.969 15.4751 12.9077V10.2974C15.4751 9.24268 14.9741 8.7417 13.9392 8.7417H10.0303C8.98877 8.7417 8.48779 9.24268 8.48779 10.2974V12.9077C8.48779 13.969 8.98877 14.4634 10.0303 14.4634ZM2.06079 13.2637C1.83008 13.2637 1.71802 13.1516 1.71802 12.9143V10.2974C1.71802 10.0601 1.83008 9.94141 2.06079 9.94141H5.96313C6.18726 9.94141 6.30591 10.0601 6.30591 10.2974V12.9143C6.30591 13.1516 6.18726 13.2637 5.96313 13.2637H2.06079ZM10.0369 13.2637C9.79956 13.2637 9.69409 13.1516 9.69409 12.9143V10.2974C9.69409 10.0601 9.79956 9.94141 10.0369 9.94141H13.9392C14.1633 9.94141 14.2754 10.0601 14.2754 10.2974V12.9143C14.2754 13.1516 14.1633 13.2637 13.9392 13.2637H10.0369Z" />
  </svg>
);

// Add this near the top of the file with other imports
const ExternalLinkIcon = () => (
  <img 
    src={require('./images/Vector.png')} 
    alt="external link" 
    style={{ 
      height: '11px', 
      display: 'inline-block',
      marginLeft: '2px',
      verticalAlign: 'middle',
      position: 'relative',
      top: '10%',
      opacity: 1
    }} 
  />
);

// First, add a new ImageOverlay component at the top level
const ImageOverlay = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="image-overlay" onClick={onClose}>
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={imageSrc} alt="Award" className="overlay-image" />
      </div>
    </div>
  );
};

// Create a new MenuIcon component
const MenuIcon = ({ isHovered, isExpanded }) => (
  <div className="relative" style={{ width: '20px' }}>
    <span className="menu-icon" style={{ 
      opacity: isHovered || isExpanded ? 0 : 1,
      transition: 'opacity 0.15s ease'
    }}>
      🏆
    </span>
    <motion.span
      className="arrow-icon"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isHovered || isExpanded ? 1 : 0,
        scale: isHovered || isExpanded ? 1.5 : 0.5,
        rotate: isExpanded ? 90 : 0
      }}
      transition={{ duration: 0.15 }}
      style={{
        position: 'absolute',
        left: '7%',
        top: '15%',
        transform: 'translateY(-50%)',
        display: 'inline-block',
        transformOrigin: 'center',
        color: '#787878',
        fontSize: '16px',
      }}
    >
      ›
    </motion.span>
  </div>
);

function App() {
  const [projectFilter, setProjectFilter] = useState('Gallery View');
  const [blogFilter, setBlogFilter] = useState('All Posts');
  const [viewType, setViewType] = useState('gallery');
  const [expandedMenus, setExpandedMenus] = useState(new Set());
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredProjects = projectFilter === 'Gallery View' 
    ? data.projects 
    : data.projects.filter(project => project.category === projectFilter);

  const filteredBlogs = blogFilter === 'All Posts'
    ? data.blogs
    : data.blogs.filter(blog => blog.category === blogFilter);

  const toggleMenu = (index) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMenus(newExpanded);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset to account for any fixed headers
      const offset = 60; // Adjust this value based on your layout
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleMenuClick = (item, index) => {
    // If it's achievements, expand the menu and scroll
    if (item.label === 'Achievements') {
      const newExpanded = new Set(expandedMenus);
      if (!newExpanded.has(index)) {
        newExpanded.add(index);
        setExpandedMenus(newExpanded);
      }
      // Always scroll to the achievements section when clicking the main menu item
      scrollToSection('achievements');
    } else {
      // For other menu items, just scroll to their sections
      scrollToSection(item.link.substring(1));
    }
  };

  // Update the submenu click handler
  const handleSubmenuClick = (e, sectionId) => {
    e.stopPropagation(); // Prevent triggering parent menu item's click
    scrollToSection(sectionId);
  };

  return (
    <div className="App">
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-user">
            <div className="user-avatar">
              {/* You can replace this with an actual image */}
              <span>B</span>
            </div>
            <div className="user-info">
              Babuaravind Gururaj
            </div>
          </div>
        </div>
        <ul className="sidebar-menu">
          {data.sidemenu.map((item, index) => (
            <React.Fragment key={index}>
              <motion.li 
                className={`menu-item ${item.subitems ? 'has-subitems' : ''} 
                  ${expandedMenus.has(index) ? 'expanded' : ''} 
                  ${activeSection === item.link.substring(1) ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (item.subitems) {
                    toggleMenu(index);
                  }
                  handleMenuClick(item, index);
                }}
                animate={{ 
                  backgroundColor: expandedMenus.has(index) ? 'rgba(255, 255, 255, 0.055)' : 'transparent'
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label === 'Achievements' ? (
                  <MenuIcon 
                    isHovered={hoveredItem === index} 
                    isExpanded={expandedMenus.has(index)}
                  />
                ) : (
                  <span className="menu-icon">{item.icon}</span>
                )}
                {item.label}
              </motion.li>
              
              <AnimatePresence>
                {item.subitems && expandedMenus.has(index) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`submenu ${expandedMenus.has(index) ? 'expanded' : ''}`}
                  >
                    {item.subitems.map((subitem, subIndex) => (
                      <motion.li 
                        key={subIndex} 
                        className={`submenu-item ${activeSection === subitem.link.substring(1) ? 'active' : ''}`}
                        onClick={(e) => handleSubmenuClick(e, subitem.link.substring(1))}
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.055)' }}
                      >
                        <span className="menu-icon">{subitem.icon}</span>
                        {subitem.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </ul>
      </nav>
      <div className="content-wrapper">
        <div className="main-content">
          <section id="about" className="profile-section">
            <div className="profile-image"></div>
            <h1 className="profile-title">Hi, I'm Babuaravind Gururaj</h1>
            <p className="profile-subtitle">
              I'm a <span>Software Engineer</span> from the United States.
            </p>
            <p className="profile-subtitle">
              I have <span>3+ years</span> of experience to create value for others through software products. I am a 5x Hackathon winner and love taking long walks when I am not coding
            </p>
          </section>

          <hr className="section-divider" />

          <section id="projects" className="projects-section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
            </div>
            
            <div className="filters">
              <button 
                className={`filter-button ${projectFilter === 'Gallery View' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Gallery View')}
              >
                <GalleryIcon /> Gallery View
              </button>
              <button 
                className={`filter-button ${projectFilter === 'Cloud' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Cloud')}
              >
                <GalleryIcon /> Cloud
              </button>
              <button 
                className={`filter-button ${projectFilter === 'Blockchain' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Blockchain')}
              >
                <GalleryIcon /> Blockchain
              </button>
              <button 
                className={`filter-button ${projectFilter === 'iOS' ? 'active' : ''}`}
                onClick={() => setProjectFilter('iOS')}
              >
                <GalleryIcon /> iOS
              </button>
              <button 
                className={`filter-button ${projectFilter === 'Others' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Others')}
              >
                <GalleryIcon /> Others
              </button>
            </div>

            <div className={`cards-grid ${viewType}`}>
              {filteredProjects.map(project => (
                <div key={project.id} className="card">
                  <div className="card-image"></div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p className="company">{project.description}</p>
                    <div className="tags">
                      {project.tags?.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="section-divider" />

          <section id="blogs" className="blogs-section">
            <div className="section-header">
              <h2 className="section-title">Blogs</h2>
              {/* <button className="view-toggle" onClick={() => setViewType(viewType === 'list' ? 'gallery' : 'list')}>
                📐
              </button> */}
            </div>
            
            <div className="filters">
              <button 
                className={`filter-button ${blogFilter === 'All Posts' ? 'active' : ''}`}
                onClick={() => setBlogFilter('All Posts')}
              >
                <GalleryIcon /> All Posts
              </button>
              <button 
                className={`filter-button ${blogFilter === 'React' ? 'active' : ''}`}
                onClick={() => setBlogFilter('React')}
              >
                <GalleryIcon /> React
              </button>
              <button 
                className={`filter-button ${blogFilter === 'Blockchain' ? 'active' : ''}`}
                onClick={() => setBlogFilter('Blockchain')}
              >
                <GalleryIcon /> Blockchain
              </button>
              <button 
                className={`filter-button ${blogFilter === 'Cloud' ? 'active' : ''}`}
                onClick={() => setBlogFilter('Cloud')}
              >
                <GalleryIcon /> Cloud
              </button>
              <button 
                className={`filter-button ${blogFilter === 'iOS' ? 'active' : ''}`}
                onClick={() => setBlogFilter('iOS')}
              >
                <GalleryIcon /> iOS
              </button>
            </div>

            <div className={`cards-grid ${viewType}`}>
              {filteredBlogs.map(blog => (
                <div key={blog.id} className="card">
                  <div className="card-image"></div>
                  <div className="card-content">
                    <h3>{blog.title}</h3>
                    <p className="company">{blog.description}</p>
                    <div className="tags">
                      {blog.tags?.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="blog-meta">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="section-divider" />

          <section id="achievements" className="achievements-section">
            <AchievementsSection />
          </section>
        </div>
      </div>
    </div>
  );
}

function AchievementsSection() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsImageOpen(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="section-title">Achievements</h2>
      
      <div id="achievements-hackathons" className="space-y-4">
        <h3 className="achievement-subtitle">Hackathons</h3>
        <div className="cards-grid gallery">
          {data.achievements
            .filter(achievement => achievement.category === 'Hackathons')
            .map((hackathon) => (
              <a 
                key={hackathon.id} 
                href={hackathon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hackathon-card"
              >
                <div className="card-image">
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.title}
                    className="hackathon-image"
                  />
                  <div className="card-overlay">
                    <span className="view-project">
                      View Project <ExternalLinkIcon />
                    </span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{hackathon.title}</h3>
                  <p className="hackathon-description">{hackathon.description}</p>
                </div>
              </a>
            ))}
        </div>
      </div>

      <div id="achievements-awards" className="space-y-4">
        <h3 className="achievement-subtitle">Awards</h3>
        {data.achievements
          .filter(achievement => achievement.category === 'Awards')
          .map((award) => (
            <div key={award.id} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h4 className="achievement-title">
                    {award.link ? (
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="achievement-link"
                      >
                        {award.title}
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      award.title
                    )}
                  </h4>
                  <p className="achievement-issuer">
                    Issued by {award.issuer} · {award.date}
                  </p>
                </div>
                {award.image && (
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="award-thumbnail"
                    onClick={() => handleImageClick(award.image)}
                  />
                )}
              </div>
              <p className="achievement-description">
                {award.description}
              </p>
            </div>
          ))}
      </div>

      <ImageOverlay 
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        imageSrc={selectedImage}
      />
    </div>
  );
}

export default App;
