function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const FAQLight = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 8.00537C8.36294 7.00332 9.07931 6.15836 10.0222 5.62014C10.9651 5.08192 12.0738 4.88517 13.1517 5.06475C14.2297 5.24433 15.2074 5.78865 15.9118 6.60129C16.6161 7.41393 17.0016 8.44246 17 9.5047C17 12.5034 13.5 13 12.5077 15M12.4923 20H12.5077",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(FAQLight);
export default ForwardRef;