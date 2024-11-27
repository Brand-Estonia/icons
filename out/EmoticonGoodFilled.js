import * as React from "react";
import { forwardRef } from "react";
const EmoticonGoodFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.285 15a5.002 5.002 0 009.43 0M8 10V8m8 2V8" /></svg>;
const ForwardRef = forwardRef(EmoticonGoodFilled);
export { ForwardRef as ReactComponent };