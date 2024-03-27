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
            <h5 className='h5 title-h5'>Bio</h5>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Name:</h5>
              <h5 className='h5 bio-text'>Ndiritu Wamae</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Email:</h5>
              <h5 className='h5 bio-text'>wamaejoseph392@gmail.com</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Contact:</h5>
              <h5 className='h5 bio-text'>+254740924507</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Nationality:</h5>
              <h5 className='h5 bio-text'>Kenyan</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Age:</h5>
              <h5 className='h5 bio-text'>19 Years</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Location:</h5>
              <h5 className='h5 bio-text'>Nairobi, Kenya</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Education:</h5>
              <h5 className='h5 bio-text'>
                BEd in Information, Communication & Techology (ICT)
              </h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Role:</h5>
              <h5 className='h5 bio-text'>Student</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>Institution:</h5>
              <h5 className='h5 bio-text'>University of Nairobi</h5>
            </div>
            <div className='bio-item'>
              <h5 className='h5 bio-text bio-title'>PART Job:</h5>
              <h5 className='h5 bio-text'>FullStack Web Developer</h5>
            </div>
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
            In my early childhood, I have always dreamed of becoming an
            Engineer. When in my high school education, I always thought of
            building systems, but mostly, I would think of electrical
            Engineering systems. I participated in various Science and
            Engineering Fairs trying to explore the field and pursue my dream of
            becoming an Electrical Engineer. After seating for my KCSE back in
            2020, I graduated with a B+ and thought that I would now be able to
            pursue my dream course.
          </p>
          <p>
            Unfortunately, I realized that I had not met the cut off points to
            join any of my dream University in Kenya. I started thinking that I
            was over-ambitious, I can&apos;t pursue my dream course and become
            an engineer. Besides, I would even think of going back to high
            school and try another opportunity.
          </p>
          <br />
          <p>
            Fortunately, I was invited to an alumni Peer-teaching programme in
            my former high school, St. Luke Karundas Sec Sch. In this new
            opportunity, I spent some time with the school Librarian who
            happened to be School&apos;s ICT technologist. He would give me
            small tasks on a computer when I was not teaching my peers, and in
            the process, I would learn how to use a computer. Within no time, I
            started &apos;falling in love&apos; with Computers. I have never had
            such an opportunity to use a computer before but now I could see I
            had all the time to use the school&apos;s computers. My &apos;New
            Love&apos; for machine drove me to applying for an ICT course at the
            University of Nairobi after realizing that I had met the cut off
            points unlike the other one. At the end of my 4 months in
            peer-teaching, I got an admission letter from the University of
            Nairobi to pursue Bachelor of Education in Information,
            Communication & Technology.
          </p>
          <br />
          <p>
            Without wasting any more time, I started exploring the field bearing
            in mind that it&apos;s now my career am pursuing. I realized that I
            can still be an engineer whom I admired, but now I will not be
            building mechanical systems; hardware, but instead I will be
            building systems that live in the Internet, i.e softwares. With my
            &apos;Love&apos; for engineering, I look forward to widening my
            knowledge and skills in Software engineering... I can now read and
            write computer programs, I felt this as the greatest achievement in
            my life.
          </p>
          <br />
          <p>
            At the end of my first year in Campus, I had started building and
            deploying static web application. I&apos;m now in my 2<sup>nd</sup>{" "}
            year and have done a couple of dynamic web application projects
          </p>
          <br />
          <p>
            I have committed and dedicated myself to building systems that will
            help businesses and the society with the current technology by
            learning new things all day, all time. I look forward to be an
            inspiration to the society. Thankyou for taking time to listen me.
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
