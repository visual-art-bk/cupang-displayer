import './more-product-button.module.css';
import Store from '@/components/CupangProdDisplayer/__store/Store';
import { useRecoilState } from 'recoil';
import { MouseEvent } from 'react';
const PREFIX = '_moreProd-ne-32';
const INITIAL_SIZE_FOR_DISPLAY = 9;

const { productInfosState } = Store.getAtoms();

export default function MoreProduct() {
  const [stateForProductInfos, setStateForProdctInfos] =
    useRecoilState(productInfosState);

  const addShowings = () => {
    if (stateForProductInfos.rest.length === 0) {
      alert('마지막 상품입니다.');
      return;
    }
    const loaded = stateForProductInfos.rest.filter((info, index) => {
      if (index < INITIAL_SIZE_FOR_DISPLAY) {
        return info;
      }
    });
    const add = stateForProductInfos.showing.concat(loaded);

    const restUpdated = stateForProductInfos.sourceFromJson.slice(add.length);
    setStateForProdctInfos({
      ...stateForProductInfos,
      showing: add,
      cachedForLastestShowing: add,
      rest: restUpdated,
    });
  };

  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    addShowings();
  };
  return (
    <div className="more-product-button" prefix={PREFIX}>
      <div className="layout" prefix={PREFIX}>
        <button className="button" prefix={PREFIX} onClick={onClick}>
          상품 더보기
        </button>
      </div>
    </div>
  );
}
