import * as React from "react";
import { forwardRef } from "react";
const Error = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8.864v4.221m0 4.221h.01m10.55 3.492c-.281.202-.769.202-1.745.202H3.185c-.976 0-1.464 0-1.746-.202a1.05 1.05 0 01-.435-.744c-.037-.341.208-.757.697-1.588l8.815-14.993c.487-.829.73-1.243 1.049-1.382.277-.121.593-.121.87 0 .318.14.562.553 1.05 1.382L20.5 15.406l.791 1.347.396.674" /></svg>;
const ForwardRef = forwardRef(Error);
export { ForwardRef as ReactComponent };