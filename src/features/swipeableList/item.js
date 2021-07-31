import React from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  Easing,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;
const RIGHT_BUTTON_THRESHOLD = SCREEN_WIDTH / 15;
const FORCE_TO_OPEN_THRESHOLD = SCREEN_WIDTH / 3.5;
const FORCING_DURATION = 350;
const SCROLL_THRESHOLD = SCREEN_WIDTH / 15;
const LEFT_BUTTONS_THRESHOLD = SCREEN_WIDTH / 7;

export const Item = () => {};
