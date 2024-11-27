import * as React from "react";
import { forwardRef } from "react";
const Layout = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12V8h10v4H6m15 7h-5V8h5v8m-11 3H3v-4h10v4M3 5h18" /></svg>;
const ForwardRef = forwardRef(Layout);
export { ForwardRef as ReactComponent };