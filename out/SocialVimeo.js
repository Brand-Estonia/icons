function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const SocialVimeo = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 7.67893C2.98644 6.77202 3.2767 6.43639 4.23343 5.52948C5.5467 4.33989 6.53908 3.63906 7.19868 3.58017C8.75559 3.42117 9.71232 4.61078 10.0748 6.98995C10.4611 9.55757 10.7344 11.1534 10.883 11.7777C11.3287 13.9036 11.8278 14.9695 12.3626 14.9695C12.7786 14.9695 14.4488 13.3324 15.2866 11.9485C15.9522 11.0003 16.4098 9.92861 16.6356 8.79203C16.7544 7.60244 15.633 7.4964 14.6169 7.4964C13.6007 7.4964 13.807 7.34335 13.807 7.34335C14.6169 4.99568 16.3093 2.90885 19.0844 3.00307C21.1405 3.06785 22.1091 4.26923 21.9903 6.98996C21.9011 9.02168 20.5403 11.8072 17.9138 15.3406C15.1981 19.033 12.8924 21 11.0146 21C9.84991 21 8.86349 19.7514 8.05532 17.5018C7.51456 15.4406 6.97974 13.3795 6.43898 11.3183C6.231 10.4408 5.92199 9.59281 5.51197 8.7919",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(SocialVimeo);