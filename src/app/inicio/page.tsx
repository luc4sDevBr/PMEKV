'use client'
import Image from "next/image";
import { ArrowLeft } from "lucide-react"
import React from "react";
import { Button } from "@nextui-org/react";
import BuildTextBox from "../../../public/components/TextBox/textbox"
import Link from "next/link";




export default function Home() {
    //const [liked, setLiked] = useState(false);
    const [collapsed, setCollapsed] = React.useState(false);
    const [slidebar, setsliderbar] = React.useState(false);

    const textContentItens = [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        ". It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
    ]
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        setsliderbar(!slidebar)
    };
    //drop-shadow-sm
    return (

        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">


            <header className="row-span-1 px-2 bg-Mevkgreen  flex space-x-5 ">
                <menu className="flex-2 flex ">

                    <Button>
                        <Link href="/"><ArrowLeft color="#ffffff" /></Link>
                    </Button>

                </menu>
                <div className="flex-1 flex justify-center"><Image src='/cat.png' width={50} height={50} alt="Client Icon" /></div>
                <div className="flex-2 flex"></div>

            </header>

            <section className="w-full h-full row-span-12 bg-neutral-800 overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className=" w-full h-auto ">
                    <Image className=" w-full h-niceVh rounded-b-nice drop-shadow-lg" src="/cat-banner.jpg" width={500} height={500} alt="Client Icon" />
                </div>

                <div className="w-full h-auto bg-slate-200 flex flex-col items-center gap-10">
                    <BuildTextBox
                        content=
                        {textContentItens}
                        titleONTENT=
                        {"Why do we use it?"} />
                </div>
            </section>
        </main>
    );
}
