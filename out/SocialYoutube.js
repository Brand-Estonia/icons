import * as React from "react";
import { forwardRef } from "react";
const SocialYoutube = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.03 20H4.994A3.97 3.97 0 011 16V8c0-2.23 1.768-4 3.994-4h14.012A3.97 3.97 0 0123 8v8c0 2.23-1.768 4-3.994 4h-.982M10 12.984V16l6-4-6-4" /></svg>;
const ForwardRef = forwardRef(SocialYoutube);
export { ForwardRef as ReactComponent };