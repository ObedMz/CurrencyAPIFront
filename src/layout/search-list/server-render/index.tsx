'use client'
import getAll from "@/actions/get-all";
import { useFilter } from "@/hooks/filter";
import CurrenctItem from "@/layout/currency-item";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";


export default function ListItemsRequest() {
    const [pending, setPending] = useState(true)
    const {filter, setFilter} = useFilter();
    useEffect(() => {
        const fetching = async () => {
            setPending(true)
            const response = await getAll();
            if(response)  setFilter(response)
            setPending(false)
        }

        fetching()
    }, [])

    return (
        <div className="w-[98%] h-[90%] overflow-y-auto">
            {pending ?
                <div className="w-full h-full flex justify-center items-center">
                    <LoaderCircle size={24} className="animate-spin"/>
                </div>
            :
            
                filter && filter.map((rate) => (
                    <CurrenctItem key={rate.id} item={rate}/>
                ))
               
            }
        </div>
    )
}