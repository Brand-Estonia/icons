const React = require('react');
const {
  forwardRef
} = require('react');
const Settings = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 12.5464 9.14609 13.0587 9.40135 13.5M18.9545 7.54545L19.0091 7.49091C19.1781 7.32205 19.3122 7.12152 19.4037 6.9008C19.4952 6.68008 19.5423 6.44348 19.5423 6.20455C19.5423 5.96561 19.4952 5.72901 19.4037 5.50829C19.3122 5.28757 19.1781 5.08704 19.0091 4.91818C18.8402 4.74913 18.6397 4.61503 18.419 4.52353C18.1983 4.43203 17.9617 4.38493 17.7227 4.38493C17.4838 4.38493 17.2472 4.43203 17.0265 4.52353C16.8057 4.61503 16.6052 4.74913 16.4364 4.91818L16.3818 4.97273C16.1676 5.18231 15.8954 5.3229 15.6005 5.37637C15.3056 5.42984 15.0015 5.39374 14.7273 5.27273C14.4584 5.15749 14.2291 4.96614 14.0676 4.72224C13.906 4.47834 13.8193 4.19253 13.8182 3.9V3.81818C13.8182 3.33597 13.6266 2.87351 13.2856 2.53253C12.9447 2.19156 12.4822 2 12 2C11.5178 2 11.0553 2.19156 10.7144 2.53253C10.3734 2.87351 10.1818 3.33597 10.1818 3.81818V3.97273C10.1807 4.26526 10.094 4.55107 9.93245 4.79497C9.77093 5.03887 9.54161 5.23022 9.27273 5.34545H9.2C8.9258 5.46647 8.62164 5.50257 8.32674 5.4491C8.03183 5.39562 7.75971 5.25503 7.54545 5.04545L7.49091 4.99091C7.32205 4.82186 7.12152 4.68775 6.9008 4.59626C6.68008 4.50476 6.44348 4.45766 6.20455 4.45766C5.96561 4.45766 5.72901 4.50476 5.50829 4.59626C5.28757 4.68775 5.08704 4.82186 4.91818 4.99091C4.74913 5.15977 4.61503 5.36029 4.52353 5.58102C4.43203 5.80174 4.38493 6.03834 4.38493 6.27727C4.38493 6.51621 4.43203 6.7528 4.52353 6.97353C4.61503 7.19425 4.74913 7.39478 4.91818 7.56364L4.97273 7.61818C5.18231 7.83244 5.3229 8.10456 5.37637 8.39947C5.42984 8.69437 5.39374 8.99853 5.27273 9.27273C5.16883 9.55521 4.98236 9.79991 4.73754 9.97501C4.49273 10.1501 4.2009 10.2475 3.9 10.2545H3.81818C3.33597 10.2545 2.87351 10.4461 2.53253 10.7871C2.19156 11.1281 2 11.5905 2 12.0727C2 12.5549 2.19156 13.0174 2.53253 13.3584C2.87351 13.6994 3.33597 13.8909 3.81818 13.8909H3.97273C4.26526 13.8921 4.55107 13.9788 4.79497 14.1403C5.03887 14.3018 5.23022 14.5311 5.34545 14.8C5.46647 15.0742 5.50257 15.3784 5.4491 15.6733C5.39562 15.9682 5.25503 16.2403 5.04545 16.4545L4.99091 16.5091C4.82186 16.678 4.68775 16.8785 4.59626 17.0992C4.50476 17.3199 4.45766 17.5565 4.45766 17.7955C4.45766 18.0344 4.50476 18.271 4.59626 18.4917C4.68775 18.7124 4.82186 18.913 4.99091 19.0818C5.15977 19.2509 5.36029 19.385 5.58102 19.4765C5.80174 19.568 6.03834 19.6151 6.27727 19.6151C6.51621 19.6151 6.7528 19.568 6.97353 19.4765C7.19425 19.385 7.39478 19.2509 7.56364 19.0818L7.61818 19.0273C7.83244 18.8177 8.10456 18.6771 8.39947 18.6236C8.69437 18.5702 8.99853 18.6063 9.27273 18.7273C9.55521 18.8312 9.79991 19.0176 9.97501 19.2625C10.1501 19.5073 10.2475 19.7991 10.2545 20.1V20.1818C10.2545 20.664 10.4461 21.1265 10.7871 21.4675C11.1281 21.8084 11.5905 22 12.0727 22C12.5549 22 13.0174 21.8084 13.3584 21.4675C13.6994 21.1265 13.8909 20.664 13.8909 20.1818V20.0273C13.8921 19.7347 13.9788 19.4489 14.1403 19.205C14.3018 18.9611 14.5311 18.7698 14.8 18.6545C15.0742 18.5335 15.3784 18.4974 15.6733 18.5509C15.9682 18.6044 16.2403 18.745 16.4545 18.9545L16.5091 19.0091C16.678 19.1781 16.8785 19.3122 17.0992 19.4037C17.3199 19.4952 17.5565 19.5423 17.7955 19.5423C18.0344 19.5423 18.271 19.4952 18.4917 19.4037C18.7124 19.3122 18.913 19.1781 19.0818 19.0091C19.2509 18.8402 19.385 18.6397 19.4765 18.419C19.568 18.1983 19.6151 17.9617 19.6151 17.7227C19.6151 17.4838 19.568 17.2472 19.4765 17.0265C19.385 16.8057 19.2509 16.6052 19.0818 16.4364L19.0273 16.3818C18.8177 16.1676 18.6771 15.8954 18.6236 15.6005C18.5702 15.3056 18.6063 15.0015 18.7273 14.7273C18.8425 14.4584 19.0339 14.2291 19.2778 14.0676C19.5217 13.906 19.8075 13.8193 20.1 13.8182H20.1818C20.664 13.8182 21.1265 13.6266 21.4675 13.2856C21.8084 12.9447 22 12.4822 22 12C22 11.5178 21.8084 11.0553 21.4675 10.7144C21.1265 10.3734 20.664 10.1818 20.1818 10.1818H20.0273" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Settings);