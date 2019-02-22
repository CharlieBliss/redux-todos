import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import conf from '../constants/css'

import { Sorts } from '../constants/filters'

const customStyles = {
	// React-select has built in styling options.
	control: (provided, isFocused) => ({
		...provided,
		border: 'none',
		width: '200%',
		fontSize: '10px',
		color: conf.purple,
		fontFamily: conf.fontFamily,

	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: conf.purple,

	}),
	menu: (provided) => ({
		...provided,
		width: '200%',
		fontFamily: conf.fontFamily,

	}),
	option: (provided, state) => ({
		...provided,
		border: 'none',
		fontSize: '10px',
		fontFamily: conf.fontFamily,
	}),
}


const Sort = ({ onChange }) => (
	<Select
		options={Sorts}
		onChange={(sort) => onChange(sort.value)}
		styles={customStyles}
		defaultValue={Sorts[0]}
	/>
)

export default Sort

Sort.propTypes = {
	onChange: PropTypes.func.isRequired,
}

