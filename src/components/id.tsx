import { Box, Image, Container, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { FaAt, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa"
import Section from "./section"

function Id() {
    return(
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'90vh'} minH={'750px'} maxH={'900px'}>
            <Section delay={0.1}>
              <Container bg='white' color={'#2c2c2c'} mt={'5vh'} p={0} w={{base: '80vw', sm: '50vw'}} maxW={350} minW={{base: 0, sm: 343}} >
                <Image boxSize={'100%'} src="https://raw.githubusercontent.com/suntoes/suntoes/master/public/profile.jpeg"></Image>
                <Box p={8}>
                  <Heading fontSize={26}>Mar Santos</Heading>
                  <Stack direction={'row'} align={'center'} fontSize={14}>
                    <FaBriefcase /><Text>Pamantasan ng Lungsod ng Valenzuela</Text>
                  </Stack>
                  <Stack direction={'row'} align={'center'} fontSize={14}>
                    <FaMapMarkerAlt /><Text>Metro Manila, Philippines</Text>
                  </Stack>
                  <Stack direction={'row'} align={'center'} fontSize={14}>
                    <FaAt /><Text>mar.suntoes@gmail.com</Text>
                  </Stack>
                  <Stack direction={'row'} mt={7} justifyContent={'center'} fontSize={14}>
                    <Text fontWeight={700}>シンプルイズベスト</Text>
                  </Stack>
                  <Stack direction={'row'} mt={6} mb={1} justifyContent={'center'} fontSize={14}>
                    <Link href='https://sayout.me/say/suntoes' target={'_blank'} color="#777" fontWeight={700}>
                    send me an anonymous feedback
                    </Link>
                  </Stack>
                </Box>
              </Container>
            </Section>
        </Box>
    )
}

export default Id