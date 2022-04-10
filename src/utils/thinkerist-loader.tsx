// credits to craftz.dog and three.js samples

import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const ThinkeristSpinner = () => (
  <Spinner
    size="xl"
    position={'absolute'}
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ThinkeristContainer = forwardRef(({ children }:any, ref:any) => (
  <motion.div
    animate={{ y: -50 }}
    transition={{
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2.5,
    repeatDelay: 0.2
  }}>
  <Box
    ref={ref}
    display='flex'
    zIndex={8}
    justifyContent={'center'}
    alignItems={'center'}
    ml={{base:'-17vw',sm:'-15vw',md:'-5vw',xl:'5vw'}}
    minH={{base:'60vw',sm:'50vw', md:'30vw', xl:'0vw'}}
    minW={{base:'60vw',sm:'50vw', md:'30vw', xl:'0vw'}}
    w={'35vw'}
    h={'35vw'}
    maxW={'400px'}
    maxH={'400px'}
    pointerEvents={'none'}
  >
    {children}
  </Box>
  </motion.div>
))

const Loader = () => {
  return (
    <ThinkeristContainer>
      <ThinkeristSpinner />
    </ThinkeristContainer>
  )
}

export default Loader
