import "./slider-editor.module.css";

import { Fragment } from "react/jsx-runtime";
import { SlideInfos } from "@/components/Slider/__interfaces/SlideInfos";
import SliderEditForm from "./SliderEditForm/SliderEditForm";

const PREFIX = "_sliderEditor-re-43";

export default function SliderEditor({
  isEditMode,
  serverEnv,
  slideInfos,
}: {
  isEditMode: boolean;
  serverEnv: string;
  slideInfos: SlideInfos[];
}) {
  if (isEditMode === false) {
    return <></>;
  }
  const EditorForms = slideInfos.map((info) => {
    return (
      <Fragment key={info.product_number}>
        <SliderEditForm slideInfo={info}></SliderEditForm>
      </Fragment>
    );
  });
  return (
    <div className="slider-editor" prefix={PREFIX}>
      <div className="layout" prefix={PREFIX}>
        {EditorForms}
      </div>
    </div>
  );
}
