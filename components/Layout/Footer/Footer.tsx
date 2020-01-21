import React from "react";
import { Box, ResponsiveContext, Text } from "grommet";

import { FooterContent } from "./FooterContent";
import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";

const Footer = ({ ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        border={{ side: "top", color: "light-4" }}
        pad={{ top: "large", horizontal: "xlarge", bottom: "medium" }}
        {...rest}
      >
        <Box gap="large" align="start">
          <SocialMedia />
        </Box>
        <FooterContent />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { Footer };
