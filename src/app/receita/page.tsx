import Image from "next/image";
import { ArrowLeft } from "lucide-react"
import React from "react";
import { Button } from "@nextui-org/react";
import ListaDetox from "../../../public/components/ListaDetox/listaDetox"
import Link from "next/link";



export default function Home() {

   
    //drop-shadow-sm
    return (
        
        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">


            <header className="row-span-1 px-2 bg-Mevkgreen flex space-x-6 shadow-lg">
                <menu className="flex-1 flex ">

                    <Button>
                        <Link href="/"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>

                </menu>
                <div className="flex-4 flex justify-center"><Image src='/4.png' width={50} height={50} alt="Client Icon" /></div>
                <div className="flex-1 flex"></div>

            </header>

            <section className="w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className=" w-full h-auto ">
                    <ListaDetox/>
                </div>
                <footer className=" bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>

         
            
        </main>
    );
}
