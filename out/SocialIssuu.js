import * as React from "react";
import { forwardRef } from "react";
const SocialIssuu = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 7.669a5 5 0 11-2.083 2.33M12 21a9 9 0 000-18H3v9a9 9 0 005.727 8.386" /></svg>;
const ForwardRef = forwardRef(SocialIssuu);
export { ForwardRef as ReactComponent };