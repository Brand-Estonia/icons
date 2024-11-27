import * as React from "react";
import { forwardRef } from "react";
const Plus = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-8-8h8m4 0h4" /></svg>;
const ForwardRef = forwardRef(Plus);
export { ForwardRef as ReactComponent };