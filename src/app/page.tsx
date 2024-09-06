'use client'
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { Button } from "@nextui-org/react";
import BuildMenu from "../../public/components/Menu/menu";
import Link from "next/link";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [slidebar, setSliderbar] = useState(false);
  const [imageSrc, setImageSrc] = useState('/Home2.png');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setSliderbar(!slidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('/HomeMB.png');  // Imagem para dispositivos móveis
      } else {
        setImageSrc('/Home2.png');  // Imagem para telas maiores
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeSidebarOnOutsideClick = (e: React.MouseEvent) => {
    // Verifica se o clique foi fora do sidebar
    if (e.target === e.currentTarget) {
      setSliderbar(false);
      setCollapsed(false);
    }
  };

  return (
    <main className="grid grid-rows-14 w-full h-screen overflow-hidden bg-Mevkgreen">
      {/* Sidebar */}
      {slidebar && (
        <div
          onClick={closeSidebarOnOutsideClick}
          className="fixed inset-0 z-40"
        >
          <div className="w-[250px] h-full bg-white z-40">
            {BuildMenu && <BuildMenu active={setSliderbar} boolactive={slidebar} />}
          </div>
        </div>
      )}

      <header className="row-span-1 h-[10vh] relative px-2 bg-Mevkgreen flex items-center space-x-5 shadow-lg z-30">
        <menu className="flex-2 flex items-center z-50">
          <Button onClick={toggleCollapsed}>
            {collapsed ? <X color="#dbbc65" /> : <AlignJustify color="#dbbc65" />}
          </Button>
        </menu>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image src='/4.png' width={50} height={50} alt="Client Icon" />
        </div>
        <div className="flex-2 flex z-30"></div>
      </header>

      <section className={`${!slidebar ? "w-full h-full row-span-12 bg-zinc-950 overflow-auto" : "w-full h-full row-span-12 bg-black overflow-auto blur-sm pointer-events-none"} scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200`}>
        <div className="flex w-auto h-auto items-center justify-center bg-black">
          <Image src={imageSrc} width={1366} height={768} alt="Client Icon" className="w-full h-full max-w-screen-xl max-h-[100vh]" />
        </div>

        <div className="flex w-full h-6 bg-black"></div>

        <div className="w-full h-auto bg-transparent flex flex-col items-center">
          {/* Cards section */}
          <div className="flex flex-col items-center gap-10 md:gap-20 w-full h-auto pt-10 md:pt-20">
            {/* Cards */}
            <Link href={"/inicio"} className="transition duration-700 ease-in-out rounded-3xl w-11/12 md:w-5/6 h-40 md:h-80 min-w-[300px] max-w-[1200px] text-center flex justify-evenly transform hover:-translate-y-1 hover:scale-105">
              <Button className="rounded-3xl w-full h-full bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-white text-center flex items-center justify-between p-0 m-0">
                <h1 className="drop-shadow-lg text-3xl md:text-6xl font-semibold text-white w-full">Alimentação saudável</h1>
                <Image className="rounded-s-full w-2/5 md:w-3/5 h-full max-h-[240px] md:max-h-[320px]" src={"/card1.jpg"} width={1000} height={500} alt="img" />
              </Button>
            </Link>
            {/* Other content */}
          </div>

          <footer className="bg-Mevkgreen w-full h-36 md:h-52 text-center flex flex-col items-center justify-center drop-shadow-lg mt-10 md:mt-20 gap-2">
            <Image src='/4.png' width={70} height={70} alt="Client Icon" />
            <h1 className="drop-shadow-lg text-3xl md:text-4xl font-thin text-NewPalet-yellow">Desafio MEVK</h1>
          </footer>
        </div>
      </section>
    </main>
  );
}
