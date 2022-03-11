import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { avatarsAvailables } from '../../utils'
import { 
    Container,
    Arrows,        
    Avatar ,  
    StartStyle, 
    Input,
    Button
} from './styles'

const QUANTITY = 10

export const Avatars: React.FC = () => {
    const [ avatars , setAvatars] = useState([''])
    const [ avatarPosition , setAvatarPosition ] = useState(0)
    const [ avatarName , setAvatarName ] = useState('')
    const router = useRouter()
    
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

    const savePlayerInfo = () => {
        if(!avatarName) return alert('Por favor digite o nome do avatar')
        localStorage.setItem('avatar', avatars[avatarPosition])
        localStorage.setItem('avatarName', avatarName)
        router.push('/play')
    }

    const saveName = (e:any) => setAvatarName(e.target.value)
      
    return (
        <Container>      
        <StartStyle>       
            <Arrows left onClick={() => (setAvatarPosition(fetchAvatarPosition(avatarPosition - 1)))} />
                <Avatar src={avatars[avatarPosition]} />
            <Arrows rigth onClick={() => (setAvatarPosition(fetchAvatarPosition(avatarPosition + 1)))} />
        </StartStyle>
        <Input
            onChange={e => saveName(e)}
        />
        <Button  
            onClick={() => savePlayerInfo()}
        >
            Avançar
        </Button >
        </Container> 
     
    )
}