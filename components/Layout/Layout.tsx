import { Grommet, grommet, Box } from "grommet";
import { Header } from "components/Layout/Header";
import { Footer } from "./Footer";

const Layout = props => (
  <Grommet full theme={grommet}>
    <Header />
    <Box
      height={{ min: "100%" }}
      style={{ maxWidth: 1280, margin: "0 auto" }}
      pad={{ top: "large", bottom: "xlarge", horizontal: "xlarge" }}
    >
      {props.children}
    </Box>
    <Footer />
  </Grommet>
);

export { Layout };
