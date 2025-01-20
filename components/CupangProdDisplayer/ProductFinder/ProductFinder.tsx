import './product-finder.module.css';
import { MutableRefObject, forwardRef, useEffect, useState } from 'react';
import Store from '@/components/CupangProdDisplayer/__store/Store';
import { useRecoilState } from 'recoil';

const PREFIX = '_prodFinder-ne-93';

const ProductFinder = forwardRef(function ProductFinder(
  props,
  ref: React.ForwardedRef<any>
) {
  const inputRef = ref as MutableRefObject<HTMLInputElement>;

  const { productInfosState } = Store.getAtoms();
  const [stateForProductInfos, setStateForProductInfos] =
    useRecoilState(productInfosState);

  const cacheShowingProductInfos = () => {
    setStateForProductInfos({
      ...stateForProductInfos,
      cachedForLastestShowing: stateForProductInfos.showing,
    });
  };
  const findProduct = () => {
    const finded = stateForProductInfos.sourceFromJson.filter((info) => {
      if (info.productNumber === inputRef.current.value) {
        return info;
      }
    });
    setStateForProductInfos({
      ...stateForProductInfos,
      showing: finded,
    });
  };
  const whenItSearchForProductNumber = () => {
    if (inputRef.current.value.length > 0) {
      cacheShowingProductInfos();
      setTimeout(() => {
        findProduct();
      });
    }
  };
  const initFinder = () => {
    if (inputRef.current.value.length === 0) {
      setStateForProductInfos({
        ...stateForProductInfos,
        showing: stateForProductInfos.cachedForLastestShowing,
      });
    }
  };
  const onChange = () => {
    initFinder()
    whenItSearchForProductNumber();
  };
  return (
    <div className="product-finder" prefix={PREFIX}>
      <form className="form" prefix={PREFIX}>
        <input
          ref={ref}
          className="input"
          onChange={onChange}
          prefix={PREFIX}
          placeholder={'제품번호 숫자만 입력하세요'}
        ></input>
      </form>
    </div>
  );
});

export default ProductFinder;
