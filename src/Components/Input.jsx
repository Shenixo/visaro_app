import React from "react";

const Input = ({
  type = "text",
  labelText = "",
  placeholder,
  useTextArea = false,
}) => {
  return (
    <div className="mb-4 relative">
      <label className="text-base font-semibold capitalize text-[#5B5C66] mb-2 block">
        {labelText}
      </label>
      {!useTextArea ? (
        <input
          type={type}
          className="w-full px-4 py-3 rounded-xl border border-[#F5F5F5] bg-[#E5E5E5]"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          name=""
          id=""
          rows={4}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border border-[#F5F5F5] bg-[#E5E5E5] resize-none"
        ></textarea>
      )}
    </div>
  );
};

export default Input;
