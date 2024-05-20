import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import RowComponent from "./RowComponent";
import { appInfo } from "../constains/appInfo";

import * as ImageManipulator from "expo-image-manipulator";

interface props {
  Data: string[];
}

const ImageComponent = ({ Data }: props) => {
  const [ImageWidth, setImageWidth] = useState<number>(0);
  const [ImageHeight, setImageHeight] = useState<number>(0);

  const handleImage = async () => {
    const { width, height } = await ImageManipulator.manipulateAsync(
      Data[0],
      [],
      { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
    );
    setImageWidth(width);
    setImageHeight(height);
  };

  useEffect(() => {
    handleImage();
  }, [Data]);

  const OneImage = () => {
    return ImageWidth > ImageHeight ? (
      <>
        <Image
          source={{ uri: Data[0] }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            borderRadius: 10,
          }}
        />
      </>
    ) : (
      <>
        <Image
          source={{ uri: Data[0] }}
          style={{
            width: "60%",
            height: appInfo.widthWindows * 0.8,
            backgroundColor: "red",
            borderRadius: 10,
          }}
        />
      </>
    );
  };

  const TwoImage = () => {
    return (
      <RowComponent
        style={{
          justifyContent: "space-between",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          style={{ height: "100%", width: "49%" }}
          source={{ uri: Data[0] }}
        />

        <Image
          style={{ height: "100%", width: "49%" }}
          source={{ uri: Data[1] }}
        />
      </RowComponent>
    );
  };

  return Data.length > 1 ? <TwoImage /> : <OneImage />;
};

export default ImageComponent;

const styles = StyleSheet.create({});
