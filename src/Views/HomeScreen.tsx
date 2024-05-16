import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  AvatarComponent,
  ButtonTextCompoment,
  ImageComponent,
  RowCompoment,
  SkeletonComponent,
} from "../component";
import { appInfo } from "../constains/appInfo";
import { StyleGlobal } from "../Styles/StyleGlobal";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => {
  let text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  aperiam exercitationem aliquid, repellendus quae alias dolores
  eligendi ea beatae vitae quis doloremque quibusdam, molestias
  non. Perspiciatis nemo laudantium rerum laboriosam.`;
  text = text.substring(0, 120);

  const state: {
    userName: string;
    creatAt: string;
    game: string;
    avatar: string;
    images: string[];
  } = {
    userName: "Tai tồ",
    creatAt: " 1 giờ trước - Honkai",
    game: "Honkai Impact 3rd",
    avatar:
      "https://vnn-imgs-a1.vgcloud.vn/vnreview.vn/image/11/44/57/1144578.jpg",
    images: [
      "https://upload-os-bbs.hoyolab.com/upload/2024/05/12/111816991/034be374ffb331e6b0dbc16ed3c0fbf6_933372970025389044.jpg",
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/01/283700571/d214ba18907113f365ccf11acac7360d_8045971794910383490.jpg",
      "https://upload-os-bbs.hoyolab.com/upload/2024/05/14/184133439/dd0fd8f3fd576a0142658de44ac859f7_1810763935896167165.jpg",
    ],
  };

  const handleAd = () => {
    console.log("toi day");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.content}>
            {/* Avatar */}
            <RowCompoment
              height={appInfo.widthWindows / 5}
              style={{ alignItems: "center" }}
            >
              <SkeletonComponent Data={state.avatar} isAvatar>
                <AvatarComponent
                  url={state.avatar}
                  size={50}
                  round
                ></AvatarComponent>
              </SkeletonComponent>

              <View
                style={{
                  height: "80%",
                  width: "50%",
                  justifyContent: "center",
                  paddingLeft: "3%",
                }}
              >
                <SkeletonComponent Data={state}>
                  <Text style={StyleGlobal.textName}>Tai tồ</Text>
                  <Text style={StyleGlobal.textInfo}>1 giờ trước - Honkai</Text>
                </SkeletonComponent>
              </View>
              <SkeletonComponent Data={state.avatar} isButton>
                <ButtonTextCompoment color="blue" isBG onPress={handleAd}>
                  <Text style={[StyleGlobal.text, { color: "blue" }]}>
                    Theo dõi
                  </Text>
                </ButtonTextCompoment>
              </SkeletonComponent>
            </RowCompoment>

            {/* Nội dung bài viết */}
            <RowCompoment
              minHeight={appInfo.widthWindows * 0.1}
              maxHeight={appInfo.widthWindows * 0.15}
              style={{ flexDirection: "column" }}
            >
              <SkeletonComponent Data={text}>
                <Text>{text}</Text>
              </SkeletonComponent>
            </RowCompoment>
            {/* Nội dụng hình ảnh, vidoes */}
            <RowCompoment
              minHeight={appInfo.widthWindows * 0.4}
              maxHeight={appInfo.widthWindows * 0.7}
            >
              <ImageComponent Data={state.images} />
            </RowCompoment>

            <RowCompoment height={appInfo.widthWindows / 7}></RowCompoment>
            <RowCompoment height={appInfo.widthWindows / 7}></RowCompoment>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  box: {
    width: appInfo.widthWindows,

    minHeight: appInfo.widthWindows * 1,
    maxHeight: appInfo.widthWindows * 1.5,
    paddingHorizontal: "3%",
  },
  content: {
    width: "100%",
    height: "90%",
  },
});
