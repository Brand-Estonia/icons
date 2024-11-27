import * as React from "react";
import { forwardRef } from "react";
const Sort = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 9 4-4 4 4m0 6-4 4-4-4" /></svg>;
const ForwardRef = forwardRef(Sort);
export { ForwardRef as ReactComponent };