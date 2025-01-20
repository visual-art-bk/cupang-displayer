import "./item-editor.module.css";
import { useState } from "react";
import EditorModal from "./EditorModal/EditorModal";

const CLASS_NAME_MODAL_DEFAULT = "modal-editor";
const CLASS_NAME_MODAL_COLLAPSED = "collapsed";
const PREFIX = "_itemEditor-rj-30";

type typeProductInfors = {
  id: string;
  href: string;
  backgroundImageUrl: string;
  productNumber: string;
  title: string;
  description: string;
};
export default function ItemEditor({
  isEditMode,
  productInfos,
  serverEnv,
}: {
  isEditMode: boolean;
  productInfos: typeProductInfors;
  serverEnv: string;
}) {
  if (isEditMode === false) {
    return <></>;
  }
  const [stateForClassName, setStateForClassName] = useState(
    `${CLASS_NAME_MODAL_DEFAULT} ${CLASS_NAME_MODAL_COLLAPSED}`
  );
  const onClick = () => {
    setStateForClassName(CLASS_NAME_MODAL_DEFAULT);
  };
  return (
    <div className="product-info-editor" prefix={PREFIX}>
      <div className="editor-btn btn-style-layer">
        <button type="button" onClick={onClick}>
          수정하기
        </button>
      </div>

      <EditorModal
        serverEnv={serverEnv}
        productInfos={productInfos}
        stateForClassName={stateForClassName}
        setStateForClassName={setStateForClassName}
      ></EditorModal>
    </div>
  );
}
