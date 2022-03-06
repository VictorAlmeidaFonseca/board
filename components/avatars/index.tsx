import { useEffect, useState } from 'react'
import { avatarsAvailables } from '../../utils'
import { 
    Arrows,        
    Avatar ,  
    StartStyle, 
} from './styles'

const QUANTITY = 10

export const Avatars: React.FC = () => {
    const [ avatars , setAvatars] = useState([''])
    const [ avatarPosition , setAvatarPosition ] = useState(0)
    
    useEffect(() => {
        setAvatars(avatarsAvailables(10))
    }, [])  
        
    const fetchAvatarPosition = (position: number) : number =>  {
        if(position > avatars.length -1 ) {
            setAvatars(prevAvatars => [...prevAvatars, ...avatarsAvailables(QUANTITY) ])
        }
        
        if(position < 0) {
           setAvatars(prevAvatars => [...avatarsAvailables(QUANTITY), ...prevAvatars])
           return  QUANTITY - 1
        }
        return position        
    }
    
    return (      
        <StartStyle>       
            <Arrows left onClick={() => (setAvatarPosition(fetchAvatarPosition(avatarPosition - 1)))} />
                <Avatar src={avatars[avatarPosition]} />
            <Arrows rigth onClick={() => (setAvatarPosition(fetchAvatarPosition(avatarPosition + 1)))} />
        </StartStyle>       
    )
}