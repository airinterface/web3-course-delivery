"use client"

import { useEffect, useState } from 'react'
import Row from "./Row"
type GridPropType = {
  rows: number 
}
const  Grid = ({rows}:GridPropType)=> {
  const [current, setCurrent] = useState<HTMLElement|null>(null)
  const generateArray = ( max: number ): number[] =>{
    const arr:number[] = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = i
    }
    return arr;
  }
  const baseArray = generateArray( rows )
  const onClick = (e: React.MouseEvent<HTMLElement> )=> {
    if( !e.target ||  !( e.currentTarget ).classList ) return;
    if( current ){
      if( current === e.target ) return;
      current.classList.remove("active")
    }
    ( e.currentTarget ).classList.add("active");
    setCurrent( e.currentTarget );
  }


  const generateHeaderRow = ()=>{
    return <tr>
            { [ <th key="header" className="bg-slate-400 p-4 border">x</th>,
               ...baseArray.map( ( index: any, i:number )=> <td key={`header${i}`} 
                 className="bg-slate-400 p-4 border">{i+1}</td>) ]
            }
            </tr>
           
  }
  const generateRow = ( i: number ) => {

  }
  return <table className="table border border-collapse">
    <thead key="thead">
    { generateHeaderRow() }
    </thead>
    <tbody key="body">
    { baseArray.map((val, index) => < Row key={index} rowIndex={index} cols={rows} onClick={onClick} /> ) }
    </tbody>
  </table>
}

export default Grid;