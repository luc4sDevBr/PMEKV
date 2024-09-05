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
            <header className="row-span-1 px-2 bg-Mevkgreen flex items-center justify-between space-x-4 sm:space-x-6 shadow-lg">
                <menu className="flex-1 flex">
                    <Button>
                        <Link href="/">
                            <ArrowLeft color="#dbbc65" />
                        </Link>
                    </Button>
                </menu>
                <div className="flex-1 flex justify-center">
                    <Image
                        src='/4.png'
                        width={50}
                        height={50}
                        alt="Client Icon"
                        className="max-w-full h-auto"
                    />
                </div>
                <div className="flex-1"></div>
            </header>

            {/* Main Content */}
            <section className="w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className="w-full h-auto">
                    <ListaDetox />
                </div>
                
                {/* Footer */}
                <footer className="bg-Mevkgreen w-full h-32 sm:h-52 text-center flex flex-col items-center justify-center drop-shadow-lg gap-2">
                    <Image
                        src='/4.png'
                        width={50}
                        height={50}
                        alt="Client Icon"
                        className="w-12 h-12 sm:w-20 sm:h-20"
                    />
                    <h1 className="text-2xl sm:text-4xl font-thin text-NewPalet-yellow">
                        Desafio MEVK
                    </h1>
                </footer>
            </section>
        </main>
    );
}
