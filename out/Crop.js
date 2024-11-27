import * as React from "react";
import { forwardRef } from "react";
const Crop = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 17H7V2M2 7h2m6 0h7v7m0 6v2" /></svg>;
const ForwardRef = forwardRef(Crop);
export { ForwardRef as ReactComponent };