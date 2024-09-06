'use client'
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import YouTube from "react-youtube";
import axios from "axios";

interface Props {
    params: { videoid: string }
}

export default function Home({ params }: Props) {
    const [iframeLoaded, setIframeLoaded] = React.useState(false);
    const [videoTitle, setVideoTitle] = React.useState("");
    const [videoDescription, setvideoDescription] = React.useState("");
    const [videoDuration, setVideoDuration] = React.useState("");
    const youtubePlayerRef = useRef(null);

    const formatDuration = (duration: string) => {
        const match:any = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = parseInt(match?.[1]) || 0;
        const minutes = parseInt(match?.[2]) || 0;
        const seconds = parseInt(match?.[3]) || 0;

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const onReady = (event: { target: any }) => {
        const player = event.target;
        const iframe = player.getIframe();

        if (iframe) {
            iframe.style.width = "100%";
            iframe.style.height = "70vh";
            iframe.style.borderRadius = "12px";
            iframe.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            setIframeLoaded(true);
        }

        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.videoid}&part=snippet,contentDetails&key=AIzaSyBSdtLrgAkVPotIjYnBGhyz3xWpFoj6dbc`)
            .then((response) => {
                if (response.data.items && response.data.items.length > 0) {
                    const video = response.data.items[0];
                    const title = video.snippet.title;
                    const description = video.snippet.description;
                    const duration = formatDuration(video.contentDetails.duration);

                    setVideoDuration(duration);
                    setvideoDescription(description);
                    setVideoTitle(title);
                }
            })
            .catch((error) => {
                console.error("Erro ao obter informações do vídeo:", error);
            });
    };

    return (
        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">

            {/* Header */}
            <header className="row-span-1 px-2 bg-Mevkgreen flex space-x-6 shadow-lg">
                <menu className="flex-1 flex">
                    <Button>
                        <Link href="/cards"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>
                </menu>
                <div className="flex-4 flex justify-center">
                    <Image src='/4.png' width={50} height={50} alt="Client Icon" />
                </div>
                <div className="flex-1 flex"></div>
            </header>

            {/* Video Player Section */}
            <section className="w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div id="frame" className={iframeLoaded ? "mt-10 mb-10 w-full h-auto flex flex-col items-center gap-10" : "hidden"}>

                    <div className="youtube-container w-full lg:w-3/5 h-full rounded-lg px-4 lg:px-0">
                        <YouTube videoId={params.videoid} onReady={onReady} />

                        <div className="bg-Mevkgreen text-slate-500 shadow-md my-5 p-5 flex flex-col items-start rounded-lg">
                            <p className="text-sm uppercase font-bold text-Mevkgolden">{videoTitle}</p>
                            <h4 className="font-bold text-lg text-Mevkgolden">{videoDuration}</h4>
                            {/* Ajuste do <small> com scrollbar */}
                            <small className="text-sm text-Mevkligth p-2 text-left h-56 w-full max-w-full overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-yellow-100 scrollbar-track-transparent">
                                {videoDescription}
                            </small>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-Mevkgreen w-full h-52 text-center flex flex-col items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>
        </main>
    );
}
