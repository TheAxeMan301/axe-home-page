import './Resume.scss';
import headshot from './assets/headshot-circle-400x400.png';
// import classicValley from './assets/classic-valley-crop.jpg';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function Resume() {
  return (
    <div class="resume-page">

      <div class="sidebar">
        <div class="headshot-div">
          <div class="headshot-image-container">
            <img src={headshot} className="headshot-image" alt="headshot" />
          </div>
        </div>

        <div class="summary-section">
          <div class="summary-section-header">
            Accomplished Software Professional
          </div>
          <div class="summary-text">
            Over 15 years of software experience including a key role in developing the
            flagship product that grew a small startup into a public company and topped
            $1 billion in sales. Broad range of experience in multiple industries and roles.
            M.S. in Engineering from an elite US university.
          </div>
          <div class="summary-skills-list">
            C++, Python, Javascript,
            Full Stack Web Programming, EDA, Network Management,
            M.S. Electrical and Computer Engineering
          </div>
        </div>

        <div class="summary-section">
          <div class="summary-section-header">
            Extensive Technical Skills
          </div>
          <div class="summary-text">
            Experienced software developer with especially strong skills in Python, C++
            and Javascript. Demonstrated experience with numerous languages, frameworks,
            technologies and AI guided development.
          </div>
          <div class="summary-skills-list">
              REST API, AWS, GCP, Docker, Linux,
              Node.js, Typescript, React, Vue,
              Docker, microservice architecture
          </div>
        </div>

        <div class="summary-section">
          <div class="summary-section-header">
            Cross-Functional Leadership
          </div>
          <div class="summary-text">
            Core software and communication skills and experience with a long record of
            success in multiple industries and technologies. Mentorship and organizational
            skills that take cross-functional teams to the next level.
          </div>
          <div class="summary-skills-list">
            Agile development, Project management
          </div>
        </div>

        <div class="summary-section">
          <div class="summary-section-header education">
            Education
          </div>
          <div class="summary-text education">
            M. S. Electrical Engineering
            <div class="school-illinois">
            University of Illinois at Urbana-Champaign
            </div>
          </div>
          <div class="summary-text education">
            B. S. Electrical and Computer Engineering
            <div class="school-ohiostate">
            The Ohio State University
            </div>
          </div>
        </div>

      </div>

      <div class="left-header">
        <div class="headline-name"> Frank Amoroso </div>
        <div class="headline-role">Software Engineer</div>
        <div class="headline-contact">
          <a href="https://frankamoroso.com" class="contact-link">
            <i class="fas fa-house fa-1xl"></i>
            FrankAmoroso.com
          </a>
          <i class="fas fa-circle fa-xs circle-separator"></i>
          <a href="https://www.linkedin.com/in/frankpamoroso" class="contact-link">
            <i class="fab fa-linkedin fa-1xl"></i>
            https://www.linkedin.com/in/FrankPAmoroso
          </a>
          <i class="fas fa-circle fa-xs circle-separator"></i>
          <a href="https://github.com/TheAxeMan301" class="contact-link">
            <i class="fab fa-github fa-1xl"></i>
            https://github.com/TheAxeMan301
          </a>
        </div>
      </div>

      <div class="experience-header">
        <span class="header-words">Professional Experience</span>
      </div>
      <div class="experience-list">
        <div class="experience-entry">
          <div class="experience-org">
            Freelance Software Engineer
          </div>
          <div class="experience-location">
            Petaluma, CA
          </div>
          <div class="experience-dates">
            2022-2023
          </div>
          <ul class="experience-accomplishments">
            <li>
            Formulated game enhancements using C++, Web Assembly and SQL that
            rejuvenated gameplay.
            </li><li>
            Deployed and administered a site using AWS cloud services that brought
            together a global community.
            </li><li>
            Organized technical content and performed for charity events that have
            raised millions of dollars.
            </li>
          </ul>
        </div>

        <div class="experience-entry">
          <div class="experience-org">
            UJET
          </div>
          <div class="experience-role">
            Software Engineer
          </div>
          <div class="experience-location">
            Petaluma, CA
          </div>
          <div class="experience-dates">
            2021-2022
          </div>
          <ul class="experience-accomplishments">
            <li>
            Developed and implemented significant new features, front end changes
            and bug fixes to drive customer acquisition and satisfaction.
            </li><li>
            Collaborated on cross-functional front-end projects to coordinate
            backend API and UI modifications and enhancements.
            </li><li>
            Mentored junior engineers and interviewed engineering candidates to
            enhance organizational quality and productivity.
            </li>
          </ul>
        </div>

        <div class="experience-entry">
          <div class="experience-org">
            Ciena Corporation - Blue Planet Division
          </div>
          <div class="experience-role">
            Senior Engineer, Blue Planet Professional Services
            <br />
            Senior Engineer, Blue Planet Infrastructure
          </div>
          <div class="experience-location">
            Petaluma, CA
          </div>
          <div class="experience-dates">
            2015-2021
          </div>
          <ul class="experience-accomplishments">
            <li>
            Developed customized web applications with Docker, nginx, Ember.js, Vue,
            Node.js, Python and REST API that drove adoption of the Blue Planet framework.
            Delivered a web app microservice optimization that improved web app load
            times by 4x.
            </li><li>
            Created a development base for web app microservices with Ember.js, Docker
            and nginx to cut development time for demo web apps by over 50%.
            Collaborated directly with customer technical teams to ensure alignment,
            success and satisfaction.
            </li><li>
            Authored a streamlined service creation wizard for Blue Planet NFVO using
            Javascript and Ember.js that allowed complex network services to be created
            and customized 3x more efficiently.
            </li>
          </ul>
        </div>

        <div class="experience-entry">
          <div class="experience-org">
            Cyan Inc. (Acquired by Ciena)
          </div>
          <div class="experience-role">
            Software Engineer
          </div>
          <div class="experience-location">
            Petaluma, CA
          </div>
          <div class="experience-dates">
            2010-2015
          </div>
          <ul class="experience-accomplishments">
            <li>
            Built a cross-platform user interface using Python in Linux and Windows
            environments for the flagship EMS/NMS software that produced over a billion
            dollars in sales.
            </li><li>
            Developed new features and implemented fixes and improvements in a fast moving
            startup environment, playing a pivotal role in growing the organization into
            a public company worth $400 million.
            </li><li>
            Made technical contributions in multiple areas including user experience (UX),
            user interface (UI) and testing to scale the development organization by 10x.
            </li><li>
            Coordinated with hardware and firmware teams on the Z-Series hardware line
            to double feature development speed.
            </li><li>
            Implemented full stack Python and API improvements that improved loading times
            and scalability by 3x.
            </li>
          </ul>
        </div>

        <div class="experience-entry web-dev-hide">
          <div class="experience-org">
            Synopsys, Inc.
          </div>
          <div class="experience-role">
            R &amp; D Software Engineer, Mask Synthesis Applications
          </div>
          <div class="experience-location">
            Hillsboro, OR
          </div>
          <div class="experience-dates">
            2004-2010
          </div>
          <ul class="experience-accomplishments">
            <li>
            Developed application-level code for Proteus Optical Proximity Correction (OPC)
            that served as a base used by leading integrated circuit manufacturers.
            </li><li>
            Contributed to improvements and new features in the C and C++ code of the
            platform that improved runtimes by 20% and improved customer retention by 30%.
            </li><li>
            Participated in R&D engagements with customer technical teams, traveling
            internationally to forge closer ties and drive success at a key customer.
            </li><li>
            Leveraged a shared framework using Qt, C++ and TCL to develop an optimization
            tool that cut development time in half.
            </li><li>
            Created key tools in Perl and Python that doubled EDA tool development efficiency.
            </li><li>
            Co-authored three papers presented at SPIE Microlithography industry conferences
            and presented one personally.
            </li>
          </ul>
        </div>

        <div class="experience-entry web-dev-hide">
          <div class="experience-org">
            Agilent Technologies ASIC Products Division
            <br />
            Agilent Technologies Lightwave Division
            <br />
            Hewlett-Packard Integrated Circuits Business Division
          </div>
          <div class="experience-role">
            Intern Engineer
          </div>
        </div>

      </div>
    </div>
  );
}

export default Resume;
