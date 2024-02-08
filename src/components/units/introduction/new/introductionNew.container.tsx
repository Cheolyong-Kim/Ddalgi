import { type ChangeEvent, useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import IntroductionNewUI from "./introductionNew.presenter";
import { firebaseApp } from "../../../../commons/libraries/firebase";

const IntroductionNew = (): JSX.Element => {
  const [personalInfo, setPersonalInfo] = useState({
    age: 0,
    name: "",
  });
  const [hobby, setHobby] = useState([]);
  const [profile, setProfile] = useState("");
  const [isButtonAble, setIsButtonAble] = useState(false);

  const db = getFirestore(firebaseApp);

  const onChangePersonalInfo = (event: ChangeEvent<HTMLInputElement>): void => {
    setPersonalInfo((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));

    if (event.target.id === "age") {
      if (
        event.target.value &&
        personalInfo.name &&
        hobby.length !== 0 &&
        profile
      )
        setIsButtonAble(true);
    } else if (event.target.id === "name") {
      if (
        personalInfo.age !== 0 &&
        event.target.value &&
        hobby.length !== 0 &&
        profile
      )
        setIsButtonAble(true);
    }
  };

  const onChangeHobby = (event: ChangeEvent<HTMLInputElement>): void => {
    const hobbys = event.target.value.split(",");
    setHobby(hobbys);
    if (
      personalInfo.age !== 0 &&
      personalInfo.name &&
      hobbys.length !== 0 &&
      profile
    )
      setIsButtonAble(true);
  };

  const onChangeProfile = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setProfile(event.target.value);

    if (
      personalInfo.age !== 0 &&
      personalInfo.name &&
      hobby.length !== 0 &&
      event.target.value
    )
      setIsButtonAble(true);
  };

  const onClickSubmit = (): void => {
    void setDoc(doc(db, "Introduction", personalInfo.name), {
      age: personalInfo.age,
      name: personalInfo.name,
      hobby,
      profile,
    });
  };

  return (
    <IntroductionNewUI
      onChangePersonalInfo={onChangePersonalInfo}
      onChangeHobby={onChangeHobby}
      onChangeProfile={onChangeProfile}
      onClickSubmit={onClickSubmit}
      isButtonAble={isButtonAble}
    />
  );
};

export default IntroductionNew;
