'use client'
import Image from "next/image";
import { ArrowLeft } from "lucide-react"
import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import YouTube from "react-youtube";
import axios from "axios";
import { Interface } from "readline";

interface props {
    params: { videoid: string }
}


export default function Home({ params }: props) {
    //const [liked, setLiked] = useState(false);
    const [iframeLoaded, setIframeLoaded] = React.useState(false);
    const [videoTitle, setVideoTitle] = React.useState("");
    const [videoDescription, setvideoDescription] = React.useState("");
    const [videoDuration, setVideoDutation] = React.useState("");
    const youtubePlayerRef = useRef(null);


    const formatDuration = (duration: any) => {
        // Função para formatar a duração em formato 00:00:00
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = parseInt(match[1]) || 0;
        const minutes = parseInt(match[2]) || 0;
        const seconds = parseInt(match[3]) || 0;

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const onReady = (event: { target: any; }) => {
        // Acessar o iframe gerado pelo componente YouTube
        const player = event.target;
        const iframe = player.getIframe();

        // Aplicar estilos diretamente ao iframe
        if (iframe) {
            iframe.style.width = "100%"; // Define a largura do iframe como 100%
            iframe.style.height = "70vh"; // Define a altura do iframe como 100%
            iframe.style.borderRadius = "12px"; // Define bordas arredondadas
            iframe.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"; // Define efeito de sombra
            setIframeLoaded(true);
        }

        // Obter o ID do vídeo
        const videoId = player.getVideoData().video_id;

        // Fazer uma solicitação HTTP para a API do YouTube para obter informações do vídeo
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.videoid}&part=snippet,contentDetails&key=AIzaSyBSdtLrgAkVPotIjYnBGhyz3xWpFoj6dbc`)
            .then((response) => {
                if (response.data.items && response.data.items.length > 0) {
                    const title = response.data.items[0].snippet.title;
                    const description = response.data.items[0].snippet.description;
                    const duration = formatDuration(response.data.items[0].contentDetails.duration);

                    setVideoDutation(duration)
                    setvideoDescription(description)
                    setVideoTitle(title);
                }
            })
            .catch((error) => {
                console.error("Erro ao obter informações do vídeo:", error);
            });
    }

    //drop-shadow-sm
    return (

        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">


            <header className="row-span-1 px-2 bg-Mevkgreen flex space-x-6 shadow-lg">
                <menu className="flex-1 flex ">

                    <Button>
                        <Link href="/exercicios"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>

                </menu>
                <div className="flex-4 flex justify-center"><Image src='/4.png' width={50} height={50} alt="Client Icon" /></div>
                <div className="flex-1 flex"></div>

            </header>

            <section className="w-full h-full row-span-12  bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div id="frame" className={iframeLoaded ? "mt-10 mb-10 w-full h-auto bg-Mevk-darkgreen flex flex-col items-center gap-10" : "hidden"}>

                    <div className="youtube-container w-3/5 h-full rounded-lg" >
                        <YouTube className=" " videoId={params.videoid} onReady={onReady} />

                        <div className="pb-0 pt-2 px-4 flex-col items-start bg-Mevkgreen text-slate-500 shadow-md my-5 p-5 flex">
                            <p className="text-tiny uppercase font-bold text-Mevkgolden">{videoTitle}</p>
                            <h4 className="font-bold text-large text-Mevkgolden">{videoDuration + " min"}</h4>
                            <small className="text-default-500 text-Mevkligth p-5 text-left">{videoDescription}</small>

                        </div>
                    </div>

                </div>
                <div className=" w-full ">

                </div>

                <footer className=" bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>
        </main>
    );
    //style={{ display: iframeLoaded ? "block" : "none" }

}

