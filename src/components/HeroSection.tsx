import { Download, Mail, Github, Linkedin, Sparkles, Zap, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-modern">
      {/* Floating geometric shapes */}
      <div className="floating-shape">
        <div className="w-32 h-32 rounded-full bg-white animate-pulse-slow"></div>
      </div>
      <div className="floating-shape">
        <div className="w-24 h-24 bg-white transform rotate-45 animate-spin-slow"></div>
      </div>
      <div className="floating-shape">
        <div className="w-28 h-28 rounded-full bg-white animate-bounce-slow"></div>
      </div>
      <div className="floating-shape">
        <div className="w-20 h-20 bg-white transform rotate-12 animate-float"></div>
      </div>

      <div className="container-width hero-content">
        <div className="text-center text-white">
          {/* Main content in glassmorphism card */}
          <div className="glassmorphism p-12 md:p-16 max-w-4xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4 text-white/70">
                <Database className="animate-bounce-slow" size={28} />
                <Code className="animate-pulse-slow" size={28} />
                <Zap className="animate-float" size={28} />
                <Sparkles className="animate-bounce-slow" size={28} />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Alekya Dakarapu
              </span>
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl md:text-3xl mb-4 text-white/90 font-light">
                Data Analyst
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-white/80">
                <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Python</span>
                <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">SQL</span>
                <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Tableau</span>
                <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Machine Learning</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transforming complex data into <span className="text-cyan-200 font-medium">actionable insights</span> that drive 
              strategic decision-making and organizational success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="btn-primary px-10 py-6 text-lg font-medium group">
                <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button size="lg" className="px-10 py-6 text-lg font-medium bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm rounded-xl group">
                <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Let's Connect
              </Button>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a 
                href="https://linkedin.com/in/alekyadakarapu" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-125 p-3 rounded-full hover:bg-white/20"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/alekyadakarapu" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-125 p-3 rounded-full hover:bg-white/20"
              >
                <Github size={28} />
              </a>
              <a 
                href="mailto:dakarapualekya@gmail.com" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-125 p-3 rounded-full hover:bg-white/20"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;