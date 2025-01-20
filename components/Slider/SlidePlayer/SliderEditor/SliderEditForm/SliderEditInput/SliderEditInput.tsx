import "./slider-edit-input.module.css";
const PREFIX = "_sliderEditorInput-mr-32";

export default function SliderEditInput({
  name,
  hiddenType,
  labelName,
  defaultValue
}: {
  hiddenType?: undefined | string;
  name: string;
  labelName: string;
  defaultValue: string
}) {
  return (
    <div className="slider-edit-input" prefix={PREFIX}>
      {hiddenType !== undefined ? <></> : <label>{labelName}</label>}
      <input
        name={name}
        type={hiddenType === undefined ? "text" : "hidden"}
        defaultValue={defaultValue}
      ></input>
    </div>
  );
}
