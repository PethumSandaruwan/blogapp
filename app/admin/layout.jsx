import Sidebar from "@/components/AdminComponents/Sidebar";

export default function Layout({childern}){
    return(
        <>
        <div className="flex">
            <Sidebar/>
        </div>
        {childern}
        </>
    )
}