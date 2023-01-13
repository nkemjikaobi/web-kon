/* eslint-disable max-len */
import React from "react";
/**
 *
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="#CAD4DD" height="10" rx="5" width="10" {...props} />
  </svg>
);

export default SVG;
