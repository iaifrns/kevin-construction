import { useEffect, useState } from "react";
import {
  images,
  imgAwai,
  imgDuplexOdx,
  imgGolf,
  imgHon,
  imgJapoma,
  imgKribi,
  imgMidef,
  imgOdza,
  imgPortaire,
  imgTrans,
  imgVKribi,
  imgWerner,
  imgYassa,
} from "../constants/images";

const preLoader = (url: string): Promise<void> => {
  const img = new Image();
  img.src = url;
  if ("decode" in img) {
    return (img as HTMLImageElement).decode().catch(() => void 0);
  }

  return new Promise((res, rej) => {
    (img as HTMLImageElement).onload = () => res();
    (img as HTMLImageElement).onerror = () => rej();
  });
};

const useLoadImgs = () => {
  const [loading, setLoading] = useState(false);

  const imgsArr = [
    ...Object.values(images),
    ...imgAwai,
    ...imgDuplexOdx,
    ...imgGolf,
    ...imgHon,
    ...imgJapoma,
    ...imgKribi,
    ...imgMidef,
    ...imgOdza,
    ...imgPortaire,
    ...imgTrans,
    ...imgVKribi,
    ...imgWerner,
    ...imgYassa,
  ];

  const loadimg = async () => {
    try {
      setLoading(true);
      await Promise.all(imgsArr.map((t) => preLoader(t)));
    } catch (e: any) {
      console.log("Error loading the images", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadimg();
  }, []);

  return loading;
};

export default useLoadImgs;
