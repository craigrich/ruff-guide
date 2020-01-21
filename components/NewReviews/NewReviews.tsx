import { Box, Heading, DataTable, Meter, Text } from "grommet";

const NewReviews = () => (
  <>
    <Heading margin="none" level={4}>
      New Reviews
    </Heading>
    <DataTable
      pad={{ top: "xsmall" }}
      onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
      columns={[
        {
          property: "name",
          header: false,
          primary: true
        },
        {
          align: "end",
          property: "percent",
          header: false,
          render: datum =>
            !datum.percent || (
              <Box pad={{ horizontal: "medium", vertical: "xsmall" }}>
                <Box
                  round="xsmall"
                  pad={{ vertical: "xxsmall", horizontal: "medium" }}
                  background="accent-1"
                  width="xxsmall"
                  alignSelf="end"
                >
                  <Text alignSelf="center" size="medium">
                    {datum.percent}
                  </Text>
                </Box>
              </Box>
            )
        }
      ]}
      data={[
        { name: "Alan", percent: 20 },
        { name: "Bryan", percent: 30 },
        { name: "Chris", percent: 40 },
        { name: "Eric", percent: 80 },
        { name: "Alan1", percent: 20 },
        { name: "Bryan1", percent: 30 },
        { name: "Chris1", percent: 40 },
        { name: "Eric1", percent: 80 },
        { name: "Alan2", percent: 20 },
        { name: "Bryan2", percent: 30 },
        { name: "Chris2", percent: 40 },
        { name: "Eric2", percent: 80 }
      ]}
    />
  </>
);

export { NewReviews };
