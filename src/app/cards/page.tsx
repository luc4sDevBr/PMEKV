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
            videoId: "iT6E92Kt38o"
        },
        {
            key: "0",
            videoId: "zpK_MqEMgu4"
        },
        {
            key: "0",
            videoId: "kYkOwbzzzxk"
        },
        {
            key: "1",
            videoId: "vs95I5KqBGE"
        },
        {
            key: "2",
            videoId: "J0adFq97U_s"
        },
        {
            key: "3",
            videoId: "m9iBEwaMenU"
        },
        {
            key: "4",
            videoId: "E-n0A4txXf4"
        },
        {
            key: "5",
            videoId: "dxI_z2h42B8"
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
        // Função para formatar a duração em formato 00:00:00
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = parseInt(match[1]) || 0;
        const minutes = parseInt(match[2]) || 0;
        const seconds = parseInt(match[3]) || 0;

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };
    const renderVideos = () => {
        return videos.map((video, index) => (
            <Link className="" href={`/cards/videos/${video.id}`}>
                <div key={index}>
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
            <header className="row-span-1 px-2 bg-Mevkgreen flex space-x-6 shadow-lg">
                <menu className="flex-1 flex ">

                    <Button>
                        <Link href="/exercicios"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>

                </menu>
                <div className="flex-4 flex justify-center"><Image src='/4.png' width={50} height={50} alt="Client Icon" /></div>
                <div className="flex-1 flex"></div>

            </header>

            <section className="w-full h-full row-span-1 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 pb-10">
                <div className="p-10 w-auto h-auto grid grid-cols-4 bg-Mevk-darkgreen items-center gap-10">
                    {renderVideos()}
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
