import * as React from "react";
import { forwardRef } from "react";
const Calendar = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h17m1 4V6a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1v-1M8 3v4m8-4v4" /></svg>;
const ForwardRef = forwardRef(Calendar);
export { ForwardRef as ReactComponent };