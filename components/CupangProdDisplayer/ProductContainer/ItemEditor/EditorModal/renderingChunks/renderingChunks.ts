type typeForGetRenderingChunks = ({
  productNumber,
}: {
  productNumber: string;
  href: string;
  backgroundImageUrl: string;
  title: string;
  description: string;
}) => {
  label: string;
  nameToInput: string;
  productInfo: string;
}[];

export const getRenderingChunks: typeForGetRenderingChunks = ({
  backgroundImageUrl,
  description,
  href,
  productNumber,
  title,
}) => {
  return [
    {
      label: "제품번호 4자리",
      nameToInput: "productNumber",
      productInfo: productNumber,
    },
    {
      label: "제품이름",
      nameToInput: "title",
      productInfo: title,
    },
    {
      label: "제품설명",
      nameToInput: "description",
      productInfo: description,
    },
    {
      label: "제품링크",
      nameToInput: "href",
      productInfo: href,
    },
    {
      label: "사진링크",
      nameToInput: "backgroundImageUrl",
      productInfo: backgroundImageUrl,
    },
  ];
};
