import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './portindex.css';

const App = () => {
  return (
    <>
      {/* Nav */}
      <nav className="navbar navbar-expand-lg bg-primary navbar-primary py-3">
        <div className="container">
          <a href="https://jackiewilson.netlify.app" className="navbar-brand text-light">
            Jackie Wilson
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="https://jackiewilson.netlify.app" className="nav-link text-light">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="aboutjackie.html" className="nav-link text-light">
                  About Jackie
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Learn More */}
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justisfy-content-between">
            <div className="col-md">
              <img
                src="Graduation-Handshake.JPG"
                className="img-fluid w-65 d-flex justify-content-bewtween d-none d-lg-block"
                alt=""
              />
            </div>
            <div className="col-md p-5">
              <h2>
                <span className="text-primary">Education.</span>
              </h2>
              <p className="lead text-dark" style={{ fontStyle: 'italic' }}>
                Devos Graduate School of Management, Master of Business Administration (MBA), Aug. 2022 - May 2023
              </p>
              <p className="lead">
                Current GPA: 3.85, Fieldwork: RouteOne LLC & Northwood Residence Life
              </p>
              <hr className="solid" />
              <p className="lead text-dark" style={{ fontStyle: 'italic' }}>
                Northwood University, Bachelor of Business Administration (BBA), Aug. 2018 - May 2022
              </p>
              <p className="lead">
                Tau Kappa Epsilon Fraternity: Member (2018-2021), Rush Chair (2019-2020) | Interfraternity Council: Greek Week Chair
                (2018-2019), Public Relations Officer (2019-2020) | Collegiate DECA: Member (2018-2022) | Orientation Leader (2019) |
                Team Epicor NUIAS Member (2021)
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr />
      <br />

      {/* Projects */}
      <section id="projects" className="p-5">
        <div className="container text-center">
          <h2 className="text-primary">
            <span>Projects</span>.
          </h2>
          <div className="row align-items-center justify-content-between text-center">
            <div className="col-md text-right">
              <a href="https://jackiewilson.pythonanywhere              .com" className="text-primary">
                <h3>Stock Market Analysis</h3>
              </a>
              <p className="lead">
                A Python program that analyzes stock market data from multiple sources, providing users with valuable
                insights into the financial markets.
              </p>
            </div>

            <div className="col-md text-left">
              <a href="https://tke-northwood.github.io" className="text-primary">
                <h3>Tau Kappa Epsilon Fraternity Website</h3>
              </a>
              <p className="lead">
                Developed and maintained the website for the Tau Kappa Epsilon chapter at Northwood University,
                providing information about the fraternity's values, members, and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr />
      <br />

      {/* Contact */}
      <section id="contact" className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2>Contact Information</h2>
              <ul className="list-unstyled">
                <li>Phone: (555) 123-4567</li>
                <li>Email: jackiewilson@example.com</li>
                <li>LinkedIn: linkedin.com/in/jackiewilson</li>
              </ul>
            </div>

            <div className="col-md">
              <h2>Contact Form</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-5 bg-primary text-white text-center">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Jackie Wilson. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;

