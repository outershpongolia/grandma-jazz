import { StaticImageData } from "next/image"

export interface IStrain {
    name: string
    description: string
    image: StaticImageData
    type: 'indica' | 'sativa'
    feeling: string
    flavour: string
    help: string
    note?: string 
}