import * as React from "react";
import { forwardRef } from "react";
const Restaurant = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20V4m3 0v4.29c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4m15 16V4s-4 1.97-4 4v4l1.48 1.44" /></svg>;
const ForwardRef = forwardRef(Restaurant);
export { ForwardRef as ReactComponent };