import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/react";
import ListaDetox from "../../../public/components/ListaDetox/listaDetox";
import Link from "next/link";

export default function Home() {
    return (
        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">
            {/* Header */}
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

            {/* Main Content */}
            <section className="w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className="w-full h-auto">
                    <ListaDetox />
                </div>
                
                {/* Footer */}
                <footer className="bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>
        </main>
    );
}
