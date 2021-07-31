import React from "react";
import { Button, Image, View, Platform, Text, TextInput } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { TinderCard } from "../components/tinder-card.component";

export const TinderScreen = () => {
  return (
    <SafeArea>
      <TinderCard />
    </SafeArea>
  );
};
