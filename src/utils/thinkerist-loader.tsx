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
    ml={{base:'-15vw',sm:'-20',md:'-16',xl:'-16'}}
    mt={{base:-200, xl: -225}}
    w={'50vw'}
    h={'50vw'}
    maxW={'350px'}
    maxH={'350px'}
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