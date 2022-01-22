import styled from 'styled-components'

interface Props {
    src : string
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