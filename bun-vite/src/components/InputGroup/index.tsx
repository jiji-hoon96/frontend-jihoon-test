import React from "react";
import Input from "../Common/Input";

type InputGroupProps = {
  id: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, required = true, errorMessage, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={id}>
          {label}
          {required && <span>*</span>}
        </label>
        <div>
          <Input id={id} ref={ref} errorMessage={errorMessage} {...rest} />

          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
