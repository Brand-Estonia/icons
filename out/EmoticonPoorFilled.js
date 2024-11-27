import * as React from "react";
import { forwardRef } from "react";
const EmoticonPoorFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M8 17c.863-1.206 2.332-2 4-2s3.137.794 4 2m-8-7V8m8 2V8" /></svg>;
const ForwardRef = forwardRef(EmoticonPoorFilled);
export { ForwardRef as ReactComponent };