import React from 'react'
import { Table } from 'react-bootstrap'

const Broker = () => {


    const data=[
        {
           
            name:'Agile',
            line:'soft',
            status:'rftt',
            ordinator:'ghty'
        },
        {
            name:'tyls',
            line:'TGHT',
            status:'htt',
            ordinator:'Trfg'
        },
        {
            name:'golre',
            line:'thr',
            status:'htt',
            ordinator:'WDRT'
        },
        {
            name:'Micro',
            line:'rfgt',
            status:'tht',
            ordinator:'DRT'
        }
        
         ]
  return (
    <div className='userpg1'>
    <Table striped bordered hover>
<thead>
  <tr>
   
    <th>  Name</th>
    <th>Line of Business</th>
    <th>Status</th>
    <th>Co ordinator</th>
  </tr>
</thead>
<tbody>
    {data.map((val)=>{ 

    return(
    <tr>
    
    <td>{val.name}</td>
    <td>{val.line}</td>
    <td>{val. status}</td>
    <td>{val. ordinator}</td>
  </tr>

     ) })}
  

</tbody>
</Table>
  </div>

  )
}

export default Broker
