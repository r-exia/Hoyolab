import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@rneui/base";

interface props {
  children: React.ReactNode;
  Data: string | object;
  isAvatar?: boolean;
  isButton?: boolean;
}
interface DataObject {
  [key: string]: string[];
}

const SkeletonComponent = ({ children, Data, isAvatar, isButton }: props) => {
  const [isLoading, setIsLoading] = useState(Boolean);

  useEffect(() => {
    if (typeof Data === "string") {
      Data.length > 0 ? setIsLoading(false) : setIsLoading(true);
    }
    if (typeof Data === "object") {
      const object = Object.keys(Data);
      object.forEach((data) => {
        if ((Data as DataObject)[data].length > 0) {
          setIsLoading(false);
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
          style={{ width: "40%", height: "15%", marginBottom: "2%" }}
        />
        <Skeleton
          animation="wave"
          circle
          style={{ width: "80%", height: "15%" }}
        />
      </>
    ) : (
      <>{children}</>
    );
  };

  const AvatarComponent = () => {
    return isAvatar ? (
      <>
        {isLoading ? (
          <Skeleton circle width={50} height={50} />
        ) : (
          <>{children}</>
        )}
      </>
    ) : (
      <DefaultComponent />
    );
  };

  return isButton ? <>{!isLoading && <>{children}</>}</> : <AvatarComponent />;
};

export default SkeletonComponent;

const styles = StyleSheet.create({});
