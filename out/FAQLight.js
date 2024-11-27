import * as React from "react";
import { forwardRef } from "react";
const FAQLight = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8.005a4.53 4.53 0 012.022-2.385 4.75 4.75 0 013.13-.555 4.66 4.66 0 012.76 1.536A4.42 4.42 0 0117 9.505C17 12.503 13.5 13 12.508 15m-.016 5h.016" /></svg>;
const ForwardRef = forwardRef(FAQLight);
export { ForwardRef as ReactComponent };