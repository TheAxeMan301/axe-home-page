import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './Home.scss';
import AboutPage from './About.js';
import Resume from './Resume.js';

/*
  Needs some work to get in-app single page style transitions.
  Supposed to happen with Link elements but then we don't get transitions.
*/

function Home() {
  const router = createBrowserRouter([{
    path: '/',
    element: <AboutPage />,
  }, {
    path: '/resume',
    element: <Resume />
  }])
  return (
    <div className="home">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="d-flex">
          <div class="header-name">Frank&nbsp;Amoroso</div>
        </div>
        <div class="d-flex">
          <a href="/" class="justify-content-end mx-2">
            <strong>Home</strong>
          </a>
          <a href="resume" class="justify-content-end mx-2">
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

      <RouterProvider router={router} />

    </div>
  );
}

export default Home;
