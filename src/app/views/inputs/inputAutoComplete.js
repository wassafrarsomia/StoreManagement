import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';

const AutocompleteUi = ({
	field,
	data,
	Data,
	labelField,
	size,
	variant,
	forcedValue,
	blank,
	setBlank,
	loading,
	forcedInitialValue,
	defaultValue,
	forcedValueS,
	forced,
	label,
	...rest
}) => {
	const{setFieldValue}=useFormikContext()
	return (
		<FormControl fullWidth >
			<Autocomplete
				id="combo-box_demo"
				filterSelectedOptions
				loading={loading}
				options={data}
				onFocus={field.onFocus}
				value={field.value}
				defaultValue={defaultValue}
				onChange={(e, newValue) => {
					setFieldValue(field.name , newValue)
				}}
				getOptionLabel={(option) =>
					option[labelField] !== undefined ? option[labelField] : ''
				}
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
						variant={variant}
						size={size}
					/>
				)}
				{...rest}
			/>
		</FormControl>
	);
};
export default AutocompleteUi;
