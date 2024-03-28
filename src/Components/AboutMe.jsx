import SkillCard from "./skills/SkillCard";
import { skills } from "./skills/skillsData";

const AboutMe = () => {
  return (
    <div className='about-section' id='about'>
      <div className='title'>
        <h3 className='h3'>About Me</h3>
        <div className='hr'></div>
      </div>
      <div className='about-info'>
        <div className='about-left'>
          <div className='about-bio shadow-sm'>
            <img src='/Assets/Images/image-1.jpg' alt='Wamae' />
          </div>
          <div className='skills desktop-skills'>
            <h5 className='h5 title-h5'>Technologies & Tools</h5>
            <p className='text-center'>
              Here are some of technologies and tools that I use to craft
              solutions.
            </p>
            <div className='row d-flex justify-content-center'>
              {skills.map((skill) => {
                const { id } = skill;
                return (
                  <div className='skill' key={id}>
                    <img src={skill.img} alt={skill.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='about-story'>
          <h5 className='h5'>My Story</h5>
          <h6 className='story-title'>
            My Journey into Tech: From Dreams of Electrical Engineering to
            Becoming a Sofware Engineer
          </h6>
          <p>
            <i
              className='fa fa-quote-left icon-story icn-left'
              aria-hidden='true'
            ></i>
            In my early years, I always wanted to be an engineer. In high
            school, I was really into making things, especially electrical
            stuff. I joined Science and Engineering Fairs to learn more and
            chase my dream of being an Electrical Engineer. I had taught myself
            how to do basic electrical installations, and I could offer these
            services back in the village. I loved everything electric and I
            could mess around with an electronic or even a circuit just to learn
            more about it. My Papa💖 knows this best
            <span style={{ fontSize: "18px" }}>&#128522;</span>.
          </p>
          <p>
            After finishing high school with a B+ in 2020 KCSE, I thought I
            could finally study what I wanted. But then I found out my grades
            weren&apos;t enough to get into the universities I wanted in Kenya.
            I started to doubt if my dream was too big or even possible.
          </p>
          <p>
            I went back to my old high school, St. Luke Karundas Secondary
            School, in Nyeri, for an alumni Peer-teaching program. There, I got
            to help out with computer stuff. I got an opportunity to interact
            with computer, from doing simple typing tasks to browsing on the
            internet. I fell in love with computers, thanks to the school&apos;s
            ICT technologist who also worked as the librarian. I remember
            asking, the Librarian, he&apos;s called Amos, &quot;What is Computer
            Science?&quot; At that time the term was so new to me. He explained
            to me what Computer Science entails and from there I added it as one
            of the course that I would consider.
          </p>
          <p>
            That passion pushed me to apply for an ICT course at the University
            of Nairobi, after I could not secure Computer Science from the same
            University. Finally, I got in! Even though it wasn&apos;t exactly
            what I planned, I saw it as a chance to mix my love for engineering
            with technology.
          </p>
          <p>
            As I studied, I realized software engineering could fulfill my
            dreams of being an engineer. Even though I wasn&apos;t building
            physical things anymore, creating digital solutions felt just as
            satisfying. Learning to code was a big moment for me.
          </p>
          <p>
            In 2021 when I was in my first year at university, I started making
            simple web applications using HTML and CSS. Today I build complex
            Fullstack applications using various technologies depending on the
            needs of the problem, user specifications and system requirements.
            Programming Languages have been come native languages to me. I can
            even speak and write in various Programming languages than I can
            with the Natural Languages.
          </p>
          <p>
            Today, I commit and dedicate myself to using technology to the
            society solve various problems, to keep learning and inspiring
            others. I&apos;m glad I finally found carreer and a path to follow.
            <i
              className='fa fa-quote-right icon-story icn-right'
              aria-hidden='true'
            ></i>
          </p>
          <div className='quote-profile'>
            <div className='quote-profile-info'>
              <p>Wamae Ndiritu</p>
              <p>Software Engineer</p>
            </div>
            <div className='quote-profile-img'>
              <img src='/Assets/Images/profile-2.jpeg' alt='' />
            </div>
          </div>
        </div>
        <div className='skills mobile-skills'>
          <h5 className='h5 title-h5'>Technologies & Tools</h5>
          <p className='text-center'>
            Here are some of technologies and tools that I use to craft
            solutions.
          </p>
          <div className='row d-flex justify-content-center'>
            {skills.map((skill) => {
              const { id } = skill;
              return (
                <div className='skill' key={id}>
                  <img src={skill.img} alt={skill.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
