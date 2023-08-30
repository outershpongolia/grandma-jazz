import { IStrain } from "./interfaces";
import strainImage1 from '../public/images/strain1.jpg'
import strainImage2 from '../public/images/strain2.jpg'
import strainImage3 from '../public/images/strain3.jpg'
 
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
        image: strainImage1,
        type: 'sativa',
        feeling: 'energetic, talkative',
        flavour: 'earthy, lemon, pine',
        help: 'stress, mood'
    },
    {
        name: 'Mac',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: strainImage2,
        type: 'indica',
        feeling: 'energetic, talkative',
        flavour: 'earthy, lemon, pine',
        help: 'stress, mood'
    },
    {
        name: 'Skywalker Kush',
        description: 'Lorem ipsum is placeholder text commonly used in the graphic.',
        image: strainImage3,
        type: 'indica',
        feeling: 'energetic, talkative',
        flavour: 'earthy, lemon, pine',
        help: 'stress, mood'
    },
    {
        name: 'Violator Kush',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        image: strainImage1,
        type: 'sativa',
        feeling: 'energetic, talkative',
        flavour: 'earthy, lemon, pine',
        help: 'stress, mood'
    },
    {
        name: "Grandma's Garden",
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        image: strainImage3,
        note: '(Signature strain)',
        type: 'indica',
        feeling: 'energetic, talkative',
        flavour: 'earthy, lemon, pine',
        help: 'stress, mood'
    }
]