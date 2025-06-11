import type { JSX } from "react";
import logo from '../assets/logo.png'

export default function Hero(): JSX.Element {
    return (
        <>
            <div className="justify-center flex">
                <img className="w-xl h-screen" src={logo} />
            </div>
        </>
    )
}