import Header from "@/layout/header";
import MenuConverter from "@/layout/menu-converter";
import SearchList from "@/layout/search-list";
import FilterProvider from "@/provider/list-provider";

export default function Dashboard() {
    return (
    <div className="bg-[#111111] h-screen w-full">
        <Header />
        <br />
        <main className="w-[80%] flex h-[calc(95vh-80px)] m-auto rounded-xl"
        style={{boxShadow: "9px 10px 26px 0px rgba(0,0,0,0.75);"}}>
            
            <FilterProvider>
                <MenuConverter/>
                <SearchList/>
            </FilterProvider>
        </main>
    
    </div>)
}