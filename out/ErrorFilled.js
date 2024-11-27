import * as React from "react";
import { forwardRef } from "react";
const ErrorFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M13.803 2.024C13 .66 10.998.66 10.197 2.024L.282 18.927C-.519 20.293.482 22 2.085 22h19.83c1.603 0 2.604-1.707 1.803-3.073zM13 9a1 1 0 10-2 0v4a1 1 0 102 0zm-1 7.331a1 1 0 100 2h.012a1 1 0 100-2z" /></g><defs><clipPath id="a"><path fill="currentColor" d="M24 24H0V0h24z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(ErrorFilled);
export { ForwardRef as ReactComponent };