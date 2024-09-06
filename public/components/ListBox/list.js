import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./listWrapper";
import Button from "@nextui-org/react";
import Link from "next/link";


export default function BuildList() {
  const items = [
    {
      key: "0",
      label: "Alimentação saudável",
      link: "/inicio"
    },
    {
      key: "1",
      label: "Restrições durante o desafio.",
      link: "/tabela"
    },
    {
      key: "2",
      label: "Receita detóx",
      link: "/receita"
    },
    {
      key: "4",
      label: "Fórmulas de manipulados",
      link: "/tabela"
    },
    {
      key: "5",
      label: "Exercíte-se",
      link: "/exercicios"
    }
  ];


  return (

    <ListboxWrapper>

      <Listbox
        items={items}
        aria-label="Dynamic Actions"
      //onAction={(link) => { const n = () => { return ( <Link href="/inicio"> </Link>) } }}
      >
          {(item) => (
            
            <ListboxItem

              key={item.key}
              //color={item.key === "delete" ? "danger" : "default"}
              className=" bg-gradient-to-tr from-Mevkgolden via-yellow-200 to-yellow-900 opacity-75 w-70 h-14 cursor-pointer my-2 rounded-2xl shadow-2xl gap-10 hover:border-2 border-yellow-200"
            >
              <Link href={item.link}> <div className="w-70 h-14 text-center flex items-center justify-center bg-transparent text-me text-Mevkgreen text-lg font-bold">{item.label}</div>   </Link>
              

            </ListboxItem>


          )}

       
      </Listbox>

    </ListboxWrapper>

  );
}
