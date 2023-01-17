import * as React from "react";
import { SVGProps } from "react";

const MenuSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={13}
    fill="none"
    viewBox="0 0 16 13"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={15.738}
      height={2.061}
      rx={1.03}
      transform="matrix(-1 0 0 1 15.738 .161)"
      fill="#3D4852"
    />
    {'{" "}'}
    <rect
      width={15.738}
      height={2.061}
      rx={1.03}
      transform="matrix(-1 0 0 1 15.738 10.284)"
      fill="#3D4852"
    />
    {'{" "}'}
    <rect
      width={15.738}
      height={2.061}
      rx={1.03}
      transform="matrix(-1 0 0 1 15.738 5.222)"
      fill="#3D4852"
    />
  </svg>
);

export default MenuSvg;
