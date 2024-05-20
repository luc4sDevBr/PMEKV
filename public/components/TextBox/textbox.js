import React from "react";
export default function BuildTextBox({ content, titleONTENT }) {
    return (
        <div className=" bg-neutral-800 flex flex-col items-center  gap-5 w-full h-auto  p-16">
            <div className="flex-col items-center w-full">
                <h1 className="text-center text-5xl p-4 rounded-3xl bg-gradient-to-tr from-Mevkgolden via-yellow-200 to-yellow-900 opacity-75 text-me font-semibold shadow-md text-Mevkgreen">
                    {titleONTENT}
                </h1>
            </div>

            {content.map((item, index) => (
                <span key={index} className="text-Mevkligth  text-justify text-2xl">
                    {item}
                </span>
            ))}
            
        </div>
    )
};

