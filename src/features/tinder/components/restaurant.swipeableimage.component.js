import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// This is the component that displays LIKE and NOPE on the Swipe left or right

export const RestaurantSwipeableImage = ({
  restaurant,
  willLike,
  willPass,
}) => {
  return (
    <View>
      <Image source={{ uri: restaurant.photos[0] }} style={styles.photo} />
      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: "#64EDCC" }}>LIKE</Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: "#F06795" }}>NOPE</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>
            {restaurant.name}
          </Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {restaurant.rating}
          </Text>
        </View>
        <View style={styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="white" />
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {restaurant.address}
          </Text>
        </View>
      </View>
    </View>
  );
};

const boxStyle = {
  position: "absolute",
  top: "50%",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderWidth: 3,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  likeBox: {
    ...boxStyle,
    left: 100,
    borderColor: "#64EDCC",
  },
  passBox: {
    ...boxStyle,
    right: 40,
    borderColor: "#F06795",
  },
  photo: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPrimary: {
    color: "yellow",
    fontSize: 35,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "white",
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
