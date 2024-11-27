import * as React from "react";
import { forwardRef } from "react";
const EmoticonGood = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><g clipPath="url(#a)"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.285 15a5.002 5.002 0 009.43 0M18 21.221A10.95 10.95 0 0112 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a10.95 10.95 0 01-1.779 6M8 10V8m8 2V8" /></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(EmoticonGood);
export { ForwardRef as ReactComponent };