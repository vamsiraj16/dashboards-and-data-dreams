import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Alekya Dakarapu</h3>
            <p className="text-background/80">Data Analyst & Machine Learning Enthusiast</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/alekyadakarapu" 
              className="text-background/70 hover:text-background transition-[var(--transition-smooth)] hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/alekyadakarapu" 
              className="text-background/70 hover:text-background transition-[var(--transition-smooth)] hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:dakarapualekya@gmail.com" 
              className="text-background/70 hover:text-background transition-[var(--transition-smooth)] hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/80 flex items-center justify-center md:justify-end">
              Made with <Heart className="mx-1 text-red-400" size={16} fill="currentColor" /> in London
            </p>
            <p className="text-background/60 text-sm mt-1">
              © {currentYear} Alekya Dakarapu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;