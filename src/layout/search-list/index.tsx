'use client'
import SearchTab from "../search-nav";
import { Suspense } from "react";
import ListItemsRequest from "./server-render";

export default function SearchList() {
    return (
        <div className="w-[30%] h-full rounded-r-xl">
               <SearchTab/>
               <ListItemsRequest/>
            </div>
    )
}