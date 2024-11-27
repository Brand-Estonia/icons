import * as React from "react";
import { forwardRef } from "react";
const Map = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8v9M9 8v9M3 7.579 9 4l6 3.579L21 4v13.421L15 21l-6-3.579L3 21z" /></svg>;
const ForwardRef = forwardRef(Map);
export { ForwardRef as ReactComponent };