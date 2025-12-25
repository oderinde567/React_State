import React from "react";

const Profile = ({ user }) => {
  return (
    <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p> {/* BUG: Should be user.fullName */}
      <p>Age: {user.age}</p>
      <p>Profession: {user.profession}</p>
    </div>
  );
};

export default Profile;
