import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import axios from "axios";

export default function BuildCard({videoTitle, videoDescription, tumb, duration}) {

    //drop-shadow-sm
    return (
    <Card className="transition duration-700 ease-in-out py-4 bg-stone-50 w-auto h-auto drop-shadow-lg rounded-xl transform hover:-translate-y-1 hover:scale-110">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start bg-slate-100 text-slate-500 border shadow-md">
        <p className="w-full text-tiny uppercase font-bold text-slate-500 truncate">{videoTitle}</p>
        <h4 className="font-bold text-large text-slate-500">{duration+" min"}</h4>
        <small className=" w-full text-default-500 text-slate-500 truncate ">{videoDescription}</small>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex items-center w-full">
        <img className=" w-full h-full" src={tumb} width={500} height={500} alt="Client Icon" />
      </CardBody>
    </Card>
  );
}