import * as React from "react";
import { forwardRef } from "react";
const HamburgerMenu = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14-5H5m14 10H5" /></svg>;
const ForwardRef = forwardRef(HamburgerMenu);
export { ForwardRef as ReactComponent };