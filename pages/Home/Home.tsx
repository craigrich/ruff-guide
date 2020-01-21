import { Layout } from "components/Layout";
import { CriticHighlights } from "components/CriticHighlights";
import { Box, Heading, Grid, DataTable, Text, Meter } from "grommet";
import { NewReviews } from "components/NewReviews";

const Home = () => (
  <Layout>
    <CriticHighlights />
    <Box
      margin={{ vertical: "large" }}
      pad="large"
      background={{ color: "brand", opacity: true }}
    >
      <Heading alignSelf="center" margin="none" level={4}>
        Advert
      </Heading>
    </Box>

    <Grid
      fill
      areas={[
        { name: "reviews", start: [0, 0], end: [0, 0] },
        { name: "advert", start: [1, 0], end: [1, 0] }
      ]}
      columns={["flex", "1/4"]}
      rows={["flex"]}
      gap="medium"
    >
      <Box gridArea="reviews">
        <NewReviews />
      </Box>
      <Box
        gridArea="advert"
        height="800px"
        background={{ color: "brand", opacity: true }}
      >
        <Heading margin="none" alignSelf="center" level={4}>
          Advert
        </Heading>
      </Box>
    </Grid>
  </Layout>
);

export { Home };
