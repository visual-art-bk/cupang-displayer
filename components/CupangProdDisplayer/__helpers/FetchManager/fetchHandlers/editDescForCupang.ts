import { IDeescriptionForCupang } from "../../../__interfaces/IDeescriptionForCupang";
/**
 *
 */
export default async function editDescForCupang(
  url: string,
  { content, id, size }: IDeescriptionForCupang
) {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id,
        content,
        size,
      }),
    });

    if (response.status !== 200) {
      throw new Error(`Can not get: ${url},`);
    }
    console.log(`Fetched to ${url}`);

    const descriptoinForCupang: Promise<IDeescriptionForCupang[]> =
      await response.json();

    return descriptoinForCupang;
  } catch (err) {
    console.error(`Errors on:${url}`, err);
  }
}
