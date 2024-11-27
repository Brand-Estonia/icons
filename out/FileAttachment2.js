function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const FileAttachment2 = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 7V6.8C19 5.11984 19 4.27976 18.673 3.63803C18.3854 3.07354 17.9265 2.6146 17.362 2.32698C16.7202 2 15.8802 2 14.2 2H7.8C6.11984 2 5.27976 2 4.63803 2.32698C4.07354 2.6146 3.6146 3.07354 3.32698 3.63803C3 4.27976 3 5.11984 3 6.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H11.5M11.5 11H7M10.5 15H7M15 7H7M17 18V12.5C17 11.6716 17.6716 11 18.5 11C19.3284 11 20 11.6716 20 12.5V18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18V14",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(FileAttachment2);
export default ForwardRef;