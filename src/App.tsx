import { ChakraProvider, Container } from "@chakra-ui/react";
import Main from "./components/layout/main";
import theme from "./lib/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Main />
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
