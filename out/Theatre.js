function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Theatre = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.9695 18.1983C14.8906 18.4139 14.792 18.6295 14.6834 18.8353C13.9435 20.2366 12.592 21.3635 10.8556 21.8143C7.72828 22.6374 4.57133 20.9617 3.80182 18.0807L1.98657 11.2604L3.95967 11.231C5.22245 11.2114 6.48523 11.0448 7.70855 10.741M7.40272 13.5436C6.4655 16.16 3.7229 16.1502 3.7229 16.1502M12.1381 17.5711C12.1381 17.5711 11.418 16.6108 9.62245 17.091C7.82693 17.5711 7.67895 18.7471 7.67895 18.7471M22.0135 5.78253V10.0452C22.0135 13.0243 19.3893 15.4447 16.1633 15.4447C12.9274 15.4447 10.313 13.0243 10.313 10.0452V2.97992L12.2269 3.46009C14.8018 4.09704 17.5247 4.09704 20.0996 3.46009L22.0135 2.97992M14.5453 7.15444C11.2897 7.15444 10.3032 8.58515 10.3032 8.58515M17.6924 7.15444C20.2377 7.15444 21.8162 8.49695 21.8162 8.49695M13.8646 10.8978C13.8646 10.8978 14.3184 12.0051 16.1731 12.0051C18.0278 12.0051 18.4816 10.8978 18.4816 10.8978",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Theatre);