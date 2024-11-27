import * as React from "react";
import { forwardRef } from "react";
const Dot = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M16 12a4 4 0 11-8 0 4 4 0 018 0" /></svg>;
const ForwardRef = forwardRef(Dot);
export { ForwardRef as ReactComponent };