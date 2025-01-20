import "./slider.module.css";
import SlidePlayer from "./SlidePlayer/SlidePlayer";

const PREFIX="_slider-jn-43"

export default function Slider({
  isEditMode,
  serverEnv,
}: {
  isEditMode: boolean;
  serverEnv: string;
}) {
  return (
    <div className="slider" prefix={PREFIX}>
      <div className="layout" prefix={PREFIX}>
        <SlidePlayer isEditMode={isEditMode} serverEnv="PRODUCTION"></SlidePlayer>
      </div>
    </div>
  );
}
