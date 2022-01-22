import { StartStyle, Avatar } from './styles'

interface Props {
    avatarLink: string    
}

export const Avatars: React.FC<Props> = (props: Props) => {
    return <StartStyle><Avatar src={props.avatarLink} /></StartStyle>  
}