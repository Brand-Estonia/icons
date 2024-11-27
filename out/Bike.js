import * as React from "react";
import { forwardRef } from "react";
const Bike = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.67 15.41A4 4 0 016 21c-2.21 0-4-1.79-4-4s1.79-4 4-4c.5 0 .98.09 1.43.26M12 14v-3l5-1-3-4-3 2m7 9h-5m-7-7h3l-3 7m8.86-2.48C15.59 13.59 16.73 13 18 13c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4M12 3a1 1 0 11-2 0 1 1 0 012 0" /></svg>;
const ForwardRef = forwardRef(Bike);
export { ForwardRef as ReactComponent };