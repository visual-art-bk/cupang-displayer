import "./item-remover.module.css";
import { useEffect, useState } from "react";
import RemoverModal from "../RemoverModal/RemoverModal";

let URL_TO_DELET_FORM: string
type typeProductInfors = {
  id: string;
  href: string;
  backgroundImageUrl: string;
  productNumber: string;
  title: string;
  description: string;
};
export default function ItemRemover({
  isEditMode,
  productInfos,
  serverEnv
}: {
  isEditMode: boolean;
  serverEnv: string
  productInfos: typeProductInfors;
}) {
  if (isEditMode === false) {
    return <></>;
  }
  const PREFIX = "_prodRemover-mt-32";
  const CLASS_NAME_MODAL_DEFAULT = "";
  const CLASS_NAME_MODAL_COLLAPSED = "collapsed";

  const [stateForClassName, setStateForClassName] = useState(
    CLASS_NAME_MODAL_COLLAPSED
  );

  const onClickToActiveModalForRemove = () => {
    setStateForClassName(`${CLASS_NAME_MODAL_DEFAULT}`);
  };


  return (
    <div className="product-remover" prefix={PREFIX}>
      <button
        className="delete-btn-style-df-32 btn-style-layer"
        role="button"
        onClick={onClickToActiveModalForRemove}
      >
        삭제하기
      </button>

      <RemoverModal
        productNumberToDelete={productInfos.productNumber}
        setStateClassNameForModal={setStateForClassName}
        stateClassNameForModal={stateForClassName}
        urlToAction={URL_TO_DELET_FORM}
      ></RemoverModal>
    </div>
  );
}
