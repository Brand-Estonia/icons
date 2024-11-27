function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Leaf = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 22V7M12 14.27L8.88 12.18M12.17 16.63L15.55 14.04M12.2 11.45L14.48 9.52M12 20C12 20 19 19 19 14C19 7 12 2 12 2C12 2 5 7 5 14C5 16.82 7.23 18.37 9.17 19.18",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Leaf);