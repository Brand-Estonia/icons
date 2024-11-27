import * as React from "react";
import { forwardRef } from "react";
const Bar = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20h10m-5 0v-6L4 4h16l-6 7.5M8 8h5" /></svg>;
const ForwardRef = forwardRef(Bar);
export { ForwardRef as ReactComponent };