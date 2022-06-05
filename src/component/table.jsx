import React, {useState , useEffect} from 'react'
import axios from 'axios'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'


export const Tables = () => {
const [items,setItems] = useState([])

useEffect(() => {
axios.get
("http://localhost:8080/table" ) 
         .then(r =>{
             console.log(r.data)   
     setItems(r.data)
         })
},[])

  return (
    <div>
      <h1>Table</h1>
      <TableContainer>
  <Table variant='striped' colorScheme='blue'>
 
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Address</Th>
        <Th>Department</Th>
        <Th isNumeric>Salary</Th>
        <Th>maritial</Th>
        <Th>Files</Th>
      </Tr>
    </Thead>
    <Tbody>

{ items.map((e)=>{
  return   <Tr>
        <Td>{e.name}</Td>
        <Td>{e.age}</Td>
        <Td>{e.address}</Td>
        <Td>{e.department}</Td>
        <Td isNumeric>{e.salary}</Td>
        <Td>{e.status}</Td>
        <Td>{e.photo}</Td>
        <Td><button>Delete</button></Td>


      </Tr>
}) } 
    </Tbody>
  </Table>
</TableContainer>
    </div>
  )
}
