import * as React from "react";
import { forwardRef } from "react";
const Plane = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.84 13.12v3.22l-2.16 2.37.64 2.29L12 19.44 15.72 21l.64-2.29-2.16-2.37v-3.22l6.84 2.39v-2.28c0-.66-.37-1.26-.96-1.57l-6.26-3.28V5.29c0-.72-.31-2.3-1.8-2.3s-1.8 1.58-1.8 2.3v3.09l-6.26 3.28c-.59.31-.96.91-.96 1.57v2.28l3.69-1.61" /></svg>;
const ForwardRef = forwardRef(Plane);
export { ForwardRef as ReactComponent };