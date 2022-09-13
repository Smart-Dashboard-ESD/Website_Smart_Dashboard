import React from "react";
import logo from "../assets/img/logoptmulti.png";
import avatar from "../assets/img/Avatar.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-white w-20 border-r lg:w-[297px] border-Neutral-LightActive">
      <Link to="/">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="mt-14" />
          <div className="ml-2 font-semibold text-Primary-Normal mt-14">
            <p className="hidden lg:block">PT. Multi Instrumentasi.</p>
          </div>
        </div>
      </Link>
      <div className="w-16 lg:w-[250px] mx-auto mt-14 border-b border-Neutral-LightActive">
        <Link to="/dashboard-user">
          <div className="flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Primary-Normal hover:bg-Primary-Normal hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 lg:ml-3 lg:mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            <span className="hidden text-base lg:block">Dashboard</span>
          </div>
        </Link>
      </div>
      <div className="hidden mt-5 ml-6 font-semibold lg:block text-Primary-Normal">
        Pembayaran
      </div>
      <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1 border-b border-Neutral-LightActive">
        <Link to="/tagihan">
          <div className="flex items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Primary-Normal hover:bg-Primary-Normal hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 lg:ml-3 lg:mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            <span className="hidden text-base lg:block">Tagihan</span>
          </div>
        </Link>
      </div>
      <div className="hidden mt-5 ml-6 font-semibold text-Primary-Normal lg:block">
        Customer Care
      </div>
      <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1">
        <Link to="/customer-care">
          <div className="flex items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Primary-Normal hover:bg-Primary-Normal hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <span className="hidden text-base lg:block">Pusat Bantuan</span>
          </div>
        </Link>
      </div>
      <div className="w-16 lg:w-[260px] mx-auto mt-36 border-t border-Neutral-LightActive">
        <Link to="/profile">
          <div className="mt-6">
            <img
              src={avatar}
              alt="Rectangle-1"
              border="0"
              className="float-left w-10 h-10 ml-3 mr-3 rounded-full"
            />
            <p className="hidden text-sm font-medium lg:block">
              Rizal Bimantoro
            </p>
            <p className="hidden text-sm font-medium text-Primary-Normal lg:block">
              rebimantoro@gmail.com
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
