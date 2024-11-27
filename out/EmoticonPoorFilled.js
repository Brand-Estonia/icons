function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const EmoticonPoorFilled = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 11,
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 17C8.86287 15.794 10.3323 15 12 15C13.6677 15 15.1371 15.794 16 17M8 10V8M16 10V8",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(EmoticonPoorFilled);
export default ForwardRef;