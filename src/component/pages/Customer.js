import React from 'react'
import { Table } from 'react-bootstrap'

const Customer = () => {
 const data=[
{
    Entity:'Rs',
    name:'Rohan',
    line:'td',
    status:'htt',
    owner:'Rohan'
},
{
    Entity:'us',
    name:'Sohamf',
    line:'td',
    status:'htt',
    owner:'Rajesh'
},
{
    Entity:'Rs',
    name:'Rohan',
    line:'td',
    status:'htt',
    owner:'Sunil'
},
{
    Entity:'Rs',
    name:'Rohan',
    line:'td',
    status:'htt',
    owner:'Krishna'
}

 ]


  return (
    <div className='userpg1'>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Entity Type</th>
      <th>Name</th>
      <th>Line of Business</th>
      <th>Status</th>
      <th>Business owner</th>
    </tr>
  </thead>
  <tbody>
      {data.map((val)=>{ 

      return(
      <tr>
      <td>{val.Entity}</td>
      <td>{val. name}</td>
      <td>{val.line}</td>
      <td>{val. status}</td>
      <td>{val. owner}</td>
    </tr>

       ) })}
    
  
  </tbody>
</Table>
    </div>
  )
}

export default Customer
