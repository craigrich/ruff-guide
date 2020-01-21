import React from "react";
import { Anchor, Box, ResponsiveContext, Text } from "grommet";
import styled from "styled-components";

const data = [
  // ["app name", "home", "beta", "sponsors"],
  // ["legal stuff", "terms", "privacy", "security"],
  ["about", "contact"]
];

const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;

const getContent = () => {
  return data.map((item, index) => (
    <Box gap="medium" key={index + item[0]}>
      <Text weight="bold" size="small">
        {item[0]}
      </Text>
      <StyledAnchor href="/" size="small" color="black">
        {item[1]}
      </StyledAnchor>
      <StyledAnchor href="/" size="small" color="black">
        {item[2]}
      </StyledAnchor>
      <StyledAnchor href="/" size="small" color="black">
        {item[3]}
      </StyledAnchor>
    </Box>
  ));
};

const FooterContent = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        alignSelf="center"
        gap={size !== "xsmall" && size !== "small" ? "xlarge" : "small"}
      >
        <StyledAnchor href="/" size="small" color="black">
          Contact
        </StyledAnchor>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { FooterContent };
