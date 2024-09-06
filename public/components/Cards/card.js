import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function BuildCard({ videoTitle, videoDescription, tumb, duration }) {
  return (
    <Card className="transition duration-500 ease-in-out py-4 bg-Mevkgreen w-full md:w-auto h-auto drop-shadow-lg rounded-xl transform hover:-translate-y-1 hover:scale-105">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start bg-Mevk-darkgreen text-white">
        <p className="w-full text-tiny uppercase font-bold text-Mevkgolden words-break">
          {videoTitle}
        </p>
        <h4 className="font-bold text-large text-Mevkgolden">{duration + " min"}</h4>
        <small className="w-full text-default-500 text-Mevkgolden truncate">
          {videoDescription}
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex items-center w-full">
        <img className="w-full h-auto object-cover rounded-xl" src={tumb} alt="Client Icon" />
      </CardBody>
    </Card>
  );
}
