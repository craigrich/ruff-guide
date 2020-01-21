import React, { Component } from "react";

import styled, { css } from "styled-components";
import {
  Box,
  Button,
  Collapsible,
  Image,
  Heading,
  Paragraph,
  Text,
  ThemeContext
} from "grommet";

import { Favorite } from "grommet-icons";

const filledIcon = css`
  path[fill="none"] {
    fill: ${props => props.theme.colors["dark-4"]};
  }
`;

const CardFavorite = styled(Favorite)`
  ${props => (props.checked ? filledIcon : "")}
`;

// notice that this is not named Card.
// it is not generic. it is a card that works well for restaurant reviews
// the implementation is quite simple, so converting this to anything else is really easy
interface Props {
  restaurant: any;
}

class RestaurantCard extends Component<Props> {
  state = {
    showReviews: false
  };
  renderCardHeader = () => {
    const { restaurant } = this.props;
    let totalRating = undefined;
    const hasReviews = restaurant.reviews && restaurant.reviews.length;
    if (hasReviews) {
      totalRating =
        Math.round(
          (restaurant.reviews.reduce(
            (rating, review, index) => rating + review.rating,
            0
          ) /
            restaurant.reviews.length) *
            100
        ) / 100;
    }
    return (
      <Box pad={{ horizontal: "small" }}>
        <Box
          margin={{ top: "small" }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level="3" margin="none">
              {restaurant.name}
            </Heading>
          </Box>
          <Box
            round="xsmall"
            pad={{ vertical: "xxsmall", horizontal: "medium" }}
            background="brand"
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <Text size="medium">58</Text>
          </Box>
        </Box>
        <Text size="small" color="dark-5" margin={{ vertical: "small" }}>
          {restaurant.description}
        </Text>
      </Box>
    );
  };
  renderCardFooter = () => {
    const { restaurant } = this.props;
    const hasReviews = restaurant.reviews && restaurant.reviews.length;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Box
            tag="footer"
            direction="row"
            align="center"
            justify="between"
            pad={{ left: "small", vertical: "small" }}
          >
            {hasReviews ? (
              <Button
                a11yTitle={`Reviews for ${restaurant.name}`}
                onClick={() =>
                  this.setState({ showReviews: !this.state.showReviews })
                }
              >
                <Box round="small">
                  <Text color="brand" size="small">
                    <strong>REVIEWS</strong>
                  </Text>
                </Box>
              </Button>
            ) : (
              <span />
            )}
          </Box>
        )}
      </ThemeContext.Consumer>
    );
  };

  render() {
    const { restaurant = {}, ...rest } = this.props;
    return (
      <Box
        // width="260px"
        // width="fill"
        onClick={() => {
          alert("clicked");
        }}
        height="280px"
        round="xxsmall"
        elevation="small"
        overflow="hidden"
        style={{ position: "relative" }}
        {...rest}
      >
        <Box height="160px">
          <Image src={restaurant.image} fit="cover" />
        </Box>
        {this.renderCardHeader()}
      </Box>
    );
  }
}

export { RestaurantCard };
