import * as React from "react";
import { forwardRef } from "react";
const User = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 00-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 00-2.667 2.667C4 18.907 4 19.604 4 21m9-9.111A4.5 4.5 0 1115.742 10" /></svg>;
const ForwardRef = forwardRef(User);
export { ForwardRef as ReactComponent };