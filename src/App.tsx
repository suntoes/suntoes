import { ChakraProvider, Container } from "@chakra-ui/react";
import Main from "./components/layout/main";
import theme from "./lib/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { lazy, Suspense } from "react";
import ThinkeristLoader from "./utils/thinkerist-loader";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const Thinkerist  = lazy(() => import('./components/thinkerist'));

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Main />
      <Suspense fallback={<ThinkeristLoader />}>
          <Container
            position={'fixed'}
            left={0}
            top={'60vh'}
            pointerEvents={'none'}
          ><Thinkerist />
          </Container>
      </Suspense>
      <Router>
        <NavBar>
            <AnimatedRoutes />
        </NavBar>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
