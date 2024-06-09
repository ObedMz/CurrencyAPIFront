'use client'
import getAll from "@/actions/get-all";
import searchTo from "@/actions/search-to";
import { currencies } from "@/data/mock-items";
import { useFilter } from "@/hooks/filter";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SearchTab() {
    const {filter, setFilter} = useFilter()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data: any) => {
        const response = await searchTo(data.from, data.to)
        if(response) setFilter(response)
    }

    const getAllRequest = async (data: any) => {
        const response = await getAll()
        if(response) setFilter(response)
    }
    return (
        <form className="flex items-center justify-between p-2" onSubmit={handleSubmit(onSubmit)}>
                    <select 
                    {...register("from", { required: true })}
                    name="from"
                    className="p-1 bg-transparent">
                    {currencies.map((currency: string) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                    </select>
                    To
                    <select 
                    {...register("to", { required: true })}
                    name="to" className="p-1 bg-transparent">
                    {currencies.map((currency: string) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                    </select>
                    <button className="p-1 bg-[#6366F1] px-4 py-1 rounded hover:bg-opacity-55">search</button>
                    <div onClick={getAllRequest} className="cursor-pointer"><Trash2 size={14} color="red"/></div>
                </form>
    )
}