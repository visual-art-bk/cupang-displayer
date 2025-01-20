import { SlideInfos } from "@/components/Slider/__interfaces/SlideInfos";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

import { UrlManager } from "@/components/Slider/__helpers/UrlManager";
import "./slider-edit-form.module.css";
import SliderEditInput from "./SliderEditInput/SliderEditInput";

const PREFIX = "_sliderEditorForm-me-54";

export default function SliderEditForm({
  slideInfo,
}: {
  slideInfo: SlideInfos;
}) {
  const {
    backgrround_img_url,
    product_number,
    slide_link_href,
    slide_link_title,
  } = slideInfo;

  return (
    <div className="slider-edit-form" prefix={PREFIX}>
      <form
        method="POST"
        action={UrlManager.getUrls().editSlides}
        className="form"
        prefix={PREFIX}
      >
        <Layout>
          <SliderEditInput
            labelName="제품번호"
            name="product_number"
            hiddenType="hidden"
            defaultValue={product_number}
          ></SliderEditInput>

          <SliderEditInput
            labelName="동영상 주소"
            name="backgrround_img_url"
            defaultValue={backgrround_img_url}
          ></SliderEditInput>

          <SliderEditInput
            labelName="제품설명"
            name="slide_link_title"
            defaultValue={slide_link_title}
          ></SliderEditInput>

          <SliderEditInput
            labelName="제품링크"
            name="slide_link_href"
            defaultValue={slide_link_href}
          ></SliderEditInput>

          <div className="slider-edit-submit btn-style-layer">
            <button type="submit">확인</button>
          </div>
        </Layout>
      </form>
    </div>
  );
}
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout" prefix={PREFIX}>
      {children}
    </div>
  );
}
