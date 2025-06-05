export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 text-center mb-16">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-navy-100 shadow-lg">
              <img 
                src="john.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif text-navy-600 mb-4">
              Hello, I'm Paul Reyes
            </h3>
            
            <p className="text-gray-700 mb-4">
              I'm a passionate web developer and designer with over 5 years of experience creating 
              stunning, functional websites and applications. My journey in web development began 
              when I discovered my love for combining creativity with technical problem-solving.
            </p>
            
            <p className="text-gray-700 mb-4">
              I specialize in crafting user-centered experiences that are not only visually appealing 
              but also highly functional and accessible. My approach combines clean code, modern design 
              principles, and a deep understanding of user needs.
            </p>
            
            <p className="text-gray-700 mb-8">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or enjoying outdoor activities to recharge my creative energy.
            </p>
            
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-navy-600 font-bold text-3xl">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-navy-600 font-bold text-3xl">100+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-navy-600 font-bold text-3xl">50+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
