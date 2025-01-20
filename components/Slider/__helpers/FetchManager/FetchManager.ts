import { IUrls } from "../../__interfaces/IUrls";
import loadSlides from "./loadSlides";

let DID_INIT = false;
let URLS_TO_SLIDER: IUrls;

export const FetchManager = (() => {
  return {
    init({
      urlsToSlider,
    }: {
      urlsToSlider: IUrls;
    }) {
      if (DID_INIT === true) {
        console.error("Fetch manager must be initialized only one.");
        return;
      }
      DID_INIT = true;
      URLS_TO_SLIDER = urlsToSlider;

    },
    loadSlides() {
        return loadSlides(URLS_TO_SLIDER.loadSlides)
    }
  };
})();
