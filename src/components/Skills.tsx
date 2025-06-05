export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "REST API"] },
    { category: "Design", items: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Responsive Design"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Webpack", "Chrome DevTools"] }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 text-center mb-16">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover-scale"
            >
              <h3 className="text-xl text-navy-600 font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-navy-50 text-navy-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
