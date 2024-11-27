import * as React from "react";
import { forwardRef } from "react";
const SocialTwitter = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16.003 7.504 4-4.499M4 21l4-4.5 1-1.125 1-1.124M21 21l-.001-.001h-4.985L3 3l4.994.002L14.497 12l3.25 4.5.814 1.124" /></svg>;
const ForwardRef = forwardRef(SocialTwitter);
export { ForwardRef as ReactComponent };