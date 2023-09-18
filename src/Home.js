import './Home.css';
import headshot from './assets/headshot-circle-400x400.png';
import classicValley from './assets/classic-valley-crop.jpg';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {
  return (
    <div className="home">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="d-flex">
          <div class="header-name">Frank&nbsp;Amoroso</div>
        </div>
        <div class="d-flex">
        <a href="https://frankamoroso.com/resume"
            class="justify-content-end mx-2"
        >
            <strong>Resume</strong>
        </a>
        <a href="https://www.linkedin.com/in/frank-amoroso-b737a314"
            class="justify-content-end mx-2"
        >
            <i class="fab fa-linkedin fa-2xl nav-icon"></i>
            <strong> Linkedin</strong>
        </a>
        <a href="https://github.com/TheAxeMan301"
            class="justify-content-end mx-2"
        >
            <i class="fab fa-github fa-2xl nav-icon"></i>
            <strong> Github</strong>
        </a>
        </div>
      </div>
      </nav>

      <div class="headshot-jumbotron">
        <div class="valley-div">
          <img src={classicValley} className="valley-image" alt="Silicon Valley" />
        </div>
        <div class="headshot-div">
          <div class="headshot-image-container">
            <img src={headshot} className="headshot-image" alt="headshot" />
          </div>
          <div class="headshot-text-container">
            <div class="name-header">Frank Amoroso</div>
            <div class="name-role-header">Software Engineer</div>
          </div>
        </div>
      </div>

      <div class="container summary-container">
        <div class="row summary-section py-2">
          <div class="col-sm-8">
            <h3>Accomplished Software Professional</h3>
            <div>
              Over 15 years of software experience including a key role in developing the
              flagship product that grew a small startup into a public company and topped
              $1 billion in sales. Broad range of experience in multiple industries and roles.
              M.S. in Engineering from an elite US university.
            </div>
          </div>
          <div class="col-sm-4">
            <ul>
              <li>C++, Python, Javascript</li>
              <li>Full Stack Web Programming, EDA, Network Management</li>
              <li>M.S. Electrical Engineering</li>
            </ul>
          </div>
        </div>
        <div class="row summary-section py-2">
          <div class="col-sm-4">
            <ul>
              <li>REST API, AWS, GCP, Docker, Linux</li>
              <li>Node.js, Typescript, React, Vue</li>
              <li>Docker, microservice architecture</li>
            </ul>
          </div>
          <div class="col-sm-8">
            <h3>Extensive Technical Skills</h3>
            <div>
              Experienced software developer with especially strong skills in Python, C++
              and Javascript. Demonstrated experience with numerous languages, frameworks
              and technologies including Node.js, Typescript, SQL, React, AngularJS, Vue,
              REST APIs, Agile methodology, cloud deployment with AWS and GCP and AI guided
              development.
            </div>
          </div>
        </div>
        <div class="row summary-section">
          <div class="col-sm-1"></div>
          <div class="col-sm-8">
            <h3>Cross-Functional Leadership</h3>
            <div>
              Core software and communication skills and experience with a long record of
              success in multiple industries and technologies. Mentorship and organizational
              skills that take cross-functional teams to the next level.
            </div>
          </div>
          <div class="col-sm-3">
            <ul>
              <li>Agile development</li>
              <li>Project management</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
