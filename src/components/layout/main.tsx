import { Box, Container } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import ThinkeristLoader from '../../utils/thinkerist-loader';
import Header from '../header';
import Id from '../id';

const Thinkerist  = lazy(() => import('../thinkerist'));

function Main() {

  return(
      <>
          <Header />
          <Id />
          <Suspense fallback={<ThinkeristLoader />}>
             <Box
               position={'absolute'}
               minW={'100%'}
               zIndex={100}
               pointerEvents={'none'}
             >
               <Container p={0} maxW={'container.md'}>
               <Thinkerist />
               </Container>
             </Box>
          </Suspense>
      </>
  )
}

export default Main