import React from "react";
import ProfileCard from "../Components/ProfileCard";
function Projects() {
  return (
    <div>
      <h2 className="text-center m-4">All PROJECTS</h2>
      <input
        type="text"
        style={{ width: "700px", marginLeft: "600px" }}
        placeholder="Search By Technology"
        className="form-control mx-auto m-5"
      />
      <div className="row">
        <div className="col m-5">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
