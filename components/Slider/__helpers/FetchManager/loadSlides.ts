import { SlideInfos } from '../../__interfaces/SlideInfos'

export default async function loadSlides(url: string) {
  let response: Response;

  try {
    response = await fetch(`${url}`, {
      method: "GET",
    });
    if (response.status === 200) {
      console.log(`Fetched to ${url}`);
      const allCupangItem: Promise<SlideInfos[]> = await response.json();
      return allCupangItem;
    } else {
      console.warn(`Can not get:${url}`);
    }
  } catch (err) {
    console.error(`Errors on:${url}`, err);
  }
}
