import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Input, InputProps, Layout } from "@ui-kitten/components";
import { StyledComponent } from "nativewind";

const StyledInput = ({
  className,
  accessoryLeft,
  ...props
}: InputProps & { className?: string }) => {
  return (
    <StyledComponent className={className} component={Input}>
      <Input {...props} accessoryLeft={accessoryLeft} />
    </StyledComponent>
  );
};

export default StyledInput;
