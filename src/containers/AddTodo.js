import React, { useState } from 'react'
import withStyle from 'react-jss'
import { connect } from 'react-redux'
import { addTodo, saveCompletedStatus } from '../actions'
import conf from '../constants/css'


const styles = {
	wrapper: {
		width: '65%',
	},
	'form': {
		display: 'flex',
		flexDirection: 'row',
		border: '1px solid grey',
		padding: '10px',
		background: 'white',
	},
	'input': {
		flexGrow: '12',
		border: 'none',
		color: conf.purple,
		'&:focus': {
			outline: 'none',
		},
	},
	'button': {
		border: 'none',
		cursor: 'pointer',
		color: conf.purple,
		'&:focus': {
			outline: 'none',
		},
	}
}

const AddTodo = ({ classes, dispatch }) => {
	const [input, setInput] = useState('')
	const handleChange = (e, setInput) => {
		e.preventDefault()
		setInput(e.target.value)
	}

	const handleSubmit = (e, input, setInput, dispatch) => {
	    e.preventDefault()
	    if (input.trim()) {
	    	dispatch(addTodo(input))
	    	dispatch(saveCompletedStatus())
	    }
	   	setInput('')
	}

	return (
		<div className={classes.wrapper}>
			<form
				onSubmit={e => handleSubmit(e, input, setInput, dispatch)}
			>
				<div className={classes.form}>
					<input
						className={classes.input}
						placeholder="Add a to-do"
						value={input}
						onChange={e => handleChange(e, setInput)}
					/>
					<button className={classes.button} type="submit">
						ADD
					</button>
				</div>
			</form>
		</div>
	)
}

export default connect()(withStyle(styles)(AddTodo))
