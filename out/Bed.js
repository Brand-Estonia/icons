function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const Bed = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 16V13C21 11.9 20.1 11 19 11H5C3.9 11 3 11.9 3 13V19M21 16H6M21 16V19M4 8.46V8C4 6.9 4.9 6 6 6H10C11.1 6 12 6.9 12 8V11V8.14M14.32 6H18C19.1 6 20 6.9 20 8V11",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(Bed);
export default ForwardRef;