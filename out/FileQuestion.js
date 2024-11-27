const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const FileQuestion = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M14 2V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H20L14 2ZM14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V12M9.84998 12.0022C10.0262 11.5013 10.3739 11.0789 10.8317 10.8099C11.2895 10.5409 11.8277 10.4425 12.351 10.5323C12.8743 10.6221 13.349 10.8941 13.6909 11.3003C14.0328 11.7065 14.22 12.2207 14.2192 12.7516C14.2192 14.2505 11.9709 14.9999 11.9709 14.9999M12 17.9999H12.01" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(FileQuestion);
export default ForwardRef;

module.exports = forwardRef(FileQuestion);