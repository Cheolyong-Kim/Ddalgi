import { useEffect, useState } from "react";
import CatsUI from "./cats.presenter";
import axios from "axios";

const Cats = (): JSX.Element => {
  const [cat, setCat] = useState("");

  useEffect(() => {
    const InitCat = async (): Promise<void> => {
      const result = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
      );
      setCat(String(result.data[0].url));
    };
    void InitCat();
  }, []);

  const onClickImg = async (): Promise<void> => {
    const result = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
    );
    setCat(String(result.data[0].url));
  };

  return <CatsUI data={cat} onClickImg={onClickImg} />;
};

export default Cats;
