import { Fragment, useEffect, useState } from "react";
import { FetchManager } from "../../__helpers/FetchManager/FetchManager";
import { IDeescriptionForCupang } from "@/components/CupangProdDisplayer/__interfaces/IDeescriptionForCupang";

import "./description-edit-modal.module.css";

const INDEX_MAIN_DESCRIPTION_ID = 0;
const PREFIX = "_descEditModal-em-32";

interface IErrMsg {
  msg: string | null;
}
export default function DescriptionEditModal({
  setStateFetchedDescription,
  setStateEditModalActive,
  stateEditModalActive,
  stateFetchedDescription,
  stateDidFetch,
}: {
  stateDidFetch: boolean;
  stateFetchedDescription: IDeescriptionForCupang;
  stateEditModalActive: boolean;
  setStateEditModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setStateFetchedDescription: React.Dispatch<
    React.SetStateAction<IDeescriptionForCupang>
  >;
}) {
  const CLASSNAEME =
    stateEditModalActive === true
      ? "description-edit-modal acitve"
      : "description-edit-modal inactive";

  const [stateInputDescConent, setStateInputDescConent] = useState({
    key: "content",
    value: stateFetchedDescription.content,
  });
  const [stateInputDescSize, setStateInputDescSize] = useState({
    key: "size",
    value: stateFetchedDescription.size,
  });

  const [stateErrMsgForDescContent, setStateErrMsgForDescContent] =
    useState<IErrMsg>({ msg: null });
  const [stateErrMsgForDescSize, setStateErrMsgForDescSize] = useState<IErrMsg>(
    { msg: null }
  );

  const onClickToCancleEdit = () => {
    setStateEditModalActive(false);
  };
  const submitValues = () => {
    if (
      stateErrMsgForDescContent?.msg !== null ||
      stateErrMsgForDescSize.msg !== null
    ) {
      return;
    }
    /**
     *
     */
    FetchManager.editDescForCupang({
      id: stateFetchedDescription.id,
      content: stateInputDescConent.value,
      size: stateInputDescSize.value,
    }).then((fetchedDescriptions) => {
      if (fetchedDescriptions === undefined) {
        return;
      }
      const { content, id, size } =
        fetchedDescriptions[INDEX_MAIN_DESCRIPTION_ID];

      setStateFetchedDescription({
        content,
        id,
        size,
      });

      onClickToCancleEdit()
    });
  };
  const onChangeToInputDescContent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    setStateInputDescConent({
      ...stateInputDescConent,
      value,
    });
  };
  const onChangeToInputDescSize = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    setStateInputDescSize({
      ...stateInputDescSize,
      value,
    });
  };

  useEffect(() => {
    if (stateDidFetch === true) {
      setStateInputDescConent({
        ...stateInputDescConent,
        value: stateFetchedDescription.content,
      });
      setStateInputDescSize({
        ...stateInputDescSize,
        value: stateFetchedDescription.size,
      });
      return;
    }
  }, [stateDidFetch]);

  useEffect(() => {
    if (stateInputDescConent.value.trim() === "") {
      setStateErrMsgForDescContent({ msg: "내용란이 공란입니다." });
    } else {
      setStateErrMsgForDescContent({ msg: null });
    }
  }, [stateInputDescConent]);

  useEffect(() => {
    if (stateInputDescSize.value.trim() === "") {
      setStateErrMsgForDescSize({ msg: "크기란이 공란입니다." });
    } else {
      setStateErrMsgForDescSize({ msg: null });
    }
  }, [stateInputDescSize]);

  return (
    <div className={CLASSNAEME} prefix={PREFIX}>
      <form>
        <div className="edit-inputs" prefix={PREFIX}>
          {stateDidFetch === false ? (
            <p>로딩중..</p>
          ) : (
            <>
              <div>
                {" "}
                <label>내용</label>
                <input
                  type="text"
                  name="content"
                  defaultValue={stateFetchedDescription.content}
                  onChange={onChangeToInputDescContent}
                ></input>
                <ErrMsg state={stateErrMsgForDescContent}></ErrMsg>
              </div>
              <div>
                <label>글씨 크기</label>
                <input
                  type="text"
                  name="size"
                  defaultValue={stateFetchedDescription.size}
                  onChange={onChangeToInputDescSize}
                ></input>
                <ErrMsg state={stateErrMsgForDescSize}></ErrMsg>
              </div>
            </>
          )}
        </div>

        <div className="edit-btns" prefix={PREFIX}>
          <button
            type="button"
            className="btn-style-layer delete-btn-style-df-32"
            onClick={onClickToCancleEdit}
          >
            취소
          </button>

          <button
            type="button"
            className="btn-style-layer"
            onClick={submitValues}
          >
            확인
          </button>
        </div>
      </form>
    </div>
  );
}

function ErrMsg({ state }: { state: { msg: string | null } }) {
  return state.msg === null ? (
    <></>
  ) : (
    <div className="err-msg-for-description-inputs">
      <span>{state.msg}</span>
    </div>
  );
}
