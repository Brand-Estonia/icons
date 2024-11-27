import * as React from "react";
import { forwardRef } from "react";
const Home = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 10v10a1 1 0 01-1 1h-3a1 1 0 01-1-1v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5m18.5-2.5-9.086-9.086a2 2 0 00-2.828 0L1.5 12.5" /></svg>;
const ForwardRef = forwardRef(Home);
export { ForwardRef as ReactComponent };