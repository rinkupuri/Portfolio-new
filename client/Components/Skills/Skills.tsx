import React from "react";
import { Card } from "../ui/card";

const Skills = () => {
  const skills = [
    "React",
    "Next Js",
    "Node Js",
    "Nest js",
    "RTK Querry",
    "Typescript",
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-11/12 justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-flow-row grid-cols-3 gap-4 my-10 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-9">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="flex w-[150px] h-[150px] overflow-hidden rounded-full flex-col items-center"
            >
              <img
                className="w-[150px] h-[150px] object-contain"
                src={skill}
                alt=""
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
