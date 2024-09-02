'use client'
import React from "react";
import {Listbox, ListboxItem, Chip, ScrollShadow, Avatar} from "@nextui-org/react";
import {ListboxWrapper} from "./listaDetoxWrapper";
import {users} from "./data";
import Link from "next/link";

export default function listaDetoxWrapper() {
  const [values, setValues] = React.useState(new Set(["1"]));

  const arrayValues = Array.from(values);

  const topContent = React.useMemo(() => {
    if (!arrayValues.length) {
      return null;
    }

    return (
      <ScrollShadow
        hideScrollBar
        className="w-full flex py-0.5 px-2 gap-1"
        orientation="horizontal"
      >
        {arrayValues.map((value) => (
          <Chip key={value}>{users.find((user) => `${user.id}` === `${value}`).name}</Chip>
        ))}
      </ScrollShadow>
    );
  }, [arrayValues.length]);

  return (
    <ListboxWrapper>
      <Listbox
        topContent={"Receitas Detóx"}
        className=" p-0 w-full h-full text-2xl font-semibold text-left align-middle  text-white mt-10 mb-10"
        defaultSelectedKeys={["1"]}
        items={users}
        label="Assigned to"
        selectionMode="multiple"
        onSelectionChange={setValues}
        variant="flat"
      >
        {(item) => (

          
              
            <ListboxItem key={item.id} textValue={item.name} className="w-full p-0 ml-0 mt-3 transition duration-700 ease-in-out bg-transparent shadow-lg text-left transform hover:-translate-y-1 hover:scale-100">
              <Link href={`/receita/receitaAtual/${item.id}`}>
                <div className="flex w-full h-full items-center  bg-gradient-to-tr from-Mevk-darkgreen via-Mevkgreen to-emerald-50 p-1 gap-5">
                  <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.avatar} />
                  <div className="flex flex-col">
                    <span className="drop-shadow-lg text-2xl font-semibold  text-white w-full">{item.name}</span>
                    <span className=" font-thin text-base  text-white ">{item.preview}</span>
                  </div>
                </div>
              </Link>

              
            </ListboxItem>
          
       
        
          
        )}
      </Listbox>
    </ListboxWrapper>
  );
}
