import * as React from "react";
import { forwardRef } from "react";
const Sun = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 12a5 5 0 11-.993-2.99M12 4V2m0 20v-2m6.928-12 1.732-1M3.34 17l1.732-1m13.856 0 1.732 1M3.34 7l1.732 1" /></svg>;
const ForwardRef = forwardRef(Sun);
export { ForwardRef as ReactComponent };