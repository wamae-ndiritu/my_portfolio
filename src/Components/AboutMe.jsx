import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award,
  Code,
  Users,
  Building
} from "lucide-react";

const AboutMe = () => {
  const experienceData = [
    {
      id: 1,
      type: "work",
      icon: Briefcase,
      title: "FullStack Developer (Remote)",
      company: "FitViz, USA",
      period: "March 2025 - Present",
      description: "Working remotely as a contract and part-time FullStack Developer, developing fitness and health-related web applications using modern technologies.",
      skills: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      color: "blue"
    },
    {
      id: 2,
      type: "work",
      icon: Users,
      title: "ICT Trainer Intern",
      company: "Kabete National Polytechnic",
      period: "April 2025 - Sept 2025",
      description: "Training students in programming courses including Java and Web Development. Designed curriculum and conducted hands-on coding sessions.",
      skills: ["Java", "Web Development", "Teaching", "Curriculum Design"],
      color: "green"
    },
    {
      id: 3,
      type: "work",
      icon: Code,
      title: "Web Developer Mentor",
      company: "eMobilis Mobile Technology Institute",
      period: "Oct 2024 - Dec 2024",
      description: "Mentored students in their Web Development Bootcamp, providing guidance on modern web technologies and best practices.",
      skills: ["JavaScript", "React.js", "Mentoring", "Project Guidance"],
      color: "purple"
    },
    {
      id: 4,
      type: "project",
      icon: Building,
      title: "Freelance Developer",
      company: "Various Clients",
      period: "2022 - Present",
      description: "Developed custom web applications and management systems for various clients, including salon management systems and e-commerce platforms.",
      skills: ["Full-Stack Development", "Client Relations", "Project Management"],
      color: "red"
    },
    {
      id: 5,
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Education in ICT",
      company: "University of Nairobi",
      period: "2021 - 2025",
      description: "Comprehensive education in Information and Communication Technology with focus on software development and educational technology.",
      skills: ["Computer Science", "Education Technology", "Research"],
      color: "indigo"
    },
    {
      id: 6,
      type: "certification",
      icon: Award,
      title: "Software Engineering Certificate",
      company: "ALX Africa",
      period: "2023",
      description: "Intensive software engineering program covering full-stack development, algorithms, and industry best practices.",
      skills: ["Python", "C", "Data Structures", "Algorithms"],
      color: "orange"
    },
    {
      id: 7,
      type: "certification",
      icon: Award,
      title: "Web Developer Certified",
      company: "eMobilis Mobile Technology Institute",
      period: "2022",
      description: "Comprehensive web development certification covering modern front-end and back-end technologies.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      color: "teal"
    }
  ];

  const getIconColor = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      red: "text-red-600 bg-red-100",
      indigo: "text-indigo-600 bg-indigo-100",
      orange: "text-orange-600 bg-orange-100",
      teal: "text-teal-600 bg-teal-100"
    };
    return colors[color] || "text-gray-600 bg-gray-100";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='about-me' className='bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6'>
      {/* Title Section */}
      <div className='text-center mb-16'>
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4'
        >
          About <span className="text-blue-600">Me</span>
        </motion.h3>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-red-500 mx-auto'></div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* My Story Section with Floating Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-20 overflow-hidden'
        >
          {/* Floating Animated Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className='absolute top-8 right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 hidden md:block'
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className='relative overflow-hidden rounded-2xl shadow-2xl group'
            >
              <img
                src='/Assets/Images/image-1.jpg'
                alt='Wamae presenting a project'
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent'></div>
            </motion.div>
          </motion.div>

          {/* Mobile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='block md:hidden mb-8'
          >
            <div className='relative overflow-hidden rounded-2xl shadow-xl mx-auto w-48 h-48'>
              <img
                src='/Assets/Images/image-1.jpg'
                alt='Wamae presenting a project'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent'></div>
            </div>
          </motion.div>

          {/* Story Content */}
          <div className='max-w-4xl'>
            <motion.h5 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'
            >
              My Story
            </motion.h5>
            <motion.h6 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='text-lg sm:text-xl font-semibold text-gray-600 mb-6'
            >
              My Journey into Tech: From Dreams of Electrical Engineering to
              Becoming a Software Engineer
            </motion.h6>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='space-y-4 text-gray-700 leading-relaxed'
            >
              <p>
                Growing up, I always dreamed of becoming an engineer. In high
                school, my curiosity and love for building things led me to
                explore the world of electrical engineering. I participated in
                Science and Engineering Fairs, worked on small projects, and even
                provided basic electrical installation services in my village.
              </p>
              <p>
                After high school, I faced a setback when my grades didn't meet
                the cutoff for the universities I aspired to join. It was a
                challenging time, but life had another plan for me. While
                volunteering as an alumni peer teacher at my old school, I got to
                work with computers for the first time. This sparked a new passion
                in me, and with the guidance of an ICT technologist, I learned
                about Computer Science. From that moment, I knew I had found my
                path.
              </p>
              <p>
                Enrolling in ICT at the University of Nairobi allowed me to merge
                my love for engineering and technology. Over time, I transitioned
                from simple HTML and CSS web applications to building complex
                Fullstack solutions. Coding became my new way of
                &quot;engineering,&quot; and the joy of solving problems through
                technology was unmatched.
              </p>
              <p>
                Today, as a Software Engineer, I dedicate myself to using
                technology to solve real-world problems, keep learning, and
                inspire others. I'm grateful for the journey that brought me
                here—it's proof that even unexpected turns can lead to fulfilling
                destinations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex items-center mt-8 pt-6 border-t border-gray-200'
            >
              <div>
                <p className='text-lg sm:text-xl font-bold text-gray-800'>
                  Wamae Ndiritu
                </p>
                <p className='text-gray-600'>Software Engineer & Educator</p>
              </div>
              <img
                src='/Assets/Images/profile-2.jpeg'
                alt='Profile'
                className='w-12 h-12 sm:w-16 sm:h-16 rounded-full ml-4 shadow-lg border-4 border-white'
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Journey Section - Constrained Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12'
        >
          <div className='text-center mb-12'>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'>
              My Professional <span className="text-blue-600">Journey</span>
            </h3>
            <p className='text-gray-600 max-w-3xl mx-auto text-sm sm:text-base'>
              From university student to professional developer - here's my coding journey, 
              work experience, and continuous learning path in the tech industry.
            </p>
          </div>

          {/* Timeline - Mobile Responsive */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className='relative'
          >
            {/* Timeline Line - Responsive */}
            <div className='absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-red-500'></div>

            <div className='space-y-6 sm:space-y-8'>
              {experienceData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className='relative flex items-start'
                  >
                    {/* Timeline Icon - Responsive */}
                    <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full ${getIconColor(item.color)} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>

                    {/* Content Card - Responsive */}
                    <div className='ml-6 sm:ml-8 flex-1 bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
                      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                        <h4 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-0'>
                          {item.title}
                        </h4>
                        <div className='flex items-center text-gray-600'>
                          <Calendar className='w-3 h-3 sm:w-4 sm:h-4 mr-2' />
                          <span className='text-xs sm:text-sm font-medium'>{item.period}</span>
                        </div>
                      </div>
                      
                      <div className='flex items-center text-gray-700 mb-3'>
                        <MapPin className='w-3 h-3 sm:w-4 sm:h-4 mr-2' />
                        <span className='font-semibold text-sm sm:text-base'>{item.company}</span>
                      </div>

                      <p className='text-gray-600 leading-relaxed mb-4 text-sm sm:text-base'>
                        {item.description}
                      </p>

                      <div className='flex flex-wrap gap-2'>
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className='px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-white border text-gray-700'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <div className='text-center mt-12 pt-8 border-t border-gray-200'>
            <p className='text-gray-600 mb-6 text-sm sm:text-base'>
              Ready to work together or learn more about my experience?
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
