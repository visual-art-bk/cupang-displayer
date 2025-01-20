import "./slide-img.module.css";
import { ForwardedRef, forwardRef, RefObject } from "react";

const PREFIX = "_slideImg-kr-45";

export const SlideImgForwardRef = forwardRef(function SlideImg(
  {
    backroundUrl,
    href,
    linkTitle,
    translateX,
  }: {
    backroundUrl: string;
    href: string;
    linkTitle: string;
    translateX: number;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className="slider-img"
      prefix={PREFIX}
      ref={ref}
      style={{ transform: `translateX(${translateX.toString()}%)` }}
    >
      <div className="layout" prefix={PREFIX}>
        <div
          className="img-item"
          style={{ backgroundImage: `url(${backroundUrl})` }}
          prefix={PREFIX}
        >
          <SlideLink href={href} linkTitle={linkTitle}></SlideLink>
        </div>
      </div>
    </div>
  );
});

function SlideLink({ href, linkTitle }: { href: string; linkTitle: string }) {
  return (
    <div className="product-link" prefix={PREFIX}>
      <a href={href}>{linkTitle}</a>
    </div>
  );
}
