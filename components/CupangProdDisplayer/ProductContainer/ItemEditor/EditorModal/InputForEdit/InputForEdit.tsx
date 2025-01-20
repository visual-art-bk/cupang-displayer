import './input-for-edit.module.css'

const PREFIX = '_editorInput-dm-32'
type typeForInputCupangItem = {
  label: string;
  nameToInput: string;
  placeholder?: string;
  productInfo: string;
};

export default function InputForEdit({
  nameToInput,
  label,
  placeholder,
  productInfo,
}: typeForInputCupangItem) {
  return (
    <div className="input-for-add-cupang-item" prefix={PREFIX}>
      <label>{label}</label>
      <input
        name={nameToInput}
        placeholder={placeholder}
        type="text"
        defaultValue={productInfo}
      ></input>
    </div>
  );
}
