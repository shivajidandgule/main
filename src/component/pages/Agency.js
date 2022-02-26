import React from 'react'
import { Table } from 'react-bootstrap'

const Agency = () => {
  
    const dataAgency=[
      {
           
        company:'Agile',
        line:'soft',
        status:'rftt',
        ordinator:'ghty',
    },
    {
        company:'tyls',
        line:'TGHT',
        status:'htt',
        ordinator:'Trfg',
    },
    {
        company:'golre',
        line:'thr',
        status:'htt',
        ordinator:'WDRT',
    },
    {
        company:'Micro',
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
     
      <th> Company Name</th>
      <th>Line of Business</th>
      <th>Status</th>
      <th>Co ordinator</th>
    </tr>
  </thead>
  <tbody>
      {dataAgency.map((val)=>{ 

      return(
      <tr>
      
      <td>{val.company}</td>
      <td>{val.line}</td>
      <td>{val.status}</td>
      <td>{val.ordinator}</td>
    </tr>

       ) })}
    
  
  </tbody>
</Table>

    </div>

  )
}

export default Agency
