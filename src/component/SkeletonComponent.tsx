import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@rneui/base";

interface props {
  children: React.ReactNode;
  Data: string | object;
  isAvatar?: boolean;
  isButton?: boolean;
}

interface DataObjectString {
  [key: string]: string;
}
const SkeletonComponent = ({ children, Data, isAvatar, isButton }: props) => {
  const [isLoading, setIsLoading] = useState(Boolean);

  useEffect(() => {
    if (typeof Data === "string") {
      Data.length > 0 ? setIsLoading(false) : setIsLoading(true);
    } else if (typeof Data === "object") {
      const object = Object.keys(Data);
      object.forEach((data) => {
        if ((Data as DataObjectString)[data].length > 0) {
          setIsLoading(false);
          return;
        } else {
          setIsLoading(true);
        }
      });
    }
  }, [Data]);

  const DefaultComponent = () => {
    return isLoading ? (
      <>
        <Skeleton
          animation="wave"
          circle
          style={{ width: "40%", height: "20%", marginBottom: "2%" }}
        ></Skeleton>
        <Skeleton
          animation="wave"
          circle
          style={{ width: "70%", height: "20%" }}
        ></Skeleton>
      </>
    ) : (
      <>{children}</>
    );
  };

  const AvavtarComponent = () => {
    return isAvatar ? (
      <>{isLoading ? <Skeleton circle width={50} height={50} /> : children}</>
    ) : (
      <DefaultComponent></DefaultComponent>
    );
  };
  return isButton ? (
    <>{!isLoading && <>{children}</>}</>
  ) : (
    <AvavtarComponent></AvavtarComponent>
  );
};

export default SkeletonComponent;

const styles = StyleSheet.create({});
