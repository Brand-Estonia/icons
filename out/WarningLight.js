import * as React from "react";
import { forwardRef } from "react";
const WarningLight = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-2m0-4V4" /></svg>;
const ForwardRef = forwardRef(WarningLight);
export { ForwardRef as ReactComponent };