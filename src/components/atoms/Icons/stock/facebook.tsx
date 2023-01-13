/* eslint-disable max-len */
import React from "react";
/**
 *
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="white" height="32" rx="10" width="32" />
    <path
      clipRule="evenodd"
      d="M17.6676 25.4077V16.7028H20.0706L20.389 13.7031H17.6676L17.6717 12.2017C17.6717 11.4193 17.7461 11.0001 18.8698 11.0001H20.372V8H17.9687C15.082 8 14.066 9.4552 14.066 11.9024V13.7034H12.2666V16.7031H14.066V25.4077H17.6676Z"
      fill="#0C2330"
      fillRule="evenodd"
    />
  </svg>
);

export default SVG;
