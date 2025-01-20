import './product.module.css'

import Image from './Image/Image';
import Title from './Title/Title';
import Description from './Description/Description';

const PREFIX = '_product-md-43';

type productInfos = {
  id: string;
  href: string;
  backgroundImageUrl: string;
  productNumber: string;
  title: string;
  description: string;
};
export default function Product({
  backgroundImageUrl,
  description,
  href,
  id,
  productNumber,
  title
}: productInfos) {
  return (
    <a className="product" href={href} role='link' aria-label='product-link' prefix={PREFIX}>
      <div className="layout" prefix={PREFIX}>
        <Image url={backgroundImageUrl}></Image>

        <div className="text-layout" prefix={PREFIX}>
          <Title
            content={title}
            id={id}
            titleNumber={productNumber}
          ></Title>

          <Description content={description} id={id}></Description>
        </div>
      </div>
    </a>
  );
}
