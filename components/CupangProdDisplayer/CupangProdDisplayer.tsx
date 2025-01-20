import "./cupang-prod-dsiplayer.module.css";
import { Fragment, useEffect, useRef } from "react";
import { ProductInfos } from "@/components/CupangProdDisplayer/__interfaces/ProductInfos";
import { useRecoilState, RecoilRoot } from "recoil";
import { UrlManager } from "./__helpers/UrlManager";
import { fetchAllCupangItems } from "./__helpers/fetchAllCupangItems";
import { FetchManager } from "@/components/CupangProdDisplayer/__helpers/FetchManager/FetchManager";
// DO NOT DELET THE BELOW HELPER. IT MUST USE FOR CSS STYLES WITHOUT SERVERS
// import { TEST__fetchFromDummiesForCupangItems } from "@/components/CupangProdContainer/CupangProdDisplayer/__helpers/TEST__fetchFromDummies";

import Store from "@/components/CupangProdDisplayer/__store/Store";
import DescriptionForCupang from "./DescriptionForCupang/DescriptionForCupang";
import ProductFinder from "./ProductFinder/ProductFinder";
import ProductContainer from "./ProductContainer/ProductContainer";
import MoreProductButton from "./MoreProductButton/MoreProductButton";
import AddForm from "./AddForm/AddForm";

//Setting for size of diplay
const INITIAL_SIZE_FOR_DISPLAY = 9;

// Rendering prefix
const PREFIX = "_cupangProdDisplayer-ge-94";

// Atoms of Recoil
const { productInfosState } = Store.getAtoms();

console.log("=== Urls to Cupang Items ===");
console.log(UrlManager.getUrls());
FetchManager.init({ urlsToCupangDisplay: UrlManager.getUrls() });

/**
 *
 * @param param0
 * @returns
 */
export default function CupangProdDisplayer({
  isEditMode,
  serverEnv,
}: {
  isEditMode: boolean;
  serverEnv: string;
}) {
  /**
   * Refs
   */
  const refForProductFinder = useRef(document.createElement("input"));

  /**
   * Store
   */
  const [stateForProductInofs, setStateForProductInfos] =
    useRecoilState(productInfosState);

  const initializeShowingProducts = (productInfos: ProductInfos[] | []) => {
    if (productInfos.length === 0) {
      console.warn("Invalid fetch request on Fetch Api.");
    }
    const reversedForTheLatest = productInfos.reverse();

    const showingProducts = reversedForTheLatest.filter((info, index) => {
      if (index < INITIAL_SIZE_FOR_DISPLAY) {
        return info;
      }
    });

    const restProducts = reversedForTheLatest.slice(INITIAL_SIZE_FOR_DISPLAY);

    setStateForProductInfos({
      ...stateForProductInofs,
      sourceFromJson: reversedForTheLatest,
      showing: showingProducts,
      cachedForLastestShowing: showingProducts,
      rest: restProducts,
    });
  };

  useEffect(() => {
    /**
     * dummy file mode for rapidly develpoment of CSS
     */ // import {
    //   URL_LOCAL_CUPANG_ITEM_ADD,
    //   URL_PROD_CUPANG_ITEM_ADD,
    // } from "@/components/CupangProdDisplayer/__constants/URLS";hFromDummiesForCupangItems());

    FetchManager.loadCupangItems().then((items) => {
      if (items !== undefined) {
        initializeShowingProducts(items);
      }
    });
    /**
     * fetch mode on dev or, prod
     */

    // fetchAllCupangItems({ serverEnv })?.then((items) => {
    //   console.warn(items);
    //   initializeShowingProducts(items);
    // });
  }, []);

  return (
    <div className="cupang-prod-displayer" prefix={PREFIX}>
      <div className="layout" prefix={PREFIX}>
        <ProductFinder ref={refForProductFinder}></ProductFinder>
        
        <AddForm isEditMode={isEditMode} serverEnv={serverEnv}></AddForm>

        <DescriptionForCupang
          isEditMode={isEditMode}
          serverEnv={serverEnv}
        ></DescriptionForCupang>

        <ProductContainer
          isEditMode={isEditMode}
          products={stateForProductInofs.showing}
          serverEnv={serverEnv}
        ></ProductContainer>

        <MoreProductButton></MoreProductButton>
      </div>
    </div>
  );
}
