import * as React from "react";
import { forwardRef } from "react";
const SocialInstagram = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.768 21h-7.5A3.247 3.247 0 013 17.732V6.268A3.247 3.247 0 016.268 3h11.464A3.247 3.247 0 0121 6.268v11.464A3.247 3.247 0 0117.732 21h-.696M8 11.245c.42-2.133 2.52-3.59 4.725-3.174 2.153.416 3.623 2.498 3.203 4.684-.42 2.133-2.52 3.59-4.725 3.174a4.23 4.23 0 01-2.468-1.51M17 7h.01" /></svg>;
const ForwardRef = forwardRef(SocialInstagram);
export { ForwardRef as ReactComponent };