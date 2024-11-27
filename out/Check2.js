import * as React from "react";
import { forwardRef } from "react";
const Check2 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 11 6 6L21 7" /></svg>;
const ForwardRef = forwardRef(Check2);
export { ForwardRef as ReactComponent };