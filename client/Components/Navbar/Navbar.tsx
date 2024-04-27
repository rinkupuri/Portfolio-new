import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full h-[70px] justify-center items-center">
        <div className="flex w-11/12 justify-between items-center ">
          <div className="flex justify-start items-center ">
            <div className="flex  rounded-md justify-center items-center pl-1 bg-black">
              <span className="text-center text-white  p-1">RP</span>
              <span className="text-center p-1 m-[2px] bg-white rounded-md">
                .dev
              </span>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <div className=" hidden xl:flex w-full justify-center gap-3 items-center">
              <span className="text-center p-2">
                <Link href={"/"}>Home</Link>
              </span>
              <span className="text-center p-2">
                <Link href={"/about"}>About</Link>
              </span>
              <span className="text-center p-2">
                <Link href={"/contact"}>Contact</Link>
              </span>
            </div>
          </div>
          <div className="flex justify-end items-center h-full">
            <div className="xl:flex hidden justify-center items-center gap-4">
              <Avatar className="cursor-pointer">
                <AvatarFallback>RP</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex cursor-pointer xl:hidden flex-col w-[60px] justify-center items-center gap-[6px]">
              <span className="w-8 h-1 bg-black rounded-full"></span>
              <span className="w-8 h-1 bg-black rounded-full"></span>
              <span className="w-8 h-1 bg-black rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
