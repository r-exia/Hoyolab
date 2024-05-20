import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

interface props {
  size: number;
  round?: boolean;
  url: string;
}

const AvatarComponent = (props: props) => {
  const { size, round, url } = props;

  return (
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: round ? 100 : 0,
        backgroundColor: "white",
      }}
      contentFit="cover"
      source={{ uri: url }}
    />
  );
};

export { AvatarComponent };

const styles = StyleSheet.create({});
