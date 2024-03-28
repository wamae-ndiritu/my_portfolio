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
          <div className='skills'>
            <h5 className='h5 title-h5'>Tech Skills</h5>
            <div className='row d-flex justify-content-center'>
              {skills.map((skill) => {
                const { id } = skill;
                return (
                  <div
                    className='col-lg-4 col-md-4 col-sm-6 col-6 skill-col'
                    key={id}
                  >
                    <SkillCard {...skill} className='test-skill' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='about-story'>
          <h5 className='h5'>My Story</h5>
          <p>
            <i
              className='fa fa-quote-left icon-story icn-left'
              aria-hidden='true'
            ></i>
            In my early years, I always wanted to be an engineer. In high
            school, I was really into making things, especially electrical
            stuff. I joined Science and Engineering Fairs to learn more and
            chase my dream of being an Electrical Engineer.
          </p>
          <p>
            After finishing high school with a good grade in 2020, I thought I
            could finally study what I wanted. But then I found out my grades
            weren&apos;t enough to get into the universities I wanted in Kenya.
            I started to doubt if my dream was too big or even possible.
          </p>
          <p>
            I went back to my old high school, St. Luke Karundas Secondary
            School, for an alumni Peer-teaching program. There, I got to help
            out with computer stuff. I fell in love with computers, thanks to
            the school&apos;s ICT technologist who also worked as the librarian.
          </p>
          <p>
            That passion pushed me to apply for an ICT course at the University
            of Nairobi. Finally, I got in! Even though it wasn&apos;t exactly
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
            I&apos;m dedicated to using technology to help society, and I want
            to keep learning and inspiring others. Thanks for listening to my
            story of how I found my path in technology.
            <i
              className='fa fa-quote-right icon-story icn-right'
              aria-hidden='true'
            ></i>
          </p>
          <div className='quote-profile'>
            <div className='quote-profile-info'>
              <p>Ndiritu Wamae</p>
              <p>Web Developer & Student</p>
            </div>
            <div className='quote-profile-img'>
              <img src='/Assets/Images/profile-2.jpeg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
