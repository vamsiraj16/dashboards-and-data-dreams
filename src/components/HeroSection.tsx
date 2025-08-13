import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container-width text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            Alekya Dakarapu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Data Analyst | Python | SQL | Tableau
          </p>
          <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Detail-oriented data analyst with a passion for uncovering insights and supporting data-driven 
            decision-making. Transforming complex data into clear, strategic outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-primary px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary px-8 py-4 text-lg bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/alekyadakarapu" 
              className="text-white/70 hover:text-white transition-[var(--transition-smooth)] hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/alekyadakarapu" 
              className="text-white/70 hover:text-white transition-[var(--transition-smooth)] hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:dakarapualekya@gmail.com" 
              className="text-white/70 hover:text-white transition-[var(--transition-smooth)] hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;