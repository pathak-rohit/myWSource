import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin,
  Boxes,
  Cloud,
  Brain
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Enterprise Software Modernization",
      description: "Modernizing the world's #1 enterprise level design software. Creating new user interaction paradigms, improving productivity by leaps and bounds.",
      icon: Boxes
    },
    {
      title: "Cloud Migration",
      description: "Moving applications to the cloud hosted on an in-house PaaS on top of MS Azure.",
      icon: Cloud
    },
    {
      title: "AI/ML Integration",
      description: "Using Artificial Intelligence and Machine Learning to automate complex workflows and speed up design.",
      icon: Brain
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 px-4 py-8">
      {/* Header */}
      <nav className="flex justify-center space-x-8 py-6">
        {['about', 'work', 'contact'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`text-sm uppercase tracking-wider ${
              activeSection === section 
                ? 'text-black border-b border-black' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="min-h-[60vh]">
        {activeSection === 'about' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-light">Hello, I am Rohit Pathak.</h1>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a Senior Product Manager currently working with the Asset Lifecycle Intelligence Division of the Swedish Technology Firm Hexagon AB.
              </p>
              <p>
                We're building the next generation of 'Smart3D', one of the world's most complex enterprise level design software products.
              </p>
              <p>
                It is used for the end to end design and digital twinning of large scale industrial facilities, for example, an oil refinery or a nuclear power plant.
              </p>
              <p>
                This is perhaps one of the coolest software products you have never heard of! (Unless you work in the oil and gas or heavy engineering industry, of course.)
              </p>
              <p>
                If you are a recruiter, you can find my LinkedIn below.
              </p>
              <p className="text-gray-500 italic">
                BTW this website is still a work in progress.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'work' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-light">Current Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <project.icon className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-light">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              Feel free to reach out if you'd like to talk or just a friendly hello.
            </p>
            <a 
              href="mailto:write@rohitpathak.com"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <Mail size={18} />
              <span>write@rohitpathak.com</span>
            </a>
          </div>
        )}
      </main>

      {/* Footer - LinkedIn only */}
      <footer className="py-8 flex justify-center">
        <a 
          href="https://www.linkedin.com/in/pathakrohit/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition-colors flex items-center space-x-2"
        >
          <Linkedin size={20} />
          <span className="text-sm">LinkedIn</span>
        </a>
      </footer>
    </div>
  );
}

export default App;