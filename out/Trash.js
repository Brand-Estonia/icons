function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const Trash = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.0033 8.5L18 20.0149L16.4125 21H7.47865L6 20.0263L6.00326 8.57693M10 21L10.0033 8.5M14 21L14.0033 8.5M19 5H15V3H9V5H5",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(Trash);
export default ForwardRef;