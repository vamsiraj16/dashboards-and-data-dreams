import { User, Target, BarChart3, Brain } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.2);

  const highlights = [
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Expert in transforming complex datasets into actionable business intelligence"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Proficient in predictive modeling, classification, and deep learning techniques"
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Focused on delivering clear, strategic outcomes that drive organizational success"
    },
    {
      icon: User,
      title: "Collaborative Approach",
      description: "Strong communication skills with experience in cross-functional team leadership"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary to-accent p-1 rounded-2xl w-48 h-48 mx-auto interactive-card">
              <div className="bg-card rounded-2xl w-full h-full flex items-center justify-center">
                <User size={80} className="text-primary" />
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="font-bold text-xl mb-2">Data Analyst</h3>
              <p className="text-muted-foreground text-sm">MSc Data Analytics</p>
              <p className="text-muted-foreground text-sm">London Metropolitan University</p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="card-elegant p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">About Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate data analyst specializing in transforming complex datasets into actionable business intelligence. 
                  Expert in Python, SQL, and advanced visualization tools with experience spanning from teaching SEN students 
                  to implementing ML models and data pipelines in Azure.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className={`card-elegant p-4 stagger-item interactive-card hover-scale`}>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <item.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-xs">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;