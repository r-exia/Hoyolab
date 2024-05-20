import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { appInfo } from "../constains/appInfo";
import {
  AvatarComponent,
  ButtonTextComponent,
  ImageComponent,
  RowComponent,
  SkeletonComponent,
} from "../component";
import { StylesGlobal } from "../Styles/StylesGlobal";

import {
  createOneData,
  getAllData,
  updateOneData,
  ImportFileJson,
} from "../apis/firebaseComponent";

const HomeScreen = () => {
  let text: string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
  doloremque, assumenda ratione dolorem omnis, deleniti minima
  tenetur quam temporibus iure dolores! Dolorum sit earum officia
  quod harum et facere optio.`;
  text = text.substring(0, 170);

  const state: {
    useName: string;
    createAt: string;
    game: string;
    avatar: string;
    images: string[];
  } = {
    useName: "Hung Hoang",
    createAt: "1 giờ trước",
    game: "Genshin impact",
    avatar:
      "https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80",
    images: [
      "https://upload-os-bbs.hoyolab.com/upload/2024/05/06/156860161/9f085bde44721243d2fddce9a755087b_8118248902735657123.jpg",
    ],
  };

  const handleAddCount = (): void => {
    console.log("Add count");
  };

  const handleCreateOneData = useCallback(() => {
    createOneData({
      name: "Hung Hoang",
      email: "phihung@gmail.com",
      imageUrl:
        "https://img-os-static.hoyolab.com/communityWeb/upload/40ae5077094f7c08c5120b489361fb3c.png?x-oss-process=image%2Fresize%2Cs_600%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80",
    });
    // ImportFileJson();
  }, []);

  const handleUpdateOneData = useCallback(() => {
    updateOneData({
      name: "",
      email: "",
      imageUrl: "",
    });
  }, []);

  const handleGetData = useCallback(() => {
    getAllData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.content}>
            <RowComponent
              height={appInfo.widthWindows / 5}
              style={{ alignItems: "center" }}
            >
              <SkeletonComponent Data={state.avatar} isAvatar>
                <AvatarComponent size={50} round url={state.avatar} />
              </SkeletonComponent>

              <View
                style={{
                  height: "80%",
                  width: "53%",
                  justifyContent: "center",
                  paddingLeft: "3%",
                }}
              >
                <SkeletonComponent Data={state}>
                  <Text style={StylesGlobal.textName}>Hung Hoang</Text>
                  <Text style={StylesGlobal.textInfo}>
                    1 giờ trước - Genshin impact
                  </Text>
                </SkeletonComponent>
              </View>
              <SkeletonComponent Data={state.avatar} isButton>
                <ButtonTextComponent onPress={handleAddCount} color="red">
                  <Text style={[StylesGlobal.text, { color: "red" }]}>
                    Theo dõi
                  </Text>
                </ButtonTextComponent>
              </SkeletonComponent>
            </RowComponent>

            <RowComponent
              minHeight={appInfo.widthWindows * 0.1}
              maxHeight={appInfo.widthWindows * 0.15}
              style={{ flexDirection: "column" }}
            >
              <SkeletonComponent Data={text}>
                <Text>{text}</Text>
              </SkeletonComponent>
            </RowComponent>

            {/* imageContainer */}
            <RowComponent
              minHeight={appInfo.widthWindows * 0.4}
              maxHeight={appInfo.widthWindows * 0.8}
            >
              <ImageComponent Data={state.images} />
            </RowComponent>
            <TouchableOpacity
              style={{ backgroundColor: "red", padding: "5%" }}
              onPress={handleCreateOneData}
            >
              <Text>Create data</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: "blue", padding: "5%" }}
              onPress={handleGetData}
            >
              <Text>Get Data</Text>
            </TouchableOpacity>
            <RowComponent height={appInfo.widthWindows / 7} />
            <RowComponent height={appInfo.widthWindows / 7} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: appInfo.widthWindows,

    maxHeight: appInfo.widthWindows * 1.5,
    minHeight: appInfo.widthWindows * 1,
    paddingHorizontal: "3%",
  },
  content: {
    width: "100%",
  },
});

export default HomeScreen;
