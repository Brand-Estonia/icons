function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const Favicon = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 7.82C4 6.10882 4 5.25323 4.48944 4.6892C4.55123 4.61799 4.61799 4.55123 4.6892 4.48944C5.25323 4 6.10882 4 7.82 4H16.18C17.8912 4 18.7468 4 19.3108 4.48944C19.382 4.55123 19.4488 4.61799 19.5106 4.6892C20 5.25323 20 6.10882 20 7.82V16.18C20 17.8912 20 18.7468 19.5106 19.3108C19.4488 19.382 19.382 19.4488 19.3108 19.5106C18.7468 20 17.8912 20 16.18 20H7.82C6.10882 20 5.25323 20 4.6892 19.5106C4.61799 19.4488 4.55123 19.382 4.48944 19.3108C4 18.7468 4 17.8912 4 16.18V7.82Z",
  fill: "currentColor"
}));
const ForwardRef = /*#__PURE__*/forwardRef(Favicon);
export default ForwardRef;