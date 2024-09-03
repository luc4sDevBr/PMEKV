'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import BuildCard from "../../../public/components/Cards/card";


export default function Home() {

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

            <section className="w-full h-full row-span-1 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className="p-10 w-auto h-auto grid grid-cols-2 items-center gap-10">
                    <Link className="" href={`/cards`}>
                        <div key={1}>
                            <BuildCard
                                videoTitle={"Exercite-se em casa!"}
                                videoDescription={"Serie de Videos para malhar em casa "}
                                tumb={'/casa.jpg'}
                                duration={"00:00"}
                            />
                        </div>
                    </Link>

                    <Link className="" href={`/cards`}>
                        <div key={1}>
                            <BuildCard
                                videoTitle={"Exercite-se na academia!"}
                                videoDescription={"Serie de videos com execuções corretas! "}
                                tumb={'/gym.jpg'}
                                duration={"00:00"}
                            />
                        </div>
                    </Link>
                </div>
                <div className="w-full h-auto">{/* Outro conteúdo aqui */}</div>
                <footer className=" bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>

        </main>
    );
}
