/* eslint-disable max-len */
import React from "react";
/**
 *
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="54" viewBox="0 0 54 54" width="54" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_3948_31601)">
      <circle cx="27" cy="26" fill="#1686C1" r="24" />
    </g>
    <path
      d="M23.9102 33.9201L30.4302 27.4001C31.2002 26.6301 31.2002 25.3701 30.4302 24.6001L23.9102 18.0801"
      stroke="#E8F3F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="54" id="filter0_dd_3948_31601" width="54" x="0" y="0">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3948_31601" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_3948_31601" mode="normal" result="effect2_dropShadow_3948_31601" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3948_31601" mode="normal" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SVG;
