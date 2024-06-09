'use client'
import { FilterContext } from "@/context/list-context";
import { ResponseExchange } from "@/types/responses";
import { useState } from "react";

export default function FilterProvider({ children }: any) {
    const [filter, setFilter] = useState<ResponseExchange[] | null>(null);
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}