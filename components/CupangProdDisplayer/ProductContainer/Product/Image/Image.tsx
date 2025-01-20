import { useEffect, useState } from "react";
import { UrlManager } from "@/components/CupangProdDisplayer/__helpers/UrlManager";
const PREFIX = "_staticImage-md=32";

export default function Image({ url }: { url: string }) {
  const [stateUrl, setStatUrl] = useState(url);

  const validateImagLink = () => {
    const splitedByPoint = stateUrl.split(".");
    const lastIndexIsGif = splitedByPoint.length - 1;
    const unitToVildate = splitedByPoint[lastIndexIsGif].toLocaleLowerCase();
    return unitToVildate === "gif" ||
      unitToVildate === "png" ||
      unitToVildate === "jpg" ||
      unitToVildate === "jpeg"
      ? true
      : false;
  };
  useEffect(() => {
    if (stateUrl === "") {
      setStatUrl(UrlManager.getUrls().warningImgWhenLinkBlank);
      return;
    }
  }, [stateUrl]);

  useEffect(() => {
    if (
      stateUrl !== "" &&
      stateUrl !== UrlManager.getUrls().warningImgWhenLinkBlank &&
      stateUrl !== UrlManager.getUrls().warningImgWhenLinkInvalidGIF
    ) {
      if (validateImagLink() === false) {
        setStatUrl(UrlManager.getUrls().warningImgWhenLinkInvalidGIF);
      }
    }
  }, [stateUrl]);

  return (
    <div
      className="static-image"
      style={{
        backgroundImage: `url(${stateUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        flexShrink: 0,
        width: "5rem",
        height: "5rem",
        backgroundSize: "cover",
        borderStyle: "none",
        borderWidth: "1px",
        borderColor: "rgb(0, 0, 0)",
        borderRadius: "0.5rem",
      }}
      prefix={PREFIX}
    ></div>
  );
}
