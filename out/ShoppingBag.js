import * as React from "react";
import { forwardRef } from "react";
const ShoppingBag = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 8H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-2m0 4.5V7a4 4 0 00-8 0v5.5" /></svg>;
const ForwardRef = forwardRef(ShoppingBag);
export { ForwardRef as ReactComponent };