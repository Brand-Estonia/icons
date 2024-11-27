function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const SocialInstagram = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.7679 21H6.26786C4.44643 21 3 19.5536 3 17.7321V6.26786C3 4.44643 4.44643 3 6.26786 3H17.7321C19.5536 3 21 4.44643 21 6.26786V17.7321C21 19.5536 19.5536 21 17.7321 21H17.0357M8 11.2454C8.42004 9.11188 10.5202 7.65481 12.7254 8.07112C14.8781 8.48742 16.3483 10.569 15.9282 12.7546C15.5082 14.8881 13.408 16.3452 11.2028 15.9289C10.2052 15.7207 9.36513 15.2003 8.73507 14.4198M17 7H17.01",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(SocialInstagram);
export default ForwardRef;