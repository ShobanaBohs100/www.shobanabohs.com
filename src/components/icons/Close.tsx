import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={13}
    fill="none"
    viewBox="0 0 16 13"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={3.176}
      y={0.099}
      width={15.738}
      height={2.061}
      rx={1.03}
      transform="rotate(45 3.176 .099)"
      fill="#3D4852"
    />
    <rect
      x={1.717}
      y={11.227}
      width={15.738}
      height={2.061}
      rx={1.03}
      transform="rotate(-45 1.717 11.227)"
      fill="#3D4852"
    />
  </svg>
);

export default CloseIcon;
