
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Blogs } from './components/Blogs';
import { OurWork } from './components/OurWork';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import { ScrollIndicator } from './components/ScrollIndicator';
import { ContactModal } from './components/ContactModal';
import { Project } from './types';
import { ProjectDetail } from './components/ProjectDetail';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const triggerContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsContactModalOpen(true);
  };

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    // instant scroll to top before entering project view
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  // Render Project Detail View if a project is selected
  if (activeProject) {
    return (
      <div className="min-h-screen bg-[#121212]">
        <ProjectDetail project={activeProject} onBack={handleCloseProject} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <ScrollIndicator />
      <Navbar onContactClick={triggerContact} />

      <main className="transition-all duration-300 pt-16 md:pt-0">
        <Reveal>
          <Hero onContactClick={triggerContact} />
        </Reveal>

        <Services onContactClick={triggerContact} />

        <OurWork onProjectClick={handleOpenProject} />

        <Reveal>
          <About />
        </Reveal>

        <Process />

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <FAQ />
        </Reveal>

        <Reveal>
          <ContactCTA />
        </Reveal>

        <Footer />
      </main>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default App;
