import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import { PageTitleProvider } from './context/PageTitleContext';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <PageTitleProvider>
      <Router>
        <Header />
        
        {/* Pass the state and toggle function to the SideNav */}
        <SideNav toggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
        
        <main className={`main-content ${sidebarCollapsed ? 'collapsed' : ''}`} style={{ marginLeft: sidebarCollapsed ? 80 : 240 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </Router>
    </PageTitleProvider>
  );
}

export default App;
