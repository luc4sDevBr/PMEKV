'use client'
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/react";
import BuildTextBox from "../../../public/components/TextBox/textbox";
import Link from "next/link";

export default function Home() {
    const [collapsed, setCollapsed] = React.useState(false);
    const [slidebar, setsliderbar] = React.useState(false);

    const textContentItens = [
        "Nos próximos 30 dias, nosso objetivo é ajudar você a alcançar uma vida mais saudável, aumentando sua disposição, melhorando seus hábitos alimentares e, claro, promovendo a perda de peso de forma sustentável. O foco do desafio é criar uma rotina equilibrada, sem abrir mão de alimentos saborosos, mas substituindo opções que dificultam o emagrecimento por escolhas mais saudáveis e nutritivas."
    ];
    const textContentItens2 = [
        "   Plano Alimentar Saudável: Vamos eliminar da dieta alimentos que dificultam a perda de peso, como açúcares refinados, carboidratos e frituras processadas. No lugar, você vai introduzir substitutos saudáveis, como frutas, carboidratos integrais e alimentos preparados de forma leve (assados ou grelhados). Ao longo dos dias, compartilharemos dicas de receitas e cardápios equilibrados para que você possa diversificar suas refeições e manter uma alimentação rica em nutrientes, sem sentir falta dos alimentos eliminados.\nHidratação: A hidratação é essencial para o sucesso do desafio. Nosso foco será beber pelo menos 2 litros de água por dia. Você pode incrementar sua água com fatias de frutas para torná-la mais saborosa e agradável. Substituiremos refrigerantes e bebidas alcoólicas por água com gás, chás naturais e sucos de frutas diluídos.\nRotina de Exercícios: Para complementar a alimentação, sugerimos uma rotina de exercícios que pode ser realizada de acordo com o seu nível de condicionamento físico. Você receberá sugestões de treinos simples e eficazes que poderão ser feitos em casa ou na academia, sem a necessidade de equipamentos complexos. O objetivo não é treinar por horas, mas fazer movimentos consistentes que acelerem o metabolismo e ajudem na queima de gordura.\nAcompanhamento e Motivação: Durante o desafio, haverá acompanhamento diário com dicas, lembretes e motivação para manter o foco. Isso inclui sugestões de refeições, lembretes para se hidratar e orientações sobre como melhorar o sono e controlar o estresse. Além disso, você poderá acompanhar seu progresso semanalmente, medindo não apenas a perda de peso, mas também como está se sentindo em termos de energia, disposição e bem-estar.\nComunidade e Suporte: O desafio será ainda mais poderoso com o apoio de uma comunidade de pessoas com o mesmo objetivo! Participantes poderão compartilhar suas experiências, receitas, dicas e resultados. Juntos, vamos celebrar cada conquista, por menor que seja."
    ];
    
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        setsliderbar(!slidebar);
    };

    return (
        <main className="grid grid-rows-14 w-full h-screen overflow-hidden">

            <header className="row-span-1 h-[10vh] relative px-2 bg-Mevkgreen flex items-center space-x-5 shadow-lg">
                <menu className="flex-2 flex items-center z-10">
                    <Button>
                        <Link href="/"><ArrowLeft color="#dbbc65" /></Link>
                    </Button>
                </menu>

                {/* Centralizar a imagem */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image src='/4.png' width={50} height={50} alt="Client Icon" className="max-w-full h-auto" />
                </div>

                <div className="flex-2 flex z-10"></div>
            </header>

            <section className="w-full h-full row-span-12 bg-Mevk-darkgreen overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
                <div className="w-full h-auto">
                    <Image className="w-full h-[40vh] sm:h-[50vh] lg:h-full object-cover rounded-b-nice drop-shadow-lg" src="/banner.jpg" width={1366} height={768} alt="Client Icon" />
                </div>

                <div className="w-full h-auto bg-Mevk-darkgreen flex flex-col items-center gap-6 p-4 sm:p-6 lg:p-8">
                    <BuildTextBox
                        content={textContentItens}
                        titleONTENT={"Bem-vindo ao Desafio de Emagrecimento!"}
                    />
                </div>

                <div className="w-full h-auto">
                    <Image className="w-full h-[40vh] sm:h-[50vh] lg:h-full object-cover rounded-b-nice drop-shadow-lg" src="/banner.jpg" width={1366} height={768} alt="Client Icon" />
                </div>

                <div className="w-full h-auto bg-Mevk-darkgreen flex flex-col items-center gap-6 p-4 sm:p-6 lg:p-8">
                    <BuildTextBox
                        content={textContentItens2}
                        titleONTENT={"Como o Desafio Vai Funcionar:"}
                    />
                </div>

                <footer className="bg-Mevkgreen w-full h-52 text-center flex flex-col items-center justify-center drop-shadow-lg gap-2">
                    <Image src='/4.png' width={70} height={70} alt="Client Icon" className="max-w-full h-auto" />
                    <h1 className="drop-shadow-lg text-2xl sm:text-3xl lg:text-4xl font-thin text-NewPalet-yellow">Desafio MEVK</h1>
                </footer>
            </section>
        </main>
    );
}
