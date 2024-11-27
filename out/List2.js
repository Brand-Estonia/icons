function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const List2 = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 5H21M9 12H21M9 19H21M5 5C5 5.55228 4.55228 6 4 6C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4C4.55228 4 5 4.44772 5 5ZM5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18C4.55228 18 5 18.4477 5 19Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(List2);
export default ForwardRef;