import React from "react";

const Element = (Element) => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <React.Fragment>
      <Element {...input} {...props} />
      {hasError && <span> {meta.error} </span>}
    </React.Fragment>
  );
};
export const Textarea = Element("textarea");
export const Input = Element("input");
