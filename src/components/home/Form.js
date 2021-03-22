import React from 'react'
import useInput from '../../customhook/useInput'

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput()
    const [content, bindContent, resetContent] = useInput()

    const handleSubmit = (e) => {
        e.preventDefault()
	console.log({ title, content })
 	
	resetTitle()
	resetContent()
    }

    return (
        <div className="section">
	    <form onSubmit={handleSubmit} className="blue-grey lighten-5">
	        <h5 className="grey-text text-darken-3">Write a note...</h5>
		
		<div className="input-field">
      			<input id="note_title" type="text" className="validate" {...bindTitle}/>
		        <label htmlFor="note_title">Note Tittle</label>
		</div>
	    	
	    	<div className="input-field">
			<textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
          		<label htmlFor="note_content">Note content</label>
    		</div>

	    	<button className="btn green lighten-2">Add</button>
	    </form>
	</div>
    )
}

export default Form