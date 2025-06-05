import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600 text-center mb-16">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-navy-600 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-navy-500 mr-4" />
                <span className="text-gray-700">johnpaul.reyes@example.com</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-navy-500 mr-4" />
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-navy-500 mr-4" />
                <span className="text-gray-700">San Francisco, CA</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif text-navy-600 mb-6">Follow Me</h3>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-navy-100 rounded-full text-navy-600 hover:bg-navy-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-navy-100 rounded-full text-navy-600 hover:bg-navy-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-navy-100 rounded-full text-navy-600 hover:bg-navy-200 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input-field"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="input-field"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="navy-gradient text-white py-3 px-8 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
