import * as React from "react";
import { forwardRef } from "react";
const List = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 6V2H9v4h10.5m3.5 8v-4H9v4h10.5m3.5 8v-4H9v4h10.5M1 2h4v4H1zm0 8h4v4H1zm0 8h4v4H1z" /></svg>;
const ForwardRef = forwardRef(List);
export { ForwardRef as ReactComponent };