import { StaticImageData } from "next/image"

export interface IStrain {
    name: string
    description: string
    image: StaticImageData
    note?: string 
}