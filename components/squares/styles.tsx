import styled from 'styled-components'

interface Props {
    selected : boolean
}

export const SquareBoard = styled.div<Props>`
    background: ${props => props.selected ? "#a47bd1" : "#6a24b7"};
    color:  ${props => props.selected ? "#a47bd1" : "#6a24b7"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`