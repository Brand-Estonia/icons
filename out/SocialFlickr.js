import * as React from "react";
import { forwardRef } from "react";
const SocialFlickr = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 16a4 4 0 113.233-1.645M18 16a4 4 0 113.233-1.645" /></svg>;
const ForwardRef = forwardRef(SocialFlickr);
export { ForwardRef as ReactComponent };