import * as React from "react";
import { forwardRef } from "react";
const Accessibility = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M10 4a2 2 0 114 0 2 2 0 01-4 0M3.044 6.706a1 1 0 011.25-.662c2.231.687 3.398.88 5.731.943.712.016 1.253.02 1.966.013a58 58 0 001.966-.05c2.159-.096 3.694-.34 5.777-.914a1 1 0 11.532 1.928c-1.91.527-3.42.798-5.266.93V21a1 1 0 11-2 0v-5h-2v5a1 1 0 11-2 0V8.948c-1.931-.1-3.219-.353-5.294-.992a1 1 0 01-.662-1.25" /></svg>;
const ForwardRef = forwardRef(Accessibility);
export { ForwardRef as ReactComponent };