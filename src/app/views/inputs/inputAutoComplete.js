import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { FieldAttributes, useField, useFormikContext } from "formik";
const AutocompleteUi = props => {
    const {
        label,
        forcedInitialValue,
        variant = "outlined",
        data,
        labelField,
        dataField,
        multiple,
        disabled,
        className,
        defaultValue,
        loading,
    } = props 
        const [field, meta] = useField(props);
console.log('ttt',meta )
	return (
        <FormControl
      error={false}
        variant={variant || "outlined"}
        size='small'
        className={className}
        fullWidth
    >
			<Autocomplete
				id="combo-box_demo"
				filterSelectedOptions
				loading={loading}
				options={data||[]}
				onFocus={field.onFocus}
				value={field.value}
				defaultValue={defaultValue}
				onChange={(e, newValue) => {
					field.onChange(newValue || '');
				}}
				getOptionLabel={(option) =>
					option[labelField] !== undefined ? option[labelField] : ''
				}
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
						// error={meta.touched && meta.touched}
						variant={variant}
						size="small"
					/>
				)}
				{...field}
			/>
	    {/* {meta.touched && meta.touched && (
                <FormHelperText>{meta.error}</FormHelperText>
            )} */}
		</FormControl>
	);
};
export default AutocompleteUi;
