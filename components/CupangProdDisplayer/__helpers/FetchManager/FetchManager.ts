import { IUrls } from "../../__interfaces/IUrls";
import { IDeescriptionForCupang } from "../../__interfaces/IDeescriptionForCupang";
import loadCupangItems from "./fetchHandlers/loadCupangItems";
import loadDescForCupang from "./fetchHandlers/loadDescForCupang";
import editDescForCupang from "./fetchHandlers/editDescForCupang";

let DID_INIT = false;
let URLS_TO_CUPANG_DISPLAY: IUrls;

export const FetchManager = (() => {
  return {
    init({ urlsToCupangDisplay }: { urlsToCupangDisplay: IUrls }) {
      if (DID_INIT === true) {
        console.error("Fetch manager must be initialized only one.");
        return;
      }
      DID_INIT = true;
      URLS_TO_CUPANG_DISPLAY = urlsToCupangDisplay;
    },
    loadCupangItems() {
      return loadCupangItems(URLS_TO_CUPANG_DISPLAY.loadCupangItems);
    },
    loadDescForCupang() {
      return loadDescForCupang(URLS_TO_CUPANG_DISPLAY.loadDescriptionForCupang);
    },
    editDescForCupang({ content, id, size }: IDeescriptionForCupang) {
      return editDescForCupang(
        URLS_TO_CUPANG_DISPLAY.editDescriptionForCupang,
        {
          content,
          id,
          size,
        }
      );
    },
  };
})();
