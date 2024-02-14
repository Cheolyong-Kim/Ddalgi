import { type ChangeEvent, useState } from "react";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";
import IntroductionNewUI from "./introductionNew.presenter";
import type { IIntroductionProps, IDataProps } from "./introductionNew.types";

const IntroductionNew = (props: IIntroductionProps): JSX.Element => {
  const router = useRouter();

  const [personalInfo, setPersonalInfo] = useState({
    age: 0,
    name: "",
  });
  const [hobby, setHobby] = useState(["없음"]);
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
        !hobby.includes("없음") &&
        profile
      )
        setIsButtonAble(true);
    } else if (event.target.id === "name") {
      if (
        personalInfo.age !== 0 &&
        event.target.value &&
        !hobby.includes("없음") &&
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
      !hobbys.includes("없음") &&
      profile
    )
      setIsButtonAble(true);
  };

  const onChangeProfile = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setProfile(event.target.value);

    if (
      personalInfo.age !== 0 &&
      personalInfo.name &&
      !hobby.includes("없음") &&
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
      createdAt: new Date().toString(),
    });

    void router.push("/introduction");
  };

  const onClickUpdate = async (): Promise<void> => {
    if (!personalInfo.age) {
      alert("수정할 내용이 없습니다.");
      return;
    }

    if (hobby.includes("없음")) {
      alert("수정할 내용이 없습니다.");
      return;
    }

    if (!profile) {
      alert("수정할 내용이 없습니다.");
      return;
    }

    if (typeof router.query.id !== "string") return;
    const docId = router.query.id;
    const introRef = doc(db, "Introduction", docId);

    const newIntroduction: IDataProps = {};
    if (personalInfo.age) newIntroduction.age = personalInfo.age;
    if (!hobby.includes("없음")) newIntroduction.hobby = hobby;
    if (profile) newIntroduction.profile = profile;
    newIntroduction.createdAt = new Date().toString();

    await updateDoc(introRef, {
      ...newIntroduction,
    });

    void router.push("/introduction");
  };

  return (
    <IntroductionNewUI
      isEdit={props.isEdit}
      data={props?.data}
      onChangePersonalInfo={onChangePersonalInfo}
      onChangeHobby={onChangeHobby}
      onChangeProfile={onChangeProfile}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isButtonAble={isButtonAble}
    />
  );
};

export default IntroductionNew;
