import { atom } from "recoil";
import { intialProductInfoState } from "./intialStates/initialProductInfoState";
import { initialSliderState } from "./intialStates/intialSliderState";
const Store = (function () {
  const productInfosState = atom({
    key: "productInfos",
    default: intialProductInfoState,
  });

  const sliderState = atom({
    key: "slider",
    default: initialSliderState,
  });
  return {
    getAtoms: () => {
      return {
        productInfosState,
        sliderState,
      };
    },
  };
})();

export default Store;
