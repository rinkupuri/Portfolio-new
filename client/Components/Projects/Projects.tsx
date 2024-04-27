import React from "react";
import { Card, CardContent } from "../ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dr",
      description: "Inflammatory polyneuropathy, unspecified",
      languages: "Armenian",
      type: "image/tiff",
    },
    {
      id: 2,
      title: "Honorable",
      description:
        "Extrn constrict of abd, low back, pelvis and extrn genitals",
      languages: "Fijian",
      type: "application/x-msexcel",
    },
    {
      id: 3,
      title: "Mr",
      description: "Corrosions of other and unspecified internal organs",
      languages: "Hindi",
      type: "audio/mpeg3",
    },
    {
      id: 4,
      title: "Mrs",
      description: "Open bite of right middle finger w damage to nail, subs",
      languages: "Amharic",
      type: "application/pdf",
    },
    {
      id: 5,
      title: "Ms",
      description: "Unsp disorder of synovium and tendon, unsp ankle and foot",
      languages: "Chinese",
      type: "application/powerpoint",
    },
    {
      id: 6,
      title: "Dr",
      description: "Mtrcy passenger injured in clsn w pedl cyc nontraf, subs",
      languages: "Malagasy",
      type: "application/x-mspowerpoint",
    },
    {
      id: 7,
      title: "Dr",
      description:
        "Person outside 3-whl mv injured in clsn w 2/3-whl mv in traf",
      languages: "Swati",
      type: "text/plain",
    },
    {
      id: 8,
      title: "Ms",
      description: "Subluxation of left acromioclavicular joint, subs encntr",
      languages: "German",
      type: "application/x-msexcel",
    },
    {
      id: 9,
      title: "Ms",
      description:
        "Twin pregnancy, monochorionic/monoamniotic, first trimester",
      languages: "Persian",
      type: "video/mpeg",
    },
    {
      id: 10,
      title: "Mr",
      description: "Obst due to fb acc left in body fol infusn/transfusn, subs",
      languages: "Finnish",
      type: "application/msword",
    },
  ];
  return (
    <div className="w-full mt-10 flex justify-center ">
      <div className="flex justify-center items-center flex-col w-11/12">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 my-4 ">
          {projects.map((value, index) => (
            <Card key={index} className="min-w-40 overflow-hidden p-0 m-0">
              <CardContent className="w-full  relative p-0 m-0">
                <img
                  className=" w-full max-h-60"
                  src="https://becodemy.s3.ap-south-1.amazonaws.com/1687266540621-TMECA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUXELFSIASXAJICJO%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T092809Z&X-Amz-Expires=300&X-Amz-Signature=7555246e9dce88b43bd0c1c74133ce803305ac044508c8f91cb727e5c101a4c8&X-Amz-SignedHeaders=host&x-id=GetObject"
                />
                <div className="flex p-3 flex-col">
                  <h1 className="font-[600]">{value.title}</h1>
                  <p>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
