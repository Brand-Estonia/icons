import * as React from "react";
import { forwardRef } from "react";
const DownloadCloud = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16.242A4.5 4.5 0 016.08 8.02a6.002 6.002 0 0111.84 0A4.5 4.5 0 0120 16.242M8 17l4 4m0 0 4-4m-4 4v-9" /></svg>;
const ForwardRef = forwardRef(DownloadCloud);
export { ForwardRef as ReactComponent };