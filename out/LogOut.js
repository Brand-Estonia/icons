import * as React from "react";
import { forwardRef } from "react";
const LogOut = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 17 5-5m0 0-5-5m5 5H8.5M10 3H7.5c-1.398 0-2.097 0-2.648.228a3 3 0 00-1.624 1.624C3 5.403 3 6.102 3 7.5v9c0 1.398 0 2.097.228 2.648a3 3 0 001.624 1.624C5.403 21 6.102 21 7.5 21H10" /></svg>;
const ForwardRef = forwardRef(LogOut);
export { ForwardRef as ReactComponent };