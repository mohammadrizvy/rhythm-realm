import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="stat justify-center items-center">
          <div className="stat-figure text-secondary">
         
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            
          />
        </div>

        <div className="stat flex flex-row-reverse items-center ">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </div>
          </div>
          <div className=" text-secondary">{user.displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
