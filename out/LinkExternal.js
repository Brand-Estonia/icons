import * as React from "react";
import { forwardRef } from "react";
const LinkExternal = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5 14 10M8 6h10v9.5" /></svg>;
const ForwardRef = forwardRef(LinkExternal);
export { ForwardRef as ReactComponent };