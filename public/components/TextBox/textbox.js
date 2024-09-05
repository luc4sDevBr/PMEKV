import React from "react";

export default function BuildTextBox({ content, titleONTENT }) {
    // Function to convert \n to <br>
    const formatContent = (text) => {
        return text.replace(/\n/g, ' <br><br>');
    };

    return (
        <div className="bg-Mevk-darkgreen flex flex-col items-center gap-5 w-full h-auto p-8 sm:p-12 lg:p-16">
            <div className="flex-col items-center w-full">
                <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl rounded-3xl bg-gradient-to-tr from-Mevkgolden via-yellow-200 to-yellow-900 opacity-75 font-semibold shadow-md text-Mevk-darkgreen m-4 sm:m-6 lg:m-7 p-4 sm:p-6 lg:p-7">
                    {titleONTENT}
                </h1>
            </div>

            {content.map((item, index) => (
                <span
                    key={index}
                    className="text-Mevkligth text-left  text-lg sm:text-xl lg:text-2xl p-2"
                    dangerouslySetInnerHTML={{ __html: formatContent(item) }}
                />
            ))}
        </div>
    );
}
