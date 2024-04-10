import React from "react";
import { Link } from "react-router-dom";
import programmer from "../assets/programmer.webp";
import ProfileCard from "../Components/ProfileCard";
function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center mt-5">PROJECT FAIR</h3>
          <p style={{ textAlign: "justify" }} className="m-5">
            Project management is a process that allows project managers to
            plan, execute, track and complete projects with the help of a
            project team. To do so, they must use project management principles,
            skills, methodologies and tools to lead team members through each of
            the project management steps which are known as the project
            lifecycle. However, project management can’t be defined in one
            paragraph. In this guide, we’ll cover the basic concepts you need to
            know to understand what project management is, the stages of the
            project management process, different types of project management
            approaches and the tools you can use for managing projects.
          </p>
          <div className="text-center">
            <Link to={"/login"}>
              <button className="btn btn-dark">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center mt-5 ">
          <img src={programmer} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center m-5">
          <h1 className="text">Explore Our Project</h1>
        </div>
        <div className="col-12" style={{ height: "500px" }}>
          <marquee width="100%" direction="left" height="350px">
            <div>
              <ProfileCard />
            </div>
          </marquee>
        </div>
      </div>
      <div className="row">
        <h1 className="text-center mb-3">Our Services</h1>
        <div className="col-lg-4">
          <div className="card shadow p-5 m-5">
            <h3 className="text-center mb-4">Web Designing</h3>
            <p style={{ textAlign: "justify" }}>
              Web designing is the process of planning, conceptualizing, and
              implementing the plan for designing a website in a way that is
              functional and offers a good user experience. User experience is
              central to the web designing process. Websites have an array of
              elements presented in ways that make them easy to navigate.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow p-5 m-5">
            <h3 className="text-center mb-3">Single Page Application</h3>
            <p style={{ textAlign: "justify" }}>
              A single-page application is a web application or website that
              interacts with the user by dynamically rewriting the current web
              page with new data from the web server, instead of the default
              method of a web browser loading entire new pages.Facebook, Google
              Maps, Gmail, Twitter, Google Drive, or even GitHub.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow p-5 m-5">
            <h3 className="text-center mb-4">Backend Services</h3>
            <p style={{ textAlign: "justify" }}>
              A backend service defines how Cloud Load Balancing distributes
              traffic. The backend service configuration contains a set of
              values, such as the protocol used to connect to backends, various
              distribution etc.BaaS is a third-party service enabling you to
              create a user-friendly application without fretting about the
              back-end.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
