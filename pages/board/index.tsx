import { Square } from "../../components/squares"
import { generateArray } from '../../utils'

export default function Board() {
  const rows = generateArray(25)  

  return rows.map((row) => {
    return <>
      <Square key={row} selected = {!row} />
      </>
  }) 
}