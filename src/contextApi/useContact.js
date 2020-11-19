import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";

export const useProvideContact = () => {
  const [adding, setAdding] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const [editing, setEditing] = useState(false);
  const showEditModal = () => {
    setEditing(!editing);
  };
  const showAddModal = () => {
    setAdding(!adding);
  };
  const handleAddFormOnFinish = (data) => {
    db.ref(
      "thelinh/contactlist/" +
        `${data.phoneNumber}${data.firstName[0]}${data.lastName[0]}`
    )
      .set({ key: data.phoneNumber, ...data })
      .then(function () {
        setAdding(false);
      })
      .catch(function (error) {
        setErrorInfo({ mess: "thêm liên lạc bị lỗi" });
        console.error("Error writing document: ", error);
      });
  };
  const handleAddFormOnFinishFailed = (errors) => {
    setErrorInfo(errors);
  };
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const handleOnDelete = (phoneNumber, firstName, lastName) => {
    db.ref(
      "thelinh/contactlist/" + `${phoneNumber}${firstName[0]}${lastName[0]}`
    ).remove();
  };

  useEffect(() => {
    const contactRef = db.ref("/thelinh/contactlist");
    const readDataRealTime = contactRef.on("value", function (snapshot) {
      if (snapshot.val()) {
        const data = Object.values(snapshot.val());
        setValues(data);
      }
      if (!snapshot.val()) {
        setValues([]);
      }
    });
    return () => {
      contactRef.off("value", readDataRealTime);
    };
  }, []);

  return {
    values,
    adding,
    setAdding,
    showAddModal,
    errorInfo,
    setErrorInfo,
    collapsed,
    setCollapsed,
    handleAddFormOnFinish,
    handleAddFormOnFinishFailed,
    onCollapse,
    handleOnDelete,
    showEditModal,
    editing,
  };
};
