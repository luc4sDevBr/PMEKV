'use client'
import Image from "next/image";
import { AlignJustify, X } from "lucide-react"
import { useState } from "react";
import React from "react";
//import Buildbutton from "../../public/Componentes/Button/button"
import { Button } from "@nextui-org/react";
//import BuildMenu from '../../public/Componentes/Menu/menu'
import BuildButton from '../../public/components/Button/button'
import BuildMenu from "../../public/components/Menu/menu"
import Link from "next/link";
import bn from "./../../public/bn.svg"


export default function Home() {
  //const [liked, setLiked] = useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const [slidebar, setsliderbar] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setsliderbar(!slidebar)
  };
  //drop-shadow-sm
  return (

    <main className="grid grid-rows-14 w-full h-screen overflow-hidden bg-Mevkgreen ">

      {BuildMenu && <BuildMenu active={setsliderbar} boolactive={slidebar} />}

      <header className="row-span-2 px-2 from-Mevkgreen to-black  flex space-x-5">
        <menu className="flex-2 flex z-50 ">

          <Button
            onClick={toggleCollapsed}
          >
            {collapsed ? <X color="#dbbc65" /> : <AlignJustify color="#dbbc65" />}

          </Button>

        </menu>
        <div className="flex-1 flex justify-center"><Image src='/4.png' width={50} height={50} alt="Client Icon" /></div>
        <div className="flex-2 flex"></div>

      </header>

      <section className={!slidebar ? "w-full h-full row-span-12 bg-zinc-950 overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 " : "w-full h-full row-span-12  bg-black overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 blur-sm"}>
        
          <div className=" flex-3 w-full h-full flex items-center justify-center bg-black ">
              <Image src='/Home2.png' width={3000} height={300} alt="Client Icon" className=" w-full h-full" /> 
          </div>
      

        <div className="w-full h-auto bg-transparent flex flex-col items-center">
          <div className="flex flex-col items-center  gap-20 w-full h-auto  pt-20 ">
            <Link className=" transition duration-700 ease-in-out rounded-3xl w-5/6 h-80  bg-gradient-to-tr from-Mevkgreen  to-white shadow-lg text-center flex justify-evenly transform hover:-translate-y-1 hover:scale-105" href={"/inicio"}>
              <Button className="rounded-3xl w-full h-80 bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-white  text-center flex items-center justify-between p-0 m-0">
                <h1 className="drop-shadow-lg text-6xl font-semibold  text-white w-full"> Alimentação saudável </h1>
                <Image className=" rounded-s-full w-3/5 h-full  text-white text-center flex items-center justify-center" src={"/card1.jpg"} width={1000} height={500} alt="img" />
              </Button>
            </Link>
            <Link className="transition duration-700 ease-in-out rounded-3xl w-5/6 h-80  bg-gradient-to-tr from-Mevkgreen  to-white shadow-lg text-center flex justify-evenly transform hover:-translate-y-1 hover:scale-105" href={"/tabela"}>
              <Button className="rounded-3xl w-full h-80 bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-white  text-center flex items-center justify-between p-0 m-0">
                <h1 className="drop-shadow-lg text-6xl font-semibold text-white w-full"> Restrições durante o desafio. </h1>
                <Image className=" rounded-s-full w-3/5 h-full  text-white text-center flex items-center justify-center" src={"/card1.jpg"} width={1000} height={500} alt="img" />
              </Button>
            </Link>
            <Link className="transition duration-700 ease-in-out rounded-3xl w-5/6 h-80  bg-gradient-to-tr from-Mevkgreen  to-white shadow-lg text-center flex justify-evenly transform hover:-translate-y-1 hover:scale-105" href={"/cards"}>
              <Button className="rounded-3xl w-full h-80 bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-white  text-center flex items-center justify-between p-0 m-0">
                <h1 className="drop-shadow-lg text-6xl font-semibold text-white w-full"> Receita detóx </h1>
                <Image className=" rounded-s-full w-3/5 h-full  text-white text-center flex items-center justify-center" src={"/card1.jpg"} width={1000} height={500} alt="img" />
              </Button>
            </Link>
            <Link className="transition duration-700 ease-in-out rounded-3xl w-5/6 h-80  bg-gradient-to-tr from-Mevkgreen  to-white shadow-lg text-center flex justify-evenly transform hover:-translate-y-1 hover:scale-105" href={"/cards"}>
              <Button className="rounded-3xl w-full h-80 bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-white  text-center flex items-center justify-between p-0 m-0">
                <h1 className="drop-shadow-lg text-6xl font-semibold text-white w-full"> Fórmulas de manipulados </h1>
                <Image className=" rounded-s-full w-3/5 h-full  text-white text-center flex items-center justify-center" src={"/card1.jpg"} width={1000} height={500} alt="img" />
              </Button>
            </Link>
            <Link className="transition duration-700 ease-in-out rounded-3xl w-5/6 h-80  bg-gradient-to-tr from-Mevkgreen  to-white shadow-lg text-center flex justify-evenly transform hover:-translate-y-1 hover:scale-105" href={"/cards"}>
              <Button className="rounded-3xl w-full h-80 bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-white  text-center flex items-center justify-between p-0 m-0">
                <h1 className="drop-shadow-lg text-6xl font-semibold text-white w-full"> Exercite-se </h1>
                <Image className=" rounded-s-full w-3/5 h-full  text-white text-center flex items-center justify-center" src={"/card1.jpg"} width={1000} height={500} alt="img" />
              </Button>
            </Link>


          </div>

          <footer className=" bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg mt-20 gap-2">
            <Image src='/4.png' width={70} height={70} alt="Client Icon" />
            <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
          </footer>
        </div>
      </section>


    </main>
  );
}
