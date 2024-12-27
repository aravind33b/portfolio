import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [projectFilter, setProjectFilter] = useState('Gallery View');
  const [blogFilter, setBlogFilter] = useState('All Posts');
  const [viewType, setViewType] = useState('gallery');

  const filteredProjects = projectFilter === 'Gallery View' 
    ? data.projects 
    : data.projects.filter(project => project.category === projectFilter);

  const filteredBlogs = blogFilter === 'All Posts'
    ? data.blogs
    : data.blogs.filter(blog => blog.category === blogFilter);

  return (
    <div className="App">
      <nav className="sidebar">
        <ul className="sidebar-menu">
          {data.sidemenu.map((item, index) => (
            <li key={index}>
              <span>{item.icon}</span>
              {item.label}
              {/* <a href={item.link}></a> */}
            </li>
          ))}
        </ul>
      </nav>
      <div className="content-wrapper">
        <div className="main-content">
          <section className="profile-section">
            <div className="profile-image"></div>
            <h1 className="profile-title">Hi, I'm Henry Vu</h1>
            <p className="profile-subtitle">
              I'm a <span>Senior Frontend Engineer</span> from Hanoi, Vietnam 🇻🇳
            </p>
            <p className="profile-subtitle">
              I have <span>3+ years</span> of experience to create value for others through software products.
            </p>
          </section>

          <hr className="section-divider" />

          <section className="projects-section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              {/* <button className="view-toggle" onClick={() => setViewType(viewType === 'list' ? 'gallery' : 'list')}>
                <span class="grid-icon"></span>
              </button> */}
            </div>
            
            <div className="filters">
              <button 
                className={`filter-button ${projectFilter === 'Gallery View' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Gallery View')}
              >
                🎯 All Projects
              </button>
              <button 
                className={`filter-button ${projectFilter === 'Cloud' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Cloud')}
              >
                ☁️ Cloud
              </button>
              <button 
                className={`filter-button ${projectFilter === 'Blockchain' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Blockchain')}
              >
                ⛓️ Blockchain
              </button>
              <button 
                className={`filter-button ${projectFilter === 'iOS' ? 'active' : ''}`}
                onClick={() => setProjectFilter('iOS')}
              >
                📱 iOS
              </button>
              <button 
                className={`filter-button ${projectFilter === 'Others' ? 'active' : ''}`}
                onClick={() => setProjectFilter('Others')}
              >
                ✨ Others
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

          <section className="blogs-section">
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
                📚 All Posts
              </button>
              <button 
                className={`filter-button ${blogFilter === 'React' ? 'active' : ''}`}
                onClick={() => setBlogFilter('React')}
              >
                ⚛️ React
              </button>
              <button 
                className={`filter-button ${blogFilter === 'Blockchain' ? 'active' : ''}`}
                onClick={() => setBlogFilter('Blockchain')}
              >
                ⛓️ Blockchain
              </button>
              <button 
                className={`filter-button ${blogFilter === 'Cloud' ? 'active' : ''}`}
                onClick={() => setBlogFilter('Cloud')}
              >
                ☁️ Cloud
              </button>
              <button 
                className={`filter-button ${blogFilter === 'iOS' ? 'active' : ''}`}
                onClick={() => setBlogFilter('iOS')}
              >
                📱 iOS
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
        </div>
      </div>
    </div>
  );
}

export default App;
