import { ReactNode } from 'react'
type RowPropType = {
  rowIndex: number,
  cols: number,
  onClick: (e: React.MouseEvent<HTMLElement>)=>void
}

const Row = ({rowIndex, cols, onClick}:RowPropType)=>{

    const generateCols = (): ReactNode[] => {
      const arr = [];
      for( let i = 0; i < cols; i++ ) {
           arr.push( <td key={`cell-${i}`}
            onClick={onClick} 
            className="cursor-pointer border bg-gray-200 p-4">
            {( i + 1 ) * ( rowIndex + 1 )}
            </td> );
      }
      return arr;
    }
    return <tr key={`rowIndex${rowIndex}`}>
            { [ <td key="cellheader" className="border bg-slate-400 p-4">{rowIndex}</td>, 
                ...generateCols()
              ] }
          </tr>

}

export default Row;