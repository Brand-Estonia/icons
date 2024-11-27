import * as React from "react";
import { forwardRef } from "react";
const LocationPin = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.188 16.305C18.85 14.373 20 12.402 20 10.2 20 6.224 16.642 3 12.5 3S5 6.224 5 10.2s3.75 7.2 7.5 10.8c.793-.761 1.586-1.506 2.344-2.244m-3.75-5.729a2.853 2.853 0 01-1.03-3.877 2.8 2.8 0 013.842-1.039 2.853 2.853 0 01.19 4.797" /></svg>;
const ForwardRef = forwardRef(LocationPin);
export { ForwardRef as ReactComponent };