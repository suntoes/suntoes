import { Box, Button, ButtonGroup, Container, Link, useColorModeValue } from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react"
import { FaCertificate, FaImage, FaLaptopCode } from "react-icons/fa";
import { Link as ReactLink, useLocation } from "react-router-dom";
import Section from "./section";

type Children = {
    children: ReactElement
}

function NavBar({children}:Children) {
    const location = useLocation();
    const [page, setPage] = useState(0);

    useEffect(()=>{
        const path = location.pathname;
        if(path === '/trainings') return setPage(2);
        if(path === '/projects') return setPage(1);
        setPage(0);
    }, [location])

    return(
        <>
        <Box w='100%'>
        <NavStacked page={page} setPage={setPage} />
        {children}
        <NavStacked page={page} setPage={setPage} />
        </Box>
        </>
    )
}

const NavStacked = ({page, setPage}:any) => (
    <Container display={'flex'} justifyContent={'center'} mt={0}>
        <Section delay={0.2}>
        <ButtonGroup w={{base: '80vw', sm: '50vw'}} maxW={350} minW={{base: 0, sm: 343}} isAttached>
        <Link as={ReactLink} to="/" w={'34%'}>
            <Button
                onClick={()=>setPage(0)}
                m={0}
                backgroundColor = { page === 0 ? '#2c2c2c' : 'white' }
                color = { page === 0 ? 'white' : '#2c2c2c' }
                _hover={{
                    backgroundColor: useColorModeValue('#0c3455', '#e9e29f'),
                    color: useColorModeValue('white', '#1c1c1f')
                }}
                borderRadius={0}
                w={'100%'} >
                <Box display={{base: 'none', md:'inline'}} >
                    Experiences
                </Box>
                <Box display={{base: 'inline', md:'none'}} >
                    <FaImage />
                </Box>
            </Button>    
        </Link>
        <Link as={ReactLink} to="/projects" w={'34%'}>
            <Button
                onClick={()=>setPage(1)}
                backgroundColor = { page === 1 ? '#2c2c2c' : 'white' }
                color = { page === 1 ? 'white' : '#2c2c2c' }
                _hover={{
                    backgroundColor: useColorModeValue('#0c3455', '#e9e29f'),
                    color: useColorModeValue('white', '#1c1c1f')
                }}
                borderRadius={0}
                w={'100%'} >
                <Box display={{base: 'none', md:'inline'}} >
                    Projects
                </Box>
                <Box display={{base: 'inline', md:'none'}} >
                    <FaLaptopCode />
                </Box>
            </Button>    
        </Link>
        <Link as={ReactLink} to="/trainings" w={'34%'}>
            <Button
                onClick={()=>setPage(2)}
                backgroundColor = { page === 2 ? '#2c2c2c' : 'white' }
                color = { page === 2 ? 'white' : '#2c2c2c' }
                _hover={{
                    backgroundColor: useColorModeValue('#0c3455', '#e9e29f'),
                    color: useColorModeValue('white', '#1c1c1f')
                }}
                borderRadius={0}
                w={'100%'} >
                <Box display={{base: 'none', md:'inline'}} >
                    Trainings
                </Box>
                <Box display={{base: 'inline', md:'none'}} >
                    <FaCertificate />
                </Box>
            </Button>    
        </Link>
        </ButtonGroup>
        </Section>
    </Container>
)

export default NavBar
