import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaIdCard } from "react-icons/fa";

function Footer() {
    return(
        <Box
            display={'flex'}
            justifyContent='center'
            alignItems={'center'}
            mt={6}
            minH={200}
            w='100%'>
            <Stack alignItems={'center'}>
                <Text textAlign={'center'} mb={5}>
                    Bored? visit merry go ship{' '}
                    <Link href="https://www.artstation.com/taj_tajima" target={'_blank'}>3d creator</Link>
                    {' '}or my site's{' '}<Link href="https://www.craftz.dog/" target={'_blank'}>inspiration</Link>
                </Text>
                <Stack direction='row'>
                    <Link href='https://github.com/suntoes' color='inherit'><FaGithub size={35}/></Link>
                    <Link href='https://www.linkedin.com/in/mar-santos/' color='inherit'><FaLinkedin size={39}/></Link>
                    <Link href='https://drive.google.com/file/d/1gVULdWWcDBhkvX6fy5iKjgyShTC3qAoK/view?usp=sharing' color='inherit'><FaIdCard size={39}/></Link>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer