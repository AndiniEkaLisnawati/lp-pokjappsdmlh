import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Silabus = () => {

    const location = useLocation();
       useEffect(() => {
        if (location.pathname !== "/kerjasama-akreditasi-lpk") {
            document.title = "Kerjasama | Pokdappsdmlh";
        } else {
            document.title = "Pokdappsdmlh";
        }
    }, [location.pathname]);
    const navigate = useNavigate();
  return (
    <div>
        <div className="flex flex-col justify-center gap-2 items-center h-screen bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold dark:text-slate-50">This is Silabus Page</h1>
       <button className="w-50 h-10 bg-fuchsia-400 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:text-fuchsia-400 hover:font-bold hover:bg-fuchsia-200 " onClick={()=> navigate("/")}>Back to Homepage</button>
        </div>
    </div>
  ) 
}

export default Silabus