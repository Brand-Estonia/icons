import * as React from "react";
import { forwardRef } from "react";
const Check1 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.5 11.5 11 17l5-5m5-5-2.5 2.5" /></svg>;
const ForwardRef = forwardRef(Check1);
export { ForwardRef as ReactComponent };