'use client'
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/react";
import BuildTextBox from "../../../public/components/TextBox/textbox";
import Link from "next/link";


export default function Home() {

    const textContentItens = [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ];

    return (
        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">
            <header className="row-span-1 h-[10vh] relative px-2 bg-Mevkgreen flex items-center space-x-5 shadow-lg">
                <menu className="flex-2 flex items-center z-10">
                    <Button>
                        <Link href="/"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>
                </menu>

                {/* Centralizar a imagem */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image src='/4.png' width={50} height={50} alt="Client Icon" className="max-w-full h-auto" />
                </div>

                <div className="flex-2 flex z-10"></div>
            </header>



            <section className="w-full h-full row-span-12 bg-black overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className="w-full h-auto flex flex-col items-center justify-center align-middle gap-6 p-4 sm:p-6 lg:p-8">
                    <Image className="w-full h-auto max-w-[90vw] md:max-w-full mb-10" src="/evitar1.png" width={1366} height={768} alt="Client Icon" />
                    <Image className="w-full h-auto max-w-[90vw] md:max-w-full mb-10" src="/evitar2.png" width={1366} height={768} alt="Client Icon" />
                </div>

                <footer className="bg-Mevkgreen w-full h-40 sm:h-52 text-center flex flex-col items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" className="max-w-full h-auto" />
                    <h1 className="drop-shadow-lg text-2xl sm:text-3xl lg:text-4xl font-thin text-NewPalet-yellow">Desafio MEVK</h1>
                </footer>
            </section>
        </main>
    );
}
