import "./input-for-add-cupang-item.module.css";
const PREFIX = "_inputForAddCupangItem-nh-28";

type typeForInputCupangItem = {
  label: string;
  nameToInput: string;
  placeholder?: string;
  requried?: boolean;
};
export default function InputForAddCupangItem({
  nameToInput,
  label,
  placeholder,
  requried,
}: typeForInputCupangItem) {
  return (
    <div className="input-for-add-cupang-item" prefix={PREFIX}>
      <label>{label}</label>
      <input
        required={requried}
        name={nameToInput}
        placeholder={placeholder}
        type="text"
      ></input>
    </div>
  );
}
