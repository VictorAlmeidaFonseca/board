import { AvatarGenerator  } from 'random-avatar-generator'
import { generateArray } from './generateArray'

export const avatarsAvailables = (quantity: number) => {
    const generator = new AvatarGenerator()
    const array = generateArray(quantity)
    return array.map((_avatar) => (generator.generateRandomAvatar()))

}