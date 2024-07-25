import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

  const isAdmin = false;


    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-70 min-h-full bg-[#7a6efc]  text-whitet font-semibold text-xl">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to={"/manageclasses"}>
                      <p className="text-sm font-semibold">Admin Home</p>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to={"/dashboard/profile"}>
                      <p className="text-sm font-semibold">
                        Profile 
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/myclasses"}>
                      <p className="text-sm font-semibold">
                        My Selected Classes
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/enrolledclasses"}>
                      <p className="text-sm font-semibold">Enrolled Classes</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/enrolledclasses"}>
                      <p className="text-sm font-semibold">Payment History</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/enrolledclasses"}>
                      <p className="text-sm font-semibold">Reservation</p>
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to={"/dashboard/enrolledclasses"}>
                      <p className="text-sm font-semibold">Back to home</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/dashboard/enrolledclasses"}>
                      <p className="text-sm font-semibold">Payment History</p>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;