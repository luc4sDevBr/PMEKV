import React from "react";
import { Button, slider } from "@nextui-org/react";
import { AlignJustify } from "lucide-react"
import { ListStart } from 'lucide-react';
import BuildMenu from "../Menu/menu";


//{BuildMenu && <BuildMenu active={setsliderbar} boolactive={slidebar}/>}
export default function BuildButton() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [slidebar, setsliderbar] = React.useState(false);

  const toggleCollapsed = () => {
      setCollapsed(!collapsed);
      setsliderbar(!slidebar)
  };

  return (
    <Button
      onClick={toggleCollapsed}
    
    >
      {collapsed ? <AlignJustify color="#0d0d0d" /> : <ListStart color="#0d0d0d" />}
    </Button>
  );
}
