import "./add-form.module.css";
import { Fragment } from "react";

import InputForAddCupangItem from "./InputForAddCupangItem/InputForAddCupangItem";
import { chunksForInput } from "./renderingChunks/renderingChunks";
import { UrlManager } from "@/components/CupangProdDisplayer/__helpers/UrlManager";

const PREFIX = "_formAdd-nr-39";
const REQUIRED_PRODUCT_NUMBER = "productNumber";
const REQUIRED_PRODUCT_TITLE = "title";

export default function AddForm({
  isEditMode,
  serverEnv,
}: {
  isEditMode: boolean;
  serverEnv: string;
}) {
  if (isEditMode === false) {
    return <></>;
  }

  const inpuItems = chunksForInput.map(
    ({ label, nameToInput, placeholder }, indexForKey) => {
      return (
        <Fragment key={`${indexForKey}_${nameToInput}`}>
          <InputForAddCupangItem
            requried={
              nameToInput === REQUIRED_PRODUCT_NUMBER ||
              nameToInput === REQUIRED_PRODUCT_TITLE
                ? true
                : false
            }
            label={label}
            nameToInput={nameToInput}
            placeholder={placeholder}
          ></InputForAddCupangItem>
        </Fragment>
      );
    }
  );
  return (
    <div className="form-for-add-product" prefix={PREFIX}>
      <div className="layout" prefix={PREFIX}>
        <form
          className="form"
          method="post"
          action={UrlManager.getUrls().addCupangItem}
          prefix={PREFIX}
        >
          <div className="items" prefix={PREFIX}>
            {inpuItems}
          </div>

          <button type="submit" className="product-add-button" prefix={PREFIX}>
            제품 등록
          </button>
        </form>
      </div>
    </div>
  );
}
