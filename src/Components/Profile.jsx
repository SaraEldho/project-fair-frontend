import React from "react";
import Swal from "sweetalert2";

function Profile() {
  const updateUser = () => {
    Swal.fire({
      title: "Success",
      text: "User Details Updated",
      icon: "success",
      confirmButtonText: "Back",
    });
  };
  return (
    <div>
      <div className="text-center">
        <h3 className="text-center mt-5">My Profile</h3>
        <label>
          <input type="file" style={{ display: "none" }} />
          <img
            src="https://cdn3.iconfinder.com/data/icons/user-group-black/100/user-upload-512.png"
            height={"150px"}
          />
        </label>
        <div className="mx-5">
          <input type="text" placeholder="Name" className="form-control mb-2" />
          <input
            type="text"
            placeholder="GitHub"
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Live Link"
            className="form-control mb-2"
          />
          <div className="text-center">
            <button className="p-2 m-3 btn btn-dark " onClick={updateUser}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
