import { BarChartBig, Code, Globe, Search, ShoppingCart, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom website development tailored to your specific needs and goals.",
      icon: <Globe className="w-12 h-12 text-navy-500" />
    },
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks.",
      icon: <Code className="w-12 h-12 text-navy-500" />
    },
    {
      title: "Mobile-First Design",
      description: "Ensuring your site performs beautifully across all devices and screen sizes.",
      icon: <Smartphone className="w-12 h-12 text-navy-500" />
    },
    {
      title: "E-Commerce Solutions",
      description: "Building online stores with secure payment processing and inventory management.",
      icon: <ShoppingCart className="w-12 h-12 text-navy-500" />
    },
    {
      title: "SEO Optimization",
      description: "Improving your site's visibility in search engines to attract more visitors.",
      icon: <Search className="w-12 h-12 text-navy-500" />
    },
    {
      title: "Performance Analytics",
      description: "Setting up tools to track and analyze your website's performance and user behavior.",
      icon: <BarChartBig className="w-12 h-12 text-navy-500" />
    }
  ];

  return (
    <section id="services" className="section-padding navy-gradient text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          Services I Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card hover-scale"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-navy-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
