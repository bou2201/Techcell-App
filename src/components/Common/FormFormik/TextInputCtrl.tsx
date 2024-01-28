import React from 'react';
import { FormikValues, useFormikContext } from 'formik';
import { FormControl, Input, WarningOutlineIcon } from 'native-base';
import { StyleProp, ViewStyle } from 'react-native';
// import debounce from 'lodash/debounce';

type TextInputCtrlProps = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  styleLabel?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<ViewStyle>;
  isDebounce?: boolean;
  debounceTime?: number;
};

export const TextInputCtrl = <T extends FormikValues>({
  name,
  label,
  required = false,
  placeholder,
  readonly,
  disabled,
  styleLabel,
  styleInput,
  // isDebounce,
  // debounceTime = 300,
}: TextInputCtrlProps) => {
  const { handleBlur, handleChange, values, errors } = useFormikContext<T>();

  return (
    <FormControl
      isRequired={required}
      isInvalid={name in errors}
      isReadOnly={readonly}
      isDisabled={disabled}
      key={name}
    >
      <FormControl.Label style={styleLabel}>{label}</FormControl.Label>
      <Input
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        placeholder={placeholder}
        style={styleInput}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errors[name]}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
