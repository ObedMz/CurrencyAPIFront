import { Currency } from "@/data/mock-items";
import { ArrowRight, CirclePercent, CreditCard } from "lucide-react";

export default function CurrenctItem({item}: {item: Currency}) {
    return (
        <div
                    key={item.id}
                    className={`duration-300 transition-all m-2 p-2 bg-[#181A1E] rounded-lg`}
                >
                    <div className="cursor-pointer flex justify-between items-center">
                    <CreditCard />
                    <div className="text-sm">
                    <p className="text-[#6366F1] flex gap-1 items-center">{item.currencyFrom} <ArrowRight size={12} /> {item.currencyTo}</p>
                    <p className="flex gap-1 items-center">{item.amount} <ArrowRight size={12}/> {item.convertedAmount.toFixed(2)}</p>
                    </div>
                    <p className="text-center cursor-pointer bg-[#81C995] text-[#81C995] bg-opacity-30 p-1 rounded-full flex gap-1 items-center text-[10px] font-bold"><CirclePercent size={12}/>{item.rate.toFixed(2)}</p>
                    </div>
                </div>
    );
}