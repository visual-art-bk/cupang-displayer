import {IUrls} from '../__interfaces/IUrls'

const ROUTE_PREFIX = "wp-json";
const ROUTE_NAMESPACE_SLIDE_ITMES = "cupang-slides/v1";
const ROUTE_SLIDE_ITMES = "slides";
const ROUTE_SLIDE_ITEMS_EDIT = 'edit'

/**
 * 
 */
type tPathname = {
  SLIDE_ITEMSS: string;
  SLIDE_ITEMS_EDIT: string
};
const PATHNAME: tPathname = {
  SLIDE_ITEMSS: [
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_SLIDE_ITMES,
    ROUTE_SLIDE_ITMES,
  ].join("/"),
  SLIDE_ITEMS_EDIT: [
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_SLIDE_ITMES,
    ROUTE_SLIDE_ITEMS_EDIT,
  ].join("/"),
};
/**
 * @param pathname 
 * @returns 
 */
const makeUrl = (pathname: string) => {
  const { origin } = window.location;
  return origin + "/" + pathname;
};

export const UrlManager = (() => {
  return {
    getUrls(): IUrls {
      return {
        loadSlides: makeUrl(PATHNAME.SLIDE_ITEMSS),
        editSlides: makeUrl(PATHNAME.SLIDE_ITEMS_EDIT)
      };
    },
  };
})();
