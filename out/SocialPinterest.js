function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const SocialPinterest = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.99994 22.0002L10.4999 10.5002M4.74427 18.8834C0.94048 14.8776 1.10689 8.54794 5.11276 4.74415C9.11863 0.940362 15.4484 1.1067 19.2522 5.11257C23.0559 9.11844 22.8895 15.4482 18.8837 19.252C17.0234 21.0172 14.5628 21.9978 12.0012 21.9978M6.70151 14.8061C5.14909 11.8843 6.25876 8.25139 9.18425 6.70089C12.1097 5.15039 15.747 6.25879 17.2994 9.18066C17.7589 10.0483 17.9999 11.011 17.9999 11.9906C17.9999 15.2987 15.534 17.9015 12.446 16.7036C10.9999 16.1427 9.99994 14.5002 9.99994 13.5002",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(SocialPinterest);