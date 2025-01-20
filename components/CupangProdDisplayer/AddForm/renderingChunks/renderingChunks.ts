type typeChunksForInput = {
  nameToInput: string;
  label: string;
  placeholder?: string;
};
export const chunksForInput: typeChunksForInput[] = [
  {
    label: "제품번호 4자리",
    nameToInput: "productNumber",
    placeholder: "예) 숫자4자리 9832",
  },
  {
    label: "제품이름",
    nameToInput: "title",
    placeholder: "예) 깔끔한 헤어핀",
  },
  {
    label: "제품설명",
    nameToInput: "description",
  },
  {
    label: "쿠팡제품링크 (이미지링크 입력X)",
    nameToInput: "href",
  },
  {
    label: "이미지GIF링크 (공란 시 경고)",
    nameToInput: "backgroundImageUrl",
  },
 
];
