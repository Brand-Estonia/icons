import * as React from "react";
import { forwardRef } from "react";
const Expand2 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4h8v8m-8 8H4v-8m12-3.586L8.414 16" /></svg>;
const ForwardRef = forwardRef(Expand2);
export { ForwardRef as ReactComponent };