import { useParams } from "react-router-dom";

export default function PortoPage() {
    const { id } = useParams<{ id: string }>();
    const [porto, setPorto] = useState([]);

    const fetchPortoData = async (portoId: string[]) => {
        try {
            const response = await fetch(`../porto.json`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPorto(data);
        } catch (error) {
            console.error("Failed to fetch porto data:", error);
        }
    }    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Porto Page</h1>
            <p className="text-lg text-gray-700">This is the Porto page content.</p>
        </div>
    );
}