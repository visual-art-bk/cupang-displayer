import "./slider-player.module.css";
import { useEffect, useRef, useState, Fragment } from "react";
import { fetchSliderInfos } from "@/components/Slider/__helpers/fetchSliderInfos";
import { SlideImgForwardRef } from "./SlideImg/SlideImg";
import SliderEditor from "./SliderEditor/SliderEditor";
import { SlideInfos } from "@/components/Slider/__interfaces/SlideInfos";
import PlayButton from "./PlayButton/PlayButton";
import {dev_dummy_slides} from '@/test/test-frontend-css/slides_dummy'
import {UrlManager} from '@/components/Slider/__helpers/UrlManager'
import {FetchManager} from '@/components/Slider/__helpers/FetchManager/FetchManager'

const DEV_INDEX_2 = 2;
let TEST_INDEX = 0;
let COUNT_INDEX = 0;
const DURATION = 3000;
let runSliderID: string | number | NodeJS.Timeout | undefined;

const PREFIX = "_sliderImgContainer-kr-59";

let slideInfos = [] as SlideInfos[];

console.log('=== Urls to Slider ===')
console.log(UrlManager.getUrls())
FetchManager.init({urlsToSlider: UrlManager.getUrls()})

export default function SlidePlayer({
  isEditMode,
  serverEnv,
}: {
  isEditMode: boolean;
  serverEnv: string;
}) {
  const [doRunSlider, setDoRunSlider] = useState(false);
  const refs = [
    useRef(document.createElement("div")),
    useRef(document.createElement("div")),
    useRef(document.createElement("div")),
  ];

  const runSlider = () => {
    if (slideInfos.length === 0) {
      return;
    }

    refs.forEach((ref, refToIndex) => {
      setDoRunSlider(true);
      const valueForTranslateX = (refToIndex - TEST_INDEX) * 100;
      ref.current.style.transform = `translateX(${valueForTranslateX}%)`;
    });

    if (TEST_INDEX === DEV_INDEX_2) {
      TEST_INDEX = 0;
      return;
    }

    TEST_INDEX += 1;
    COUNT_INDEX += 1;
  };

  useEffect(() => {
    runSliderID = setInterval(runSlider, DURATION);

    // slideInfos = dev_dummy_slides

    // fetchSliderInfos({ serverEnv })?.then((sliderResponse) => {
    //   slideInfos = sliderResponse;
    // });

    FetchManager.loadSlides().then(slides => {
      if (slides !== undefined) {
        slideInfos = slides
      }
    })
  }, []);

  const slideImages = slideInfos.map(
    (
      { backgrround_img_url, slide_link_href, slide_link_title },
      indexForRef
    ) => {
      return (
        <Fragment key={`slide_${indexForRef}`}>
          <SlideImgForwardRef
            backroundUrl={backgrround_img_url}
            href={slide_link_href}
            linkTitle={slide_link_title}
            translateX={indexForRef * 100}
            ref={refs[indexForRef]}
          ></SlideImgForwardRef>
        </Fragment>
      );
    }
  );

  return (
    <div className="slider-player" prefix={PREFIX}>
      <SliderEditor
        isEditMode={isEditMode}
        serverEnv={serverEnv}
        slideInfos={slideInfos}
      ></SliderEditor>

      <div className="layout" prefix={PREFIX}>
        {slideImages}
        {/* <PlayButton runSliderInterID={runSliderID}></PlayButton> */}
      </div>
    </div>
  );
}
