function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Box = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 8V16.2C3.5 17.8802 3.5 18.7202 3.82698 19.362C4.1146 19.9265 4.57354 20.3854 5.13803 20.673C5.77976 21 6.61984 21 8.3 21H15.7C17.3802 21 18.2202 21 18.862 20.673C19.4265 20.3854 19.8854 19.9265 20.173 19.362C20.5 18.7202 20.5 17.8802 20.5 16.2V12.1M3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V6.4C22 6.96005 22 7.24008 21.891 7.45399C21.7951 7.64215 21.6422 7.79513 21.454 7.89101C21.2401 8 20.9601 8 20.4 8H3.6C3.03995 8 2.75992 8 2.54601 7.89101C2.35785 7.79513 2.20487 7.64215 2.10899 7.45399C2 7.24008 2 6.96005 2 6.4V4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3ZM9.6 11.5H14.4C14.9601 11.5 15.2401 11.5 15.454 11.609C15.6422 11.7049 15.7951 11.8578 15.891 12.046C16 12.2599 16 12.5399 16 13.1V13.9C16 14.4601 16 14.7401 15.891 14.954C15.7951 15.1422 15.6422 15.2951 15.454 15.391C15.2401 15.5 14.9601 15.5 14.4 15.5H9.6C9.03995 15.5 8.75992 15.5 8.54601 15.391C8.35785 15.2951 8.20487 15.1422 8.10899 14.954C8 14.7401 8 14.4601 8 13.9V13.1C8 12.5399 8 12.2599 8.10899 12.046C8.20487 11.8578 8.35785 11.7049 8.54601 11.609C8.75992 11.5 9.03995 11.5 9.6 11.5Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Box);