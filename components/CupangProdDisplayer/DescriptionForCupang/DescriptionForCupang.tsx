import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { FetchManager } from "@/components/CupangProdDisplayer/__helpers/FetchManager/FetchManager";
import ButtonsToActiveModal from "./ButtonsToActiveModal/ButtonsToActiveModal";
import DescriptionEditModal from "./DescriptionEditModal/DescriptionEditModal";
import { IDeescriptionForCupang } from "@/components/CupangProdDisplayer/__interfaces/IDeescriptionForCupang";
import "./description-for-cupang.module.css";
const PREFIX = "_descForCupang-ne-34";
const INDEX_MAIN_DESCRIPTION_ID = 0;

export default function DescriptionForCupang({
  serverEnv,
  isEditMode,
}: {
  isEditMode: boolean;
  serverEnv: string;
}) {
  const [stateFetchedDescription, setStateFetchedDescription] =
    useState<IDeescriptionForCupang>({
      content: "내용-불러오는-중.",
      id: "아이디-불러오는-중",
      size: "12",
    });
  const [stateDidFetch, setStateDidFetch] = useState(false);
  const [stateEditModalActive, setStateEditModalActive] = useState(false);

  useEffect(() => {
    FetchManager.loadDescForCupang().then((descs) => {
      if (descs === undefined) {
        return;
      }
      const { content, size, id } = descs[INDEX_MAIN_DESCRIPTION_ID];

      setStateFetchedDescription({
        id,
        content,
        size,
      });
      setStateDidFetch(true);
    });
  }, []);
  if (isEditMode === false) {
    return (
      <div className="description-for-cupang" prefix={PREFIX}>
        <DescriptionConent
          stateFetchedDescription={stateFetchedDescription}
        ></DescriptionConent>
      </div>
    );
  }
  return (
    <div className="description-for-cupang edit-mode" prefix={PREFIX}>
      <ButtonsToActiveModal
        setStateEditModalActive={setStateEditModalActive}
      ></ButtonsToActiveModal>

      <DescriptionEditModal
        stateDidFetch={stateDidFetch}
        stateFetchedDescription={stateFetchedDescription}
        setStateFetchedDescription={setStateFetchedDescription}
        setStateEditModalActive={setStateEditModalActive}
        stateEditModalActive={stateEditModalActive}
      ></DescriptionEditModal>

      <DescriptionConent
        stateFetchedDescription={stateFetchedDescription}
      ></DescriptionConent>
    </div>
  );
}

function DescriptionConent({
  stateFetchedDescription,
}: {
  stateFetchedDescription: IDeescriptionForCupang;
}) {
  return (
    <div className="description">
      <p style={{ fontSize: `${stateFetchedDescription.size}px` }}>
        {stateFetchedDescription.content}
      </p>
    </div>
  );
}
