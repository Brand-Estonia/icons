const React = require('react');
const {
  forwardRef
} = require('react');
const BadgeFilled = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.5029 1.54977C16.2564 1.06085 15.6625 0.861115 15.1706 1.10169L12.4 2.4568L9.62936 1.10169C9.14504 0.864808 8.56012 1.05452 8.30703 1.53057L6.85605 4.25979L3.81653 4.79516C3.28567 4.88866 2.92444 5.38611 2.99983 5.91985L3.43141 8.97548L1.2818 11.1942C0.906065 11.582 0.906066 12.198 1.2818 12.5858L3.43141 14.8045L2.99983 17.8601C2.92444 18.3939 3.28567 18.8913 3.81653 18.9848L6.85605 19.5202L8.30703 22.2494C8.56012 22.7255 9.14504 22.9152 9.62936 22.6783L12.3994 21.3235L12.9997 21.6179L15.1711 22.6785C15.6554 22.9151 16.24 22.7253 16.493 22.2494L17.9439 19.5202L20.9835 18.9848C21.5143 18.8913 21.8756 18.3939 21.8002 17.8601L21.3686 14.8045L23.5182 12.5858C23.8939 12.198 23.8939 11.582 23.5182 11.1942L21.3686 8.97548L21.8002 5.91985C21.8758 5.38453 21.5122 4.88605 20.9794 4.79446L17.8694 4.25983L16.5029 1.54977ZM17.1682 9.53019C17.5218 9.10592 17.4645 8.47535 17.0402 8.12179C16.6159 7.76822 15.9854 7.82555 15.6318 8.24983L11.3328 13.4086L9.10713 11.1829C8.71661 10.7924 8.08344 10.7924 7.69292 11.1829C7.30239 11.5734 7.30239 12.2066 7.69292 12.5971L10.6929 15.5971C10.8916 15.7958 11.1647 15.9017 11.4453 15.889C11.726 15.8763 11.9884 15.746 12.1682 15.5302L17.1682 9.53019Z" fill="#000" /></svg>;
module.exports = forwardRef(BadgeFilled);