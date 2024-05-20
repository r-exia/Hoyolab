import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StylesGlobal } from "../Styles/StylesGlobal";

interface props {
  children: React.ReactNode;
  color: string;
  isBackground?: boolean;
  onPress?: () => void;
}

const ButtonTextComponent = ({
  children,
  color,
  isBackground,
  onPress,
}: props) => {
  return isBackground ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        borderRadius: 100,
        width: "22%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "2%",
      }}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: color,
        borderWidth: 1,
        borderRadius: 100,
        width: "22%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "2%",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ButtonTextComponent;

const styles = StyleSheet.create({});
