import styled from 'styled-components'

interface Props {
    src : string
    rigth: boolean
    left: boolean
}

export const StartStyle = styled.div`
    font-size: 1em;
    margin: 1em;
    padding: 5em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-wrap: wrap;
    max-width: 800px; 
`
export const Avatar = styled.img<Props>`
    src: url(${props => props.src});
    width: 150;
    height: 70;
    border-radius: 50%
`

export const Arrows = styled.button<Props>`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px; 
    transform: ${props => props.rigth ? `rotate(-45deg)` : `rotate(-135deg)` };
    -webkit-transform:   ${props => props.rigth ? `rotate(-45deg)` : `rotate(135deg)` }
`


