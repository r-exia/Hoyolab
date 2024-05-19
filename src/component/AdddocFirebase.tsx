import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../firebase.config";

const AddDoc = async () => {
  await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  })
    .then((data) => {
      console.log(data);
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

const AdddocFirebase = () => {
  const [data, setData] = React.useState<DocumentData[]>([]);
  const ReadDoc = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={AddDoc}>
        <Text>Add doc</Text>
      </TouchableOpacity>
      {data.map((item, index) => (
        <View style={{ width: "100%", alignItems: "center" }} key={index}>
          <Text> {item.born}</Text>
          <Text> {item.first}</Text>
          <Text> {item.last}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={ReadDoc}>
        <Text>READ doc</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdddocFirebase;

const styles = StyleSheet.create({});
