function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const SocialFlickr = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.99998 16C3.79067 16 2 14.2094 2 12.0001C2 9.79077 3.79067 8 5.99998 8C8.20929 8 10 9.79077 10 12.0001C10 12.8489 9.73259 13.6744 9.23259 14.3546M18 16C15.7907 16 14 14.2094 14 12.0001C14 9.79077 15.7907 8 18 8C20.2093 8 22 9.79077 22 12.0001C22 12.8489 21.7326 13.6744 21.2326 14.3546",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(SocialFlickr);
export default ForwardRef;