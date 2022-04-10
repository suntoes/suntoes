import { FaIdCard, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Box, Container, Flex, Heading, Button, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import ThemeButton from './theme-button';

function Header() {
    return(
      <Box
        position={'fixed'}
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#11111140')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
      >
        <Container
          display="flex"
          p={2}
          pl={{base:10, md: 0}}
          pr={{base:10, md: 0}}
          maxW="container.md"
          minW={343}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={-1}>
            <Heading as="h1" size={'l'} letterSpacing="tight">
              Mar Santos
            </Heading>
          </Flex>
          <Stack 
            direction={'row'}
            alignItems={'center'}  
          >
          <Stack direction={'row'} display={{base: 'none', md: 'flex'}} alignItems={'center'}>
            <Link href='https://github.com/suntoes' target={'_blank'} color='inherit'><FaGithub size={35}/></Link>
            <Link href='https://www.linkedin.com/in/mar-santos/' target={'_blank'} color='inherit'><FaLinkedin size={39}/></Link>
          </Stack>
          <Link href='https://drive.google.com/file/d/1gVULdWWcDBhkvX6fy5iKjgyShTC3qAoK/view?usp=sharing' target={'_blank'} >
            <Button 
              leftIcon={<FaIdCard />}
              borderRadius={0}
              variant='outline'
              borderColor={useColorModeValue('#0c3455', '#e9e29f')}
              color={useColorModeValue('#0c3455', '#e9e29f')}
            > RESUME
            </Button>
          </Link>
          <ThemeButton />
          </Stack>
        </Container>
      </Box>
    )
}

export default Header