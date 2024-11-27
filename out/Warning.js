function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const Warning = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_3983_620)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 18V16.5M12 12.5L12 6M1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_3983_620"
}, /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  fill: "white"
}))));
const ForwardRef = /*#__PURE__*/forwardRef(Warning);
export default ForwardRef;