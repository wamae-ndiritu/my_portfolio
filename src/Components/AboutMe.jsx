import { skills } from "./skills/skillsData";

const AboutMe = () => {
  return (
    <section id='aboutme' className='bg-gray-100 py-12 px-6'>
      {/* Title Section */}
      <div className='text-center mb-8'>
        <h3 className='text-3xl font-bold text-primary'>About Me</h3>
        <div className='h-1 w-20 bg-primary mx-auto mt-2'></div>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start'>
        {/* About Image and Skills */}
        <div className='space-y-8'>
          <div className='relative group'>
            <img
              src='/Assets/Images/image-1.jpg'
              alt='Wamae'
              className='rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500'
            />
          </div>
          <div className='bg-white shadow-lg p-6 rounded-lg'>
            <h5 className='text-xl font-semibold text-primary mb-4'>
              Technologies & Tools
            </h5>
            <p className='text-gray-600 mb-4'>
              Here are some of the technologies and tools that I use to craft
              solutions:
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              {skills.map((skill) => (
                <div key={skill.id} className='w-12 h-12'>
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className='w-full h-full object-contain rounded-lg shadow-md hover:scale-105 transform transition duration-300'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Story */}
        <div className='space-y-6'>
          <h5 className='text-2xl font-semibold text-primary'>My Story</h5>
          <h6 className='text-lg font-medium text-gray-700'>
            My Journey into Tech: From Dreams of Electrical Engineering to
            Becoming a Software Engineer
          </h6>
          <div className='space-y-4'>
            <p className='text-gray-700 leading-relaxed'>
              Growing up, I always dreamed of becoming an engineer. In high
              school, my curiosity and love for building things led me to
              explore the world of electrical engineering. I participated in
              Science and Engineering Fairs, worked on small projects, and even
              provided basic electrical installation services in my village.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              After high school, I faced a setback when my grades didn’t meet
              the cutoff for the universities I aspired to join. It was a
              challenging time, but life had another plan for me. While
              volunteering as an alumni peer teacher at my old school, I got to
              work with computers for the first time. This sparked a new passion
              in me, and with the guidance of an ICT technologist, I learned
              about Computer Science. From that moment, I knew I had found my
              path.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              Enrolling in ICT at the University of Nairobi allowed me to merge
              my love for engineering and technology. Over time, I transitioned
              from simple HTML and CSS web applications to building complex
              Fullstack solutions. Coding became my new way of
              &quot;engineering,&quot; and the joy of solving problems through
              technology was unmatched.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              Today, as a Software Engineer, I dedicate myself to using
              technology to solve real-world problems, keep learning, and
              inspire others. I’m grateful for the journey that brought me
              here—it’s proof that even unexpected turns can lead to fulfilling
              destinations.
            </p>
          </div>
          <div className='flex items-center mt-6'>
            <div>
              <p className='text-lg font-semibold text-gray-800'>
                Wamae Ndiritu
              </p>
              <p className='text-sm text-gray-600'>Software Engineer</p>
            </div>
            <img
              src='/Assets/Images/profile-2.jpeg'
              alt='Profile'
              className='w-16 h-16 rounded-full ml-4 shadow-md'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
