import { SquareBoard } from './styles'
import { Player } from '../player'

interface Props {
    selected: boolean    
}

export const Square : React.FC<Props> = (props: Props) => {
    const square = props.selected ?  <Player /> : ''

    return  <SquareBoard selected = {props.selected}>{
        square
    } </SquareBoard>
}