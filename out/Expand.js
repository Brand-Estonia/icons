import * as React from "react";
import { forwardRef } from "react";
const Expand = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4h8v8m-8 8H4v-8" /></svg>;
const ForwardRef = forwardRef(Expand);
export { ForwardRef as ReactComponent };