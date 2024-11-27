import * as React from "react";
import { forwardRef } from "react";
const FAQFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11M10.797 7.898a2.2 2.2 0 013.315 1.9V9.8c0 .516-.402 1.054-1.16 1.56a6.6 6.6 0 01-1.371.69l-.018.007a1.1 1.1 0 00.697 2.087h.001l.002-.001.004-.002.013-.004.038-.013.127-.048a9 9 0 001.727-.886c.892-.594 2.14-1.705 2.14-3.389a4.4 4.4 0 00-8.55-1.466 1.1 1.1 0 102.075.73 2.2 2.2 0 01.96-1.167M12 16.4a1.1 1.1 0 000 2.2h.011a1.1 1.1 0 000-2.2z" /></svg>;
const ForwardRef = forwardRef(FAQFilled);
export { ForwardRef as ReactComponent };