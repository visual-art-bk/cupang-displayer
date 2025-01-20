import "./product-container.module.css";
import { Fragment } from "react/jsx-runtime";
import ItemRemover from "./ItemRemover/ItemRemover";
import ItemEditor from "./ItemEditor/ItemEditor";
import Product from "./Product/Product";
import { ProductInfos } from "@/components/CupangProdDisplayer/__interfaces/ProductInfos";
import { ReactNode } from "react";

const PREFIX = "_prodContainer-ne-94";
let numForKey = 0;

const CLASS_NAME_PRODUCT_CONTAINER_DEFAULT = "product-container";
const CLASS_NAME_PRODUCT_CONTAINER_EDI_MODE = "edit";

export default function ProductContainer({
  products,
  isEditMode,
  serverEnv,
}: {
  isEditMode: boolean;
  serverEnv: string;
  products: ProductInfos[];
}) {
  const productsRendered = products.map((product) => {
    if (isEditMode === false) {
      return (
        <Fragment key={`${product.productNumber}_${numForKey}`}>
          <div className="layout" prefix={PREFIX}>
            <Product {...product}></Product>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment key={`${product.productNumber}_${numForKey}`}>
        <div className="layout" prefix={PREFIX}>
          <ButtonLayout>
            <ItemRemover
              isEditMode={isEditMode}
              productInfos={product}
              serverEnv={serverEnv}
            ></ItemRemover>
            <ItemEditor
              isEditMode={isEditMode}
              productInfos={product}
              serverEnv={serverEnv}
            ></ItemEditor>
          </ButtonLayout>

          <Product {...product}></Product>
        </div>
      </Fragment>
    );
  });
  numForKey += 1;

  return (
    <div
      className={
        isEditMode === true ? "product-container edit" : "product-container"
      }
      prefix={PREFIX}
    >
      {productsRendered}
    </div>
  );
}

function ButtonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="button-layout" prefix={PREFIX}>
      {children}
    </div>
  );
}
