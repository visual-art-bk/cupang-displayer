import { ReactNode } from "react";
import "./remover-modal.module.css";
import {UrlManager} from '@/components/CupangProdDisplayer/__helpers/UrlManager'

const PREFIX = "_removalModal-nb-32";

export default function RemoverModal({
  urlToAction,
  productNumberToDelete,
  setStateClassNameForModal,
  stateClassNameForModal,
}: {
  urlToAction: string;
  productNumberToDelete: string;
  stateClassNameForModal: string;
  setStateClassNameForModal: Function;
}) {
  const onClickToCancle = () => {
    setStateClassNameForModal("collapsed");
  };
  return (
    <div
      className={
        stateClassNameForModal === ""
          ? "remover-modal"
          : `remover-modal ${stateClassNameForModal}`
      }
      prefix={PREFIX}
    >
    
      <div className="layout" prefix={PREFIX}>
        <div className="modal-title" prefix={PREFIX}>
          <span>정말 삭제하시겠습니까?</span>
        </div>

        <ButtonLayout>
          <button
            className="no-remover-button btn-style-layer"
            onClick={onClickToCancle}
          >
            아니요
          </button>
          <FormDelete
            productNumberToDelete={productNumberToDelete}
            urlToAction={urlToAction}
          ></FormDelete>
        </ButtonLayout>
      </div>
      <dialog></dialog>
    </div>
  );
}

function FormDelete({
  urlToAction,
  productNumberToDelete,
}: {
  urlToAction: string;
  productNumberToDelete: string;
}) {
  return (
    <form
      className="form-delete"
      method="POST"
      action={UrlManager.getUrls().deleteCupangItems}
      prefix={PREFIX}
    >
      <input
        type="hidden"
        name="productNumber"
        value={productNumberToDelete}
      ></input>
      <button type="submit" className="btn-style-layer delete-btn-style-df-32">
        예
      </button>
    </form>
  );
}

function ButtonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="button-layout" prefix={PREFIX}>
      {children}
    </div>
  );
}
