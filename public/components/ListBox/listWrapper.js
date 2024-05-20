import React from "react";
import Link from "next/link"

export const ListboxWrapper = ({children, link}) => (
  <div className="w-full border-small px-2 py-2 rounded-small border-default-200 dark:border-default-100  ">
    
    {children}
  </div>
);