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
  RowCompoment,
} from "../component";
import { appInfo } from "../constains/appInfo";
import { StyleGlobal } from "../Styles/StyleGlobal";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => {
  const text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  aperiam exercitationem aliquid, repellendus quae alias dolores
  eligendi ea beatae vitae quis doloremque quibusdam, molestias
  non. Perspiciatis nemo laudantium rerum laboriosam.`;
  const url: string =
    "https://vnn-imgs-a1.vgcloud.vn/vnreview.vn/image/11/44/57/1144578.jpg";

  const handleAd = () => {
    console.log("toi day");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.content}>
            <RowCompoment
              height={appInfo.widthWindows / 5}
              style={{ alignItems: "center" }}
            >
              <AvatarComponent url={url} size={50} round></AvatarComponent>
              <View
                style={{
                  height: "80%",
                  width: "50%",
                  justifyContent: "center",
                  paddingLeft: "3%",
                }}
              >
                <Text style={StyleGlobal.textName}>Tai tồ</Text>
                <Text style={StyleGlobal.textInfo}>1 giờ trước - Honkai</Text>
              </View>

              <ButtonTextCompoment color="gray" isBG onPress={handleAd}>
                <Text style={[StyleGlobal.text, { color: "blue" }]}>
                  Theo dõi
                </Text>
              </ButtonTextCompoment>
            </RowCompoment>
            <RowCompoment
              minHeight={appInfo.widthWindows * 0.1}
              maxHeight={appInfo.widthWindows * 0.15}
            >
              <Text>{text.substring(0, 120)}</Text>
            </RowCompoment>

            <RowCompoment
              height={appInfo.widthWindows}
              minHeight={appInfo.widthWindows * 0.4}
              maxHeight={appInfo.widthWindows * 0.7}
            ></RowCompoment>

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
