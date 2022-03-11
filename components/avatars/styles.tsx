import styled from 'styled-components'

interface Props {
    src : string
    rigth: boolean
    left: boolean
}

export const Container  = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center ;
    justify-content: center ;
`

export const StartStyle = styled.div`
    font-size: 1em;
    margin: 1em;
    padding: 5em 1em;
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
export const Input = styled.input.attrs( props => ({
    id: 'name',
    placeholder: 'digite seu nome',
    type: 'text'
}))`
  styled.input.attrs
  border: 1px solid palevioletred;
  display: flex;
    align-items: center;
    justify-content: center; 
    flex-wrap: wrap;
    max-width: 800px;   
    border: none;
    border-bottom: 2px solid black;
    padding-bottom: 6px;
    margin-bottom: 6px;
`

export const Button = styled.div`
background-color: #008CBA; 
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

export const Arrows = styled.button<Props>`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px; 
    transform: ${props => props.rigth ? `rotate(-45deg)` : `rotate(-135deg)` };
    -webkit-transform:   ${props => props.rigth ? `rotate(-45deg)` : `rotate(135deg)` }
`


