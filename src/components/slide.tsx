interface SlideProps {
    id: number;
    title: string;
    image: string;
}

export default function Slide({id, title, image}: SlideProps) {
    return (
        <>
            <div className="relative">
                <img className="h-screen w-full" src={image} alt="" />
                <div className="absolute flex flex-col items-center justify-center z-10 inset-0">
                    <h1 className="text-6xl text-slate-50 font-bold">{id}</h1>
                    <h1 className="text-slate-50 text-5xl font-semibold">{title}</h1>
                </div>
            </div>
        </>
    )
}