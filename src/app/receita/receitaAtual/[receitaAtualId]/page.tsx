'use client'

import { useState } from 'react'
import { Link, ArrowLeft } from 'lucide-react';
import { Button } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/radio";
import Image from "next/image";
import { users } from '../../../../../public/components/ListaDetox/data';

interface props{
    params:{receitaAtualId:number}
}

const reviews = { href: '#', average: 4, totalCount: 117 }

export default function Example({params}:props) {


    return (
        <main className="grid grid-rows-14 w-full h-screen overflow-hidden" >
            <header className="row-span-1 px-2 bg-Mevkgreen flex space-x-6 shadow-lg">
                <menu className="flex-1 flex ">

                    <Button>
                        <Link href="/receita"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>

                </menu>
                <div className="flex-4 flex justify-center"><Image src='/4.png' width={50} height={50} alt="Client Icon" /></div>
                <div className="flex-1 flex"></div>

            </header>
            <section className="w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className="pt-6">

                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                alt={users[params.receitaAtualId].images[0].alt}
                                src={users[params.receitaAtualId].images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-Mevkgolden sm:text-3xl">{users[params.receitaAtualId].name}</h1>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pr-8">
                            <div>
                                <h3 className=" text-Mevkgolden font-semibold">Propriedades</h3>

                                <div className="space-y-6">
                                    <span className="text-left text-sm text-Mevkligth">{users[params.receitaAtualId].description}</span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-Mevkgolden">Igredinetes</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {users[params.receitaAtualId].highlights.map((highlight) => (
                                            <li key={highlight} className="text-Mevkgolden">
                                                <p className="text-Mevkligth">{highlight}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-Mevkgolden">Modo de prepáro</h2>
                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-Mevkligth">{users[params.receitaAtualId].details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className=" bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>
          
        </main>


    )
}