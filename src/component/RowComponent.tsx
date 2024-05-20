import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { appInfo } from "../constains/appInfo";

interface props {
  children?: ReactNode;
  minHeight?: number;
  maxHeight?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const RowComponent = ({
  children,
  color,
  minHeight,
  maxHeight,
  height,
  style,
}: props) => {
  return (
    <View
      style={[
        {
          backgroundColor: color,
          minHeight: minHeight,
          maxHeight: maxHeight,
          height: height,
          width: "100%",
          flexDirection: "row",
        },
        style && style,
      ]}
    >
      {children}
    </View>
  );
};

export default RowComponent;
