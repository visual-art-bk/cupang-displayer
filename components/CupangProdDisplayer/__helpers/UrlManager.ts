import { IUrls } from "@/components/CupangProdDisplayer/__interfaces/IUrls";

const ROUTE_PREFIX = "wp-json";
const ROUTE_PREFIX_WP_CONTENT = "wp-content";
/**
 * Cupang items
 */
const ROUTE_NAMESPACE_CUPANG_ITMES = "cupang-items/v1";
const ROUTE_CUPANG_ITMES = "items";
const ROUTE_CUPANG_ITEMS_ADD = "add";
const ROUTE_CUPANG_ITEMS_EDIT = "edit";
const ROUTE_CUPANG_ITEMS_DELETE = "delete";
/**
 * Cuapng desc
 */
const ROUTE_NAMESPACE_CUPANG_DESCRIPTION = "cupang-description/v1";
const ROUTE_CUPANG_DESCRIPTION = "description";
const ROUTE_CUPANG_DESCRIPTION_EDIT = "edit";
/**
 * Wanging imgs
 */
const ROUTE_NAMESPACE_WARN_IMG = "uploads/dist/img";
const ROUTE_IMG_BLANK = "warning-img-blank.png";
const ROUTE_IMG_INVALID_GIF = "warning-img-invalid-link.png";
/**
 *
 */
type tPathname = {
  CUPANG_ITMES: string;
  CUPANG_ITEMS_ADD: string;
  CUPANG_ITEMS_EDIT: string;
  CUPANG_ITEMS_DELETE: string;
  CUPANG_DESCRIPTION: string;
  CUPANG_DESCRIPTION_EDIT: string;
  HOSTING_WARNING_IMG: string;
  HOSTING_WARNING_IMG_INVALID_GIF_LINK: string;
};
const PATHNAME: tPathname = {
  CUPANG_ITMES: makePathname(
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_CUPANG_ITMES,
    ROUTE_CUPANG_ITMES
  ),

  CUPANG_ITEMS_ADD: makePathname(
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_CUPANG_ITMES,
    ROUTE_CUPANG_ITEMS_ADD
  ),

  CUPANG_ITEMS_EDIT: makePathname(
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_CUPANG_ITMES,
    ROUTE_CUPANG_ITEMS_EDIT
  ),

  CUPANG_ITEMS_DELETE: makePathname(
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_CUPANG_ITMES,
    ROUTE_CUPANG_ITEMS_DELETE
  ),

  CUPANG_DESCRIPTION: makePathname(
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_CUPANG_DESCRIPTION,
    ROUTE_CUPANG_DESCRIPTION
  ),

  CUPANG_DESCRIPTION_EDIT: makePathname(
    ROUTE_PREFIX,
    ROUTE_NAMESPACE_CUPANG_DESCRIPTION,
    ROUTE_CUPANG_DESCRIPTION_EDIT
  ),
  HOSTING_WARNING_IMG: makePathname(
    ROUTE_PREFIX_WP_CONTENT,
    ROUTE_NAMESPACE_WARN_IMG,
    ROUTE_IMG_BLANK
  ),
  HOSTING_WARNING_IMG_INVALID_GIF_LINK: makePathname(
    ROUTE_PREFIX_WP_CONTENT,
    ROUTE_NAMESPACE_WARN_IMG,
    ROUTE_IMG_INVALID_GIF
  ),
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
        loadCupangItems: makeUrl(PATHNAME.CUPANG_ITMES),
        addCupangItem: makeUrl(PATHNAME.CUPANG_ITEMS_ADD),
        editCupangItems: makeUrl(PATHNAME.CUPANG_ITEMS_EDIT),
        deleteCupangItems: makeUrl(PATHNAME.CUPANG_ITEMS_DELETE),
        loadDescriptionForCupang: makeUrl(PATHNAME.CUPANG_DESCRIPTION),
        editDescriptionForCupang: makeUrl(PATHNAME.CUPANG_DESCRIPTION_EDIT),
        warningImgWhenLinkBlank: makeUrl(PATHNAME.HOSTING_WARNING_IMG),
        warningImgWhenLinkInvalidGIF: makeUrl(
          PATHNAME.HOSTING_WARNING_IMG_INVALID_GIF_LINK
        ),
      };
    },
  };
})();

function makePathname(...paths: string[]) {
  return paths.join("/");
}
