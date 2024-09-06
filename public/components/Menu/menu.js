import React, { useState } from 'react';
import BuildList from '../../components/ListBox/list';
import BuildButton from '../Button/button';
import slidebar from '../Button/button';
import Image from "next/image";
import { Instagram, Facebook, MessageCircleReply } from "lucide-react"
import Link from "next/link";

const BuildMenu = ({ active, boolactive }) => {

    const closeMenu = () => {
        active(false)
    }

    return (


        <div id="SlideMenu"
            //flex flex-col justify-between
            className={!boolactive ? "hidden" : "flex flex-col justify-between bg-gradient-to-tr from-Mevkgreen via-Mevkgreen to-black absolute w-80 h-screen drop-shadow-md z-30"}>
            <header className="flex-col gap-2 my-10 w-ful h-36 bg-transparent items-center text-center flex justify-center text-2xl font-bold">
                <Image className="drop-shadow-lg" src='/4.png' width={50} height={50} alt="Client Icon" />
                <h1 className="drop-shadow-l text-3xl font-thin text-NewPalet-yellow "> Desafio MEVK </h1>
            </header>
            <BuildList />

            <footer className="w-full h-32 gap-1 bg-transparent items-center text-center flex justify-center ">
                <Link className=" transition duration-700 ease-in-out rounded-3xl shadow-lg text-center  items-center flex justify-center transform hover:-translate-y-1 hover:scale-10" href="https://www.instagram.com/drkitaro/">
                    <Instagram className="drop-shadow-lg" color="#e5e9cc" />
                    <small className=" w-auto text-default-500 text-Mevkligth truncate pl-1 ">@drkitaro</small><br></br>

                </Link>
            </footer>
        </div>


    );
};
export default BuildMenu;