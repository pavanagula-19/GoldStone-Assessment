import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Skeleton } from "@chakra-ui/react"

function Lading() {
     return (
          <TableContainer>
               <Table variant='simple'>
                    <TableCaption><Skeleton height='30px' /></TableCaption>
                    <Thead>
                         <Tr>
                              <Th><Skeleton height='30px' /></Th>
                              <Th><Skeleton height='30px' /></Th>
                              <Th><Skeleton height='30px' /></Th>
                              <Th><Skeleton height='30px' /></Th>
                              <Th><Skeleton height='30px' /></Th>
                              <Th><Skeleton height='30px' /></Th>
                              <Th><Skeleton height='30px' /></Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         {
                              [1, 2, 3, 4, 5, 6, 7].map(el => <Tr key={el}>
                                   <Td><Skeleton height='30px' /></Td>
                                   <Td><Skeleton height='30px' /></Td>
                                   <Td><Skeleton height='30px' /></Td>
                                   <Td><Skeleton height='30px' /></Td>
                                   <Td><Skeleton height='30px' /></Td>
                                   <Td><Skeleton height='30px' /></Td>
                                   <Td><Skeleton height='30px' /></Td>
                              </Tr>)
                         }
                    </Tbody>
               </Table>
          </TableContainer>
     )
}

export default Lading