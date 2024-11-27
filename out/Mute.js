import * as React from "react";
import { forwardRef } from "react";
const Mute = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3s4 2.4 4 9.6c0 2-.31 3.54-.76 4.72M17 8v6M8.58 8 7.1 9H3v4m10-4V5l-1.85 1.25M3 16h4.29L13 20v-6.35M4 2l16 20" /></svg>;
const ForwardRef = forwardRef(Mute);
export { ForwardRef as ReactComponent };