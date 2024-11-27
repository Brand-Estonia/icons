import * as React from "react";
import { forwardRef } from "react";
const EmoticonAwefulFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M10 10 6 8m8 2 4-2M8 12v-2m8 2v-2m-8 8c.863-1.206 2.332-2 4-2s3.137.794 4 2" /></svg>;
const ForwardRef = forwardRef(EmoticonAwefulFilled);
export { ForwardRef as ReactComponent };