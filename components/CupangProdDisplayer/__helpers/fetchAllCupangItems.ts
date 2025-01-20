import {
  URL_LOCAL_CUPANG_DATA,
  URL_PROD_CUPANG_DATA,
} from "@/components/CupangProdDisplayer/__constants/URLS";

const DEVELOPMENT_MODE = "DEVELOPMENT";
const PRODCUTOIN_MODE = "PRODUCTION";

type typeOptions = {
  serverEnv: string;
};
/**
 *
 * @param param0
 */
export const fetchAllCupangItems = ({ serverEnv }: typeOptions) => {
  let SERVERENV: string;

  if (serverEnv !== DEVELOPMENT_MODE && serverEnv !== PRODCUTOIN_MODE) {
    console.warn(`The mode of fetch is not defined. [serverEnv]:${serverEnv}`);
    SERVERENV = DEVELOPMENT_MODE;
  } else {
    SERVERENV = serverEnv;
  }

  if (SERVERENV === DEVELOPMENT_MODE) {
    console.log(
      "*** WP Local DEVELOPMENT MODE [CUPANG DISPLAY] START ***",
      URL_LOCAL_CUPANG_DATA
    );
    console.log(`
    `);
    return connectToUrl(URL_LOCAL_CUPANG_DATA);
  }
  if (SERVERENV === PRODCUTOIN_MODE) {
    console.log(
      "*** Wordpress PRODUCTION MODE [CUPANG DISPLAY] START ***",
      URL_PROD_CUPANG_DATA
    );
    console.log(`
      `);
    return connectToUrl(URL_PROD_CUPANG_DATA);
  }
};

async function connectToUrl(URL: string) {
  let response: Response;

  try {
    response = await fetch(`${URL}`, {
      method: "GET",
    });
    if (response.status === 200) {
      console.log(`Connected to ${URL}`);
      const allCupangItem = await response.json();
      return allCupangItem;
    } else {
      console.warn(`Can not get:${URL}`);
    }
  } catch (err) {
    console.error(`Errors get:${URL}`, err);
  }
}
