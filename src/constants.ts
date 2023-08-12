import { IStrain } from "./interfaces";
import strainImage1 from '../public/images/strain1.jpg'
import strainImage2 from '../public/images/strain2.jpg'
import strainImage3 from '../public/images/strain3.jpg'
import strainImage4 from '../public/images/strain4.jpg'
 
export enum ERoute {
    HOME = '/',
    FLOWERS = '/flowers',
    REFRESHMENTS = '/refreshments',
    VIBE = '/vibe',
    VISION = '/vision'
}

export const strainsList: IStrain[] = [
    {
        name: 'Grandaddy Purple',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        image: strainImage1
    },
    {
        name: 'Mac',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: strainImage2
    },
    {
        name: 'Skywalker Kush',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic.',
        image: strainImage3
    },
    {
        name: 'Violator Kush',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        image: strainImage1
    },
    {
        name: "Grandma's Garden",
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        image: strainImage3,
        note: '(Signature strain)'
    }
]