import { ProductInfos } from "../../../__interfaces/ProductInfos";

export default async function loadCupangItems(url: string) {
  let response: Response;

  try {
    response = await fetch(`${url}`, {
      method: "GET",
    });
    if (response.status === 200) {
      console.log(`Fetched to ${url}`);
      
      const allCupangItem: Promise<ProductInfos[]> = await response.json();
      return allCupangItem;
    } else {
      console.warn(`Can not get:${url}`);
    }
  } catch (err) {
    console.error(`Errors on:${url}`, err);
  }
}
