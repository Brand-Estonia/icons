function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Error = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 8.8639V13.0852M12 17.3064H12.0107M22.5608 20.7982C22.279 21 21.791 21 20.8152 21H3.18484C2.20897 21 1.72104 21 1.43921 20.7982C1.19339 20.6222 1.03501 20.3518 1.0035 20.0541C0.967367 19.7129 1.21184 19.2971 1.70078 18.4655L10.5159 3.47307C11.0031 2.64447 11.2467 2.23018 11.5645 2.09103C11.8418 1.96966 12.1582 1.96966 12.4355 2.09103C12.7533 2.23018 12.9969 2.64447 13.4841 3.47307L20.5 15.4055L21.2913 16.7534L21.687 17.4274",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Error);