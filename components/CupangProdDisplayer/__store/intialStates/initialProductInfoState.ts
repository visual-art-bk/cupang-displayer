import {ProductInfos} from '../../__interfaces/ProductInfos'

export const intialProductInfoState: {
  sourceFromJson: ProductInfos[],
  cachedForLastestShowing: ProductInfos[],
  showing: ProductInfos[],
  rest: ProductInfos[]
} = {
  sourceFromJson: [],
  cachedForLastestShowing: [],
  rest: [],
  showing: []
}