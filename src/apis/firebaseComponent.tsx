import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ref, set, get, child, push, update } from "firebase/database";

import { db } from "../../firebase.config";

const database = db;
const dbRef = ref(database);

const getAllData = () => {
  get(child(dbRef, "users/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return console.log(snapshot.val());
      } else {
        return console.log("No data available");
      }
    })
    .catch((error) => {
      return console.error("Error", error);
    });
};

const createOneData = ({
  name,
  email,
  imageUrl,
}: {
  name: string;
  email: string;
  imageUrl: string;
}) => {
  set(ref(database, "users/"), {
    userName: name,
    email: email,
    imageUrl: imageUrl,
  })
    .then(() => {
      return console.log("Data saved successfully");
    })
    .catch((error) => {
      return console.log("Data saved failed", error);
    });
};

const updateOneData = ({
  name,
  email,
  imageUrl,
}: {
  name: string;
  email: string;
  imageUrl: string;
}) => {
  const newPostKey = push(child(dbRef, "users/")).key;
  console.log(newPostKey);
};

export { getAllData, createOneData };

const styles = StyleSheet.create({});
