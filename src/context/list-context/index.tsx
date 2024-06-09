import { FilterContextType } from "@/types/responses";
import { createContext } from "react";

export const FilterContext = createContext<FilterContextType | null>(null)