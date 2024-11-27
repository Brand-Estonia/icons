import * as React from "react";
import { forwardRef } from "react";
const SocialFacebook = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17.982V14h2.975l.82-4H13V7c0-.643.344-1 1-1h3.5V2H14c-3 0-5 2-5 5.125V10H6v4h3v8h4" /></svg>;
const ForwardRef = forwardRef(SocialFacebook);
export { ForwardRef as ReactComponent };