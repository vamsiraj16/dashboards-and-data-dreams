import { Code, BarChart3, Settings } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Cloud",
      skills: [
        "Python (Numpy/Pandas/OpenCV)",
        "SQL",
        "ETL Framework Design",
        "ADF & Synapse",
        "Azure Resources",
        "Jupyter Notebooks & Tkinter"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Visualization",
      skills: [
        "Data Collection & Processing",
        "Statistical Analysis & Hypothesis Testing",
        "Matplotlib/Seaborn/Plotly/PowerBI",
        "Classification/Clustering Modeling",
        "Deep Learning: TensorFlow, Keras",
        "Machine Learning: Predictive/Time Series"
      ]
    },
    {
      icon: Settings,
      title: "Tools & Skills",
      skills: [
        "Agile Workflow (Scrum/Kanban)",
        "Trello, Azure DevOps Boards",
        "Excel (Pivot Tables/Power Query)",
        "Data Storytelling with PowerPoint",
        "Conda/Anaconda Environments",
        "Strong Communication Skills"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern data analysis and machine learning implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elegant p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;