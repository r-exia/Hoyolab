import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ref, set, get, child, push, update, onValue } from "firebase/database";

import { db } from "../../firebase.config";

const database = db;
const dbRef = ref(database);
const usersRef = ref(database, "users/");

const getAllData = () => {
  //   get(child(dbRef, "users/"))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         return console.log(snapshot.val());
  //       } else {
  //         return console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       return console.error("Error", error);
  //     });
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    const dataArray = Object.values(data || {});
    return console.log(dataArray);
  });
};

// const dataProduct = require("./data.json");

// const ImportFileJson = async () => {
//   dataProduct.forEach((data: any) => {
//     const key = push(child(dbRef, "products/")).key;
//     set(child(dbRef, "products/" + key), {
//       id: key,
//       gia: data.gia,
//       img: data.img,
//       mau: data.mau,
//       size: data.size,
//       tensp: data.tensp,
//       soLuong: data.soLuong,
//     })
//       .then(() => {
//         return console.log("Data saved successfully");
//       })
//       .catch((error) => {
//         return console.log("Data saved failed", error);
//       });
//   });
// };

const createOneData = ({
  name,
  email,
  imageUrl,
}: {
  name: string;
  email: string;
  imageUrl: string;
}) => {
  //   set(ref(database, "users/"), {
  //     userName: name,
  //     email: email,
  //     imageUrl: imageUrl,
  //   })
  //     .then(() => {
  //       return console.log("Data saved successfully");
  //     })
  //     .catch((error) => {
  //       return console.log("Data saved failed", error);
  //     });

  const key = push(child(dbRef, "users/")).key;

  set(child(dbRef, "users/" + key), {
    id: key,
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
  id,
}: {
  name: string;
  email: string;
  imageUrl: string;
  id: string;
}) => {
  const updates: any = {};
  updates["users/" + id] = {
    id: id,
    userName: name,
    email: email,
    imageUrl: imageUrl,
  };
  update(ref(database), updates)
    .then(() => {
      return console.log("Data updated successfully");
    })
    .catch((error) => {
      return console.log("Data updated failed", error);
    });
};

const deleteOneData = (id: string) => {
  set(child(dbRef, "users/" + id), null)
    .then(() => {
      return console.log("Data deleted successfully");
    })
    .catch((error) => {
      return console.log("Data deleted failed", error);
    });
};

export { getAllData, createOneData, updateOneData, deleteOneData };

const styles = StyleSheet.create({});
