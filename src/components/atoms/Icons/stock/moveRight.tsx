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
      d="M28.9102 39.92L35.4302 33.4C36.2002 32.63 36.2002 31.37 35.4302 30.6L28.9102 24.08"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </svg>
);

export default SVG;
