'use client'
import convert from "@/actions/send-convert";
import { FilterContext } from "@/context/list-context";
import { currencies } from "@/data/mock-items";
import { useFilter } from "@/hooks/filter";
import { RequestExchange, ResponseExchange } from "@/types/responses";
import { CirclePercent , LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';


export default function MenuConverter() {
    const [rate, setRate] = useState<number | null>(null)
    const [waiting, setWaiting] = useState<boolean>(false)
    const [currencyTo, setCurrency] = useState<number|null>(null)
    const [errorMessage, setErrorMessage] = useState<string| null>(null)
    const { filter, setFilter } = useFilter()
    
    const { register, handleSubmit, formState: { errors } } = useForm<RequestExchange>()
    const onSubmit: SubmitHandler<RequestExchange> = async({amount, currencyFrom, currencyTo}) => {
        setWaiting(true)
        const request : RequestExchange = {
            amount,
            currencyFrom,
            currencyTo
        }
        const response : ResponseExchange | null = await convert(request)
        setWaiting(false)
        if(response){
            setRate(response.rate)
            setCurrency(response.convertedAmount)
            const updatedFilter = filter ? [...filter, response] : [response];
            setFilter(updatedFilter)
            return
        }

        setErrorMessage("Error, try later")

    }   
    return (
        <div className="w-[70%] h-full rounded-l-xl border-r-2 border-indigo-500 flex justify-evenly">
                <form className="w-[300px] m-auto mt-10" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <input type="text"
                    {...register('amount', {required: true, min: 1, pattern: /^[0-9]*$/})}
                    className="p-1 bg-transparent border border-neutral-700 rounded-l-lg"></input>
                    <select
                    {...register('currencyFrom')}
                    className="p-1 bg-transparent border border-neutral-700 rounded-r-lg" 
                    name="currencyFrom">
                        {currencies.map((currency: string) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                    {errors.amount && <span className="w-full text-red-500 text-sm">Debes ingresar un número.</span>}
                </section>
                <br />
                <section>
                    <input type="text"
                    value={currencyTo?.toFixed(4)||''}
                    disabled className="p-1 bg-transparent border border-neutral-700 rounded-l-lg"></input>
                    <select
                    {...register('currencyTo')}
                    className="p-1 bg-transparent border border-neutral-700 rounded-r-lg" 
                    name="currencyTo">
                        {currencies.map((currency: string) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </section>
                <br />
                <button className="text-center text-sm bg-[#6366F1] rounded hover:bg-opacity-55 w-[85px] h-[30px] flex justify-center items-center">
                    {waiting ? <LoaderCircle size={15} className="animate-spin"/> : "Convert"}
                </button>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </form>
                {
                 rate ?
                 <div className="cursor-pointer bg-[#81C995] text-[#81C995] bg-opacity-30  m-auto mt-10 w-[120px] rounded-full px-1 text-[10px] font-bold flex gap-1 items-center">
                    <CirclePercent />Tipo de cambio: {rate.toFixed(2)}
                </div> :
                <div className="m-auto mt-10 w-[120px] ">
                </div>
                }
            </div>
    )
}