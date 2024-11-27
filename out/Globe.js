import * as React from "react";
import { forwardRef } from "react";
const Globe = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12.009A10 10 0 1121.165 8M2.75 8h18.5M3 16h17.45m-8.475 6c2.617 0 3.49-4.546 3.49-10 0-5.455-.873-10-3.49-10s-3.49 4.545-3.49 10c0 5.454.872 10 3.49 10" /></svg>;
const ForwardRef = forwardRef(Globe);
export { ForwardRef as ReactComponent };