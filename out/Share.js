function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const Share = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 12.5C4 11.1193 5.11929 10 6.5 10C7.88071 10 9 11.1193 9 12.5C9 13.8807 7.88071 15 6.5 15C6.14445 15 5.80623 14.9258 5.5 14.792M17.5 8C16.1193 8 15 6.88071 15 5.5C15 4.11929 16.1193 3 17.5 3C18.8807 3 20 4.11929 20 5.5C20 5.85555 19.9258 6.19377 19.792 6.5M17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5C20 18.8556 19.9258 19.1938 19.792 19.5M8.5 11L15.2674 6.62621M8.5 14.0002L15.2674 17.3738",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(Share);
export default ForwardRef;