import React from "react";
import { Anchor, Box, Text, ResponsiveContext } from "grommet";
import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";

const Header = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        gridArea="nav"
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{ top: "medium", horizontal: "large" }}
      >
        <Anchor
          href="/"
          icon={<Logo />}
          color="black"
          label={
            size !== "xsmall" &&
            size !== "small" && <Text size="large">Foodie</Text>
          }
        />
        <SocialMedia />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { Header };
