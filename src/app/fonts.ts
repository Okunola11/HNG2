import { Poppins, Redressed } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["400"],
    preload: true,
    style: ["normal"]
    
})

const redressed = Redressed({
    subsets: ["latin"],
    weight: ["400"],
    preload: true,
})

export {poppins, redressed}