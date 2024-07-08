import { Poppins, Redressed, Lora } from "next/font/google";

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

const lora = Lora({
    weight: ["700"],
    subsets: ["cyrillic"],
    style: ["normal"]
})

export {poppins, redressed, lora}