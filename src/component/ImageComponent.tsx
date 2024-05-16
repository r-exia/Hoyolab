import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import RowCompoment from "./RowCompoment";
import * as ImageManipulator from "expo-image-manipulator";
import { appInfo } from "../constains/appInfo";

interface props {
  Data: string[];
}

const ImageComponent = ({ Data }: props) => {
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);

  const handleImage = async (uri: string) => {
    const { width, height } = await ImageManipulator.manipulateAsync(uri, [], {
      compress: 0.5,
      format: ImageManipulator.SaveFormat.JPEG,
    });
    setImageWidth(width);
    setImageHeight(height);
  };

  useEffect(() => {
    handleImage(Data[0]);
  }, [Data]);

  const OneImage = () => {
    return imageWidth > imageHeight ? (
      <>
        <Image
          source={{ uri: Data[0] }}
          style={{
            width: "100%",
            height: "100%",

            borderRadius: 10,
          }}
        />
      </>
    ) : (
      <>
        <Image
          source={{ uri: Data[0] }}
          style={{
            width: "100%",
            height: appInfo.widthWindows * 0.8,

            borderRadius: 10,
          }}
        />
      </>
    );
  };

  const TwoImage = () => {
    return (
      <RowCompoment
        style={{
          justifyContent: "space-between",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: Data[0] }}
          style={{
            width: "49%",
            height: "100%",
          }}
        />

        <Image
          source={{ uri: Data[1] }}
          style={{
            width: "49%",
            height: "100%",
          }}
        />
      </RowCompoment>
    );
  };

  return Data.length > 1 ? <TwoImage></TwoImage> : <OneImage />;
};

export default ImageComponent;

const styles = StyleSheet.create({});
