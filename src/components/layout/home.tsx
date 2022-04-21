import { Container } from'@chakra-ui/react'
import Post from '../post'
import { experiences, projects, trainings } from '../../lib/notes'

const arr = [experiences, projects, trainings]

function Home({page = 0}) {

  return(
    <>
      <Container
        display="flex"
        flexDirection={'column'}
        p={0}
        maxW="container.md"
        minW={{base: 200, sm: 343}}
        pl={{base:10, sm:10, md: 0}}
        pr={{base:10, sm:10, md: 0}}
        mb={0}
        >
        <Post 
          //@ts-ignore
          arr={arr[page]}/>
      </Container>
    </>
  )
}

export default Home
