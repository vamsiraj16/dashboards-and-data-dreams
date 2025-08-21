import { Brain, Cloud, BarChart3, Users } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.2);

  const projects = [
    {
      icon: Brain,
      title: "Nutrition Values Prediction Using Interface",
      description: "Implemented a project aimed at bringing nutritional awareness of food consumption through advanced image processing and CNN classification.",
      techStack: ["Python", "CNN", "Tkinter", "Image Processing", "Machine Learning"],
      highlights: [
        "Curated large dataset of food images from various online sources",
        "Implemented various image processing techniques for data preprocessing",
        "Trained and optimized convolutional neural network for food classification",
        "Created intuitive user interface using Tkinter"
      ]
    },
    {
      icon: Cloud,
      title: "Data Pipeline In Azure Data Factory",
      description: "Created comprehensive data pipelines using Azure Data Factory to automate data movement and transformation between systems.",
      techStack: ["Azure Data Factory", "Cloud Services", "ETL", "Data Pipeline", "Azure"],
      highlights: [
        "Designed automated data movement pipelines for various applications",
        "Ensured proper data transformation between source and target systems",
        "Implemented using Azure Cloud Services with successful task completion",
        "Addressed data processing challenges efficiently and quickly"
      ]
    },
    {
      icon: BarChart3,
      title: "Statistical Modeling Project",
      description: "Applied various statistical distributions and machine learning models to analyze complex datasets with optimal parameter estimation.",
      techStack: ["Statistical Analysis", "AIC", "Machine Learning", "Data Modeling", "Python"],
      highlights: [
        "Applied Normal, Gamma, Lognormal, BCPE, BCCG, and Box-Cox T distributions",
        "Used Akaike Information Criterion (AIC) for best-fit distribution identification",
        "Selected and implemented appropriate ML models based on distribution analysis",
        "Optimized parameters for enhanced visualization and interpretation"
      ]
    },
    {
      icon: Users,
      title: "Employee Performance Prediction",
      description: "Developed a comprehensive machine learning solution to predict employee performance using decision tree algorithms.",
      techStack: ["Decision Trees", "Data Preprocessing", "Python", "Correlation Analysis", "Predictive Modeling"],
      highlights: [
        "Conducted thorough data exploration and preprocessing",
        "Applied label encoding for categorical data transformation",
        "Analyzed feature relationships using correlation matrix heat maps",
        "Delivered actionable insights for business decision-making"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative data science projects showcasing machine learning, cloud computing, and statistical analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-elegant p-8 group interactive-card bounce-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg mr-4">
                  <project.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-[var(--transition-smooth)]">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-foreground">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;