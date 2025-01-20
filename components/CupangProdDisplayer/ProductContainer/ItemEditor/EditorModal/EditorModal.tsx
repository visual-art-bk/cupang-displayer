import "./editor-modal.module.css";
import { useState, Fragment, ReactNode } from "react";
import { ProductInfos } from "@/components/CupangProdDisplayer/__interfaces/ProductInfos";
import { getRenderingChunks } from "./renderingChunks/renderingChunks";
import InputForEdit from "./InputForEdit/InputForEdit";
import {
  URL_LOCAL_CUPANG_ITEM_EDIT,
  URL_PROD_CUPANG_ITEM_EDIT,
} from "@/components/CupangProdDisplayer/__constants/URLS";

import {UrlManager} from '@/components/CupangProdDisplayer/__helpers/UrlManager'
const CLASS_NAME_MODAL_DEFAULT = "modal-editor";
const CLASS_NAME_MODAL_COLLAPSED = "collapsed";

const PREFIX_FOR_MODAL = "_editModal-en-32";
let URL_TO_EDIT_FORM: string;

export default function EditorModal({
  productInfos,
  stateForClassName,
  setStateForClassName,
  serverEnv,
}: {
  serverEnv: string;
  productInfos: ProductInfos;
  stateForClassName: string;
  setStateForClassName: Function;
}) {
  URL_TO_EDIT_FORM =
    serverEnv === "DEVELOPMENT"
      ? URL_LOCAL_CUPANG_ITEM_EDIT
      : URL_PROD_CUPANG_ITEM_EDIT;
  console.log(`[${serverEnv} MODE]Edit product for will be action:${URL_TO_EDIT_FORM}`);

  const onClick = () => {
    setStateForClassName(
      `${CLASS_NAME_MODAL_DEFAULT} ${CLASS_NAME_MODAL_COLLAPSED}`
    );
  };

  return (
    <div className={stateForClassName} prefix={PREFIX_FOR_MODAL}>
      <Layout>
        <div className="layout-cancel-edit-btn" prefix={PREFIX_FOR_MODAL}>
          <div
            className="cancel-edit-btn btn-style-layer delete-btn-style-df-32"
            prefix={PREFIX_FOR_MODAL}
          >
            <button onClick={onClick}>수정취소</button>
          </div>
        </div>
        <EditForm productInfos={productInfos}></EditForm>
      </Layout>
    </div>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout" prefix={PREFIX_FOR_MODAL}>
      {children}
    </div>
  );
}

function EditForm({ productInfos }: { productInfos: ProductInfos }) {
  const chunkForinputs = getRenderingChunks({
    ...productInfos,
  });

  const inputsForEdit = chunkForinputs.map(
    ({ label, nameToInput, productInfo }, indexForKey) => {
      return (
        <Fragment key={`${indexForKey}_${productInfo}`}>
          <InputForEdit
            label={label}
            nameToInput={nameToInput}
            productInfo={productInfo}
          ></InputForEdit>
        </Fragment>
      );
    }
  );

  return (
    <form
      className="product-add-form"
      method="POST"
      action={UrlManager.getUrls().editCupangItems}
      prefix={PREFIX_FOR_MODAL}
    >
      {inputsForEdit}

      <button
        type="submit"
        className="product-add-button btn-style-layer"
        prefix={PREFIX_FOR_MODAL}
      >
        확인
      </button>
    </form>
  );
}
