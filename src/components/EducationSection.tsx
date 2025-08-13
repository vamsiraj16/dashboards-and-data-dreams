import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master's in Data Analytics",
      institution: "London Metropolitan University",
      location: "London, UK",
      date: "Sep 2023",
      description: "Advanced studies in data analytics, machine learning, and statistical modeling with focus on real-world applications."
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: "Stanley College of Engineering for Women and Technology, Osmania University",
      location: "India",
      date: "June 2020",
      description: "Comprehensive foundation in computer science principles, programming, and software engineering methodologies."
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in data analytics and computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`card-elegant p-8 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-5/12`}>
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg mr-4 flex-shrink-0">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                      <h4 className="text-lg text-primary font-medium mb-2">{edu.institution}</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {edu.date}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;