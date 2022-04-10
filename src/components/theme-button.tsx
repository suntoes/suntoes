import { motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()


  return (
    <motion.div
      key={useColorModeValue('light', 'dark')}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{ duration: 0.2}}
    >
      <IconButton
        aria-label="toggle theme"
        bg={useColorModeValue('#0c3455', '#e9e29f')}
        borderRadius={0}
        color={useColorModeValue('white', '#1c1c1f')}
        icon={useColorModeValue(<FaMoon />, <FaSun size={23}/>)}
        onClick={()=>{
          setTimeout(()=>{
            toggleColorMode()
          }, 100);
        }}
      ></IconButton>
    </motion.div>
  )
}

export default ThemeButton