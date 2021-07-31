import React, { useState, useRef, useContext } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import RestaurantSwipes from "./restaurant.swipes.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import xtype from "xtypejs";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";

// This component is fetching the users using Axios
// this is also was is displayed in the Tinder screen
// the functionality here is what i want to use to render the resturants

export const TinderCard = () => {
  const [topCurrentIndex, setTopCurrentIndex] = useState(0);
  const [bottomCurrentIndex, setBottomCurrentIndex] = useState(0);
  const { restaurants } = useContext(RestaurantsContext);
  const swipesRef = useRef(null);

  const half = Math.ceil(restaurants.length / 2);
  const firstHalf = restaurants.slice(0, half);
  const secondHalf = restaurants.slice(-half);

  function handleLikeFirstHalf() {
    console.log("############# LIKE First Half top ##########");
    nextUserFirstHalf();
  }

  function handlePassFirstHalf() {
    console.log("$$$$$$$$ PASS First Half top $$$$$$$$");
    nextUserFirstHalf();
  }

  function handleLikeSecondHalf() {
    console.log("############# LIKE Second Half Bottom ##########");
    nextUserSecondHalf();
  }

  function handlePassSecondHalf() {
    console.log("$$$$$$$$ PASS Second Half Bottom $$$$$$$$");
    nextUserSecondHalf();
  }

  function nextUserFirstHalf() {
    const nextIndex =
      firstHalf.length - 2 === topCurrentIndex ? 0 : topCurrentIndex + 1;
    setTopCurrentIndex(nextIndex);
  }
  function nextUserSecondHalf() {
    const nextIndex =
      secondHalf.length - 2 === bottomCurrentIndex ? 0 : bottomCurrentIndex + 1;
    setBottomCurrentIndex(nextIndex);
  }
  return (
    <View style={styles.container}>
      <View style={styles.swipes}>
        {firstHalf.length > 1 &&
          firstHalf.map(
            (u, i) =>
              topCurrentIndex === i && (
                <RestaurantSwipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={topCurrentIndex}
                  restaurants={firstHalf}
                  handleLike={handleLikeFirstHalf}
                  handlePass={handlePassFirstHalf}
                />
              )
          )}
      </View>
      <View style={styles.swipes}>
        {secondHalf.length > 1 &&
          secondHalf.map(
            (u, i) =>
              bottomCurrentIndex === i && (
                <RestaurantSwipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={bottomCurrentIndex}
                  restaurants={secondHalf}
                  handleLike={handleLikeSecondHalf}
                  handlePass={handlePassSecondHalf}
                />
              )
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
