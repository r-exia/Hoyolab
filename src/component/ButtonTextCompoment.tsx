import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyleGlobal } from "../Styles/StyleGlobal";

interface props {
  children: React.ReactNode;
  color: string;
  isBG?: boolean;
  onPress?: () => void;
}

const ButtonTextCompoment = ({ children, color, isBG, onPress }: props) => {
  return isBG ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: color,
        borderRadius: 100,
        borderWidth: 2,
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
  );
};

export default ButtonTextCompoment;

const styles = StyleSheet.create({});
