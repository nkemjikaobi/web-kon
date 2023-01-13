/* eslint-disable max-len */
import React from "react";
/**
 * Logo Dark
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" fill="white" r="31" stroke="black" strokeWidth="2" />
    <path
      d="M34.9998 39.92L28.4798 33.4C27.7098 32.63 27.7098 31.37 28.4798 30.6L34.9998 24.08"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </svg>
);

export default SVG;
