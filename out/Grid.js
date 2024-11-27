import * as React from "react";
import { forwardRef } from "react";
const Grid = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2H2v4h4zm8 0h-4v4h4zm8 0h-4v4h4zM6 10H2v4h4zm8 0h-4v4h4zm8 0h-4v4h4zM6 18H2v4h4zm8 0h-4v4h4zm8 0h-4v4h4z" /></svg>;
const ForwardRef = forwardRef(Grid);
export { ForwardRef as ReactComponent };