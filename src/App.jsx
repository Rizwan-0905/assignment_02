// App.jsx
import React, { Suspense, lazy } from 'react';
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
  return (
    <PageTitleProvider>
      <Router>
        <Header />
        <SideNav />

        <main style={{ padding: '20px', marginLeft: '240px' }}>
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
