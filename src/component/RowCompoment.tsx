import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { Children, ReactNode } from "react";
import { appInfo } from "../constains/appInfo";

interface props {
  children?: ReactNode;
  minHeight?: number;
  maxHeight?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const RowCompoment = ({
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
          width: "100%",
          height: height,
          flexDirection: "row",
        },
        style && style,
      ]}
    >
      {children}
    </View>
  );
};

export default RowCompoment;

const styles = StyleSheet.create({});
