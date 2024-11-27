import * as React from "react";
import { forwardRef } from "react";
const Star = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15.5 19.5-3.238-2.748L5.647 21l2.647-6.876L3 9.861h6.882L11.974 3l2.214 6.861L21 9.876l-4.765 4.248L18.882 21" /></svg>;
const ForwardRef = forwardRef(Star);
export { ForwardRef as ReactComponent };