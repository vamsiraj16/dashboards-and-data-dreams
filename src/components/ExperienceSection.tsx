import { Briefcase, Users, Code2, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const experiences = [
    {
      icon: Briefcase,
      title: "Teaching Assistant",
      company: "Sep 2023 - Mar 2024",
      type: "work",
      achievements: [
        "Provided 1:1 and small-group assistance to primary-aged SEN students, focusing on literacy, writing, and emotional regulation",
        "Adapted lessons to meet the needs of children with autism, dyslexia, and developmental delays",
        "Mastered the art of storytelling to keep students engaged while ensuring understanding",
        "Introduced sensory-friendly writing tools to improve handwriting skills",
        "Helped non-verbal students use PECS (Picture Exchange Communication System) to express ideas",
        "Recognized by staff for patience and creativity in motivating reluctant learners"
      ]
    },
    {
      icon: Code2,
      title: "Smart Bridge Intern",
      company: "June 2019",
      type: "work",
      achievements: [
        "Implemented feature extraction and classification of large datasets of images",
        "Trained CNN models using pre-processed data for classification applications",
        "Acquired working experience of AI implementation with Python & IBM Watson"
      ]
    },
    {
      icon: Users,
      title: "Campus Fellowships Volunteer",
      company: "Dec 2020 - Jun 2021",
      type: "volunteer",
      achievements: [
        "Managed a team of 3 students as part of a University-led internship program",
        "Evaluated holistic performance and development of the team in work environment",
        "Performed administrative duties to improve participation and efficient time-tracking",
        "Led Scrum/Kanban activities with performance analytics",
        "Responsible for creation of sprint backlogs and successful execution of formal sprints"
      ]
    },
    {
      icon: GraduationCap,
      title: "Learn AI Trainee",
      company: "Aug 2021 - Feb 2022",
      type: "training",
      achievements: [
        "Professional training on Data Analytics to facilitate adaptation into professional industry roles",
        "Data visualization and preprocessing techniques",
        "Learned exploratory data analysis techniques",
        "Acquired basic knowledge on statistical models",
        "Implemented solutions on different types of datasets",
        "Acquired basic knowledge on Power BI visualization"
      ]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work': return 'text-primary';
      case 'volunteer': return 'text-accent';
      case 'training': return 'text-secondary-foreground';
      default: return 'text-primary';
    }
  };

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Experience Timeline</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning education, technology, and data analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 animate-pulse"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card-elegant p-6 interactive-card hover-scale">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ${getIconColor(exp.type)}`}>
                        <exp.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {(expandedCard === index ? exp.achievements : exp.achievements.slice(0, 3)).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                      {exp.achievements.length > 3 && (
                        <button
                          onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                          className="flex items-center gap-2 text-xs text-primary font-medium hover:text-primary/80 transition-colors mt-2"
                        >
                          {expandedCard === index ? (
                            <>
                              <ChevronUp size={14} />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown size={14} />
                              +{exp.achievements.length - 3} more achievements
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;