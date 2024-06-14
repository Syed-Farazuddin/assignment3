import React from "react";
import logo from "../assets/logo.png";
export default function Nav() {
  return (
    <nav className="mx-auto flex justify-between items-center py-3 max-w-7xl px-6">
      <div className=" flex items-center justify-center">
        <img className="w-32" src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center font-serif gap-2 font-bold">
        <p className="text-slate-600">Dont have an account ? </p>
        <button className="hover:text-slate-900 text-slate-700 cursor-pointer hover:underline">
          Register now
        </button>
      </div>
    </nav>
  );
}
