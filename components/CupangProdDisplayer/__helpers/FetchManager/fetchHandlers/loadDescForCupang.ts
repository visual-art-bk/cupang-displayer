import { IDeescriptionForCupang } from "../../../__interfaces/IDeescriptionForCupang";
/**
 *
 */
export default async function loadDescForCupang(url: string) {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "GET",
    });

    if (response.status !== 200) {
      throw new Error(`Can not get: ${url}`);
    }
    console.log(`Fetched to ${url}`);

    const descriptoinForCupang: Promise<IDeescriptionForCupang[]> =
      await response.json();

    return descriptoinForCupang;
  } catch (err) {
    console.error(`Errors on:${url}`, err);
  }
}
