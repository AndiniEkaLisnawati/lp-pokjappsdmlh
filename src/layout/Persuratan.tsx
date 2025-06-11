export default function Persuratan() {
    return (
        <>
            <div className="bg-teal-500">
                <div className="py-20">
                    {/* <h1 className="text-6xl text-slate-50 text-center">Persuratan</h1>
                    <p className="text-center text-3xl text-slate-50">Persuratan bisa dilihat di link <a className="text-sky-700 hover:underline" href="">berikut</a></p> */}
                    <a href="https://drive.google.com/drive/folders/">
                        <iframe width={1000} height={500} className="bg-slate-100" src="https://drive.google.com/embeddedfolderview?id=1MFRTyGYBSHYd6xleShjPcQJwegcNoNat"></iframe>
                    </a>
                </div>
            </div>
        </>
    )
}