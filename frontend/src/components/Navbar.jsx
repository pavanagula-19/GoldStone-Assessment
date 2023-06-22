import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'

function Navbar() {
     return (
          <Flex
               zIndex='100'
               minWidth='max-content'
               alignItems='center'
               gap='2'
               p='10px 25px'
               position="sticky"
               top='0'
               left='0'
               backdropFilter="blur(10px)"
               boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
               <Box p='2'>
                    <Heading size='lg'>User Panel</Heading>
               </Box>
               <Spacer />
               <ButtonGroup gap='2'>
                    <Button variant='outline' colorScheme='teal'>Home</Button>
                    <Button variant='outline' colorScheme='teal'>About us</Button>
               </ButtonGroup>
          </Flex>
     )
}

export default Navbar