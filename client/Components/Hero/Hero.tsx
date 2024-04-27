import React from "react";
import Users from "../Svgs/Users";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full  md:h-[calc(100vh_-_60px)] flex justify-center">
      <div className="flex md:flex-row-reverse w-full flex-col  h-full  items-center">
        <div className="flex w-full justify-center items-center  md:flex-[1]">
          <div className="flex w-9/12 h-9/12">
            <Users />
          </div>
        </div>
        <div className="flex w-full justify-center items-center  md:flex-[1]">
          <div className="flex flex-col justify-center items-center w-8/12 gap-2">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] xl:text-[40px]  font-bold ">
              Hi I'm Rinku
            </h1>
            <p>
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect
              my commitment to excellence
            </p>
            <div className="flex w-full justify-between">
              <div className="flex w-8/12 mt-2 justify-evenly items-center">
                <Button className="ml-4">
                  <Link href={"/contact"}> Contact Me</Link>
                </Button>
                <Button className="ml-4" variant={"outline"}>
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
