import * as React from "react";
import { forwardRef } from "react";
const SocialXing = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 16H2.5l4-7L4 5h4l2.5 4-2 3.5M19 8l-3.5 6 4.5 8h-4l-4.5-8 7-12h4L21 4.5" /></svg>;
const ForwardRef = forwardRef(SocialXing);
export { ForwardRef as ReactComponent };