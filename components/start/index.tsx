import { Avatars } from '../avatars'
import { AvatarContainers } from './styles'
import { avatarsAvailables } from '../../utils'
import { useState, useEffect } from 'react'

export const Start = ( ) => {
    const [avatars , setAvatars] = useState([''])

    useEffect(() => {
        setAvatars(avatarsAvailables(10))
    }, [])

    return <>
    <AvatarContainers>     
     <Avatars
        key={1} 
        avatarLink={avatars[0]}
     />    
    </AvatarContainers>
    </>
}