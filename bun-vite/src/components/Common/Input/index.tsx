import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type InputProps = {
  errorMessage?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, onChange, errorMessage, ...rest }, ref) => {
    const [value, setValue] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    console.log(errorMessage);

    return (
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => {
            onChange!(e);
            handleChange(e);
          }}
          ref={ref}
          {...rest}
        />
        {value && (
          <button type="button" onClick={() => setValue("")}>
            <AiFillCloseCircle />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
