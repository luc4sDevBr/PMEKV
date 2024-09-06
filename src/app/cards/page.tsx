'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import BuildCard from "../../../public/components/Cards/card";

export default function Home() {
    const [videos, setVideos] = useState([]);

    const items = [
        {
            key: "0",
            videoId: "RnzW20zSsaA"
        },
        {
            key: "1",
            videoId: "r1HjX2ywkzI"
        },
        {
            key: "2",
            videoId: "9APT2ZhfWBo"
        },
        {
            key: "3",
            videoId: "eS8UXsKru2o"
        },
        {
            key: "4",
            videoId: "9pe4hpJGyP8"
        },
        {
            key: "5",
            videoId: "NkYv6kqL-3k"
        },
        {
            key: "6",
            videoId: "CFa1D5KrYsc"
        },
        {
            key: "7",
            videoId: "mVLkd_KsyHI"
        },
    ];

    useEffect(() => {
        const fetchVideosData = async () => {
            try {
                const videoDataPromises = items.map(async (item) => {
                    const videoId = item.videoId;
                    const response = await axios.get(
                        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails&key=AIzaSyBSdtLrgAkVPotIjYnBGhyz3xWpFoj6dbc`
                    );
                    return response.data.items[0];
                });

                const videosData: any = await Promise.all(videoDataPromises);
                setVideos(videosData);
            } catch (error) {
                console.error("Erro ao buscar dados dos vídeos:", error);
            }
        };

        fetchVideosData();
    }, []);

    const formatDuration = (duration: any) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = parseInt(match[1]) || 0;
        const minutes = parseInt(match[2]) || 0;
        const seconds = parseInt(match[3]) || 0;

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const renderVideos = () => {
        return videos.map((video:any, index) => (
            <Link key={index} href={`/cards/videos/${video.id}`}>
                <div>
                    <BuildCard
                        videoTitle={video.snippet.title}
                        videoDescription={video.snippet.description}
                        tumb={video.snippet.thumbnails.high.url}
                        duration={formatDuration(video.contentDetails.duration)}
                    />
                </div>
            </Link>
        ));
    };

    return (
        <main className="w-full h-screen overflow-hidden">
            <header className="row-span-1 h-[10vh] relative px-2 bg-Mevkgreen flex items-center space-x-5 shadow-lg">
                <menu className="flex-2 flex items-center z-10">
                    <Button>
                        <Link href="/exercicios"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>
                </menu>

                {/* Centralizar a imagem */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image src='/4.png' width={50} height={50} alt="Client Icon" className="max-w-full h-auto" />
                </div>

                <div className="flex-2 flex z-10"></div>
            </header>

            <section className="w-full h-full bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 pb-10">
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {renderVideos()}
                </div>
                <footer className="bg-Mevkgreen w-full h-52 text-center flex-col flex items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" />
                    <h1 className="drop-shadow-lg text-4xl font-thin text-NewPalet-yellow"> Desafio MEVK </h1>
                </footer>
            </section>
        </main>
    );
}
