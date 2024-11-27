import * as React from "react";
import { forwardRef } from "react";
const Favicon = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M4 7.82c0-1.711 0-2.567.49-3.13a2 2 0 01.2-.2C5.252 4 6.108 4 7.82 4h8.36c1.711 0 2.567 0 3.13.49q.108.092.2.2c.49.563.49 1.419.49 3.13v8.36c0 1.711 0 2.567-.49 3.13a2 2 0 01-.2.2c-.563.49-1.419.49-3.13.49H7.82c-1.711 0-2.567 0-3.13-.49a2 2 0 01-.2-.2C4 18.748 4 17.892 4 16.18z" /></svg>;
const ForwardRef = forwardRef(Favicon);
export { ForwardRef as ReactComponent };