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
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-primary to-accent p-1 rounded-2xl mb-8 w-64 h-64 mx-auto lg:mx-0 interactive-card">
              <div className="bg-white rounded-2xl w-full h-full flex items-center justify-center">
                <User size={120} className="text-primary" />
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate data analyst with a Master's in Data Analytics from London Metropolitan University. 
              With expertise in Python, SQL, and advanced visualization tools, I specialize in uncovering insights 
              that drive strategic decision-making.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              My experience spans from teaching assistance with SEN students to implementing complex machine learning 
              models and data pipelines in Azure. I thrive on turning data challenges into opportunities for growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className={`card-elegant p-6 stagger-item interactive-card`}>
                  <item.icon className="text-primary mb-4" size={40} />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;