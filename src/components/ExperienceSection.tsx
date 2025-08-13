import { Briefcase, Users, Code2, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
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
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning education, technology, and data analytics
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-elegant p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`p-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 ${getIconColor(exp.type)}`}>
                    <exp.icon size={32} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.company}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;