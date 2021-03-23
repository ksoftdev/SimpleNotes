import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../customhook/useInput'
import { updateNote } from '../../store/actions/noteAction'
import { useHistory } from 'react-router-dom'

const EditForm = () => {

    const note = useSelector((state) => state.note)

    console.log('Edit form: ', note)
    
    const [title, bindTitle, resetTitle] = useInput(note.title)
    const [content, bindContent, resetContent] = useInput(note.content)

    const dispatch = useDispatch()
    const history = useHistory()	

    const handleSubmit = (e) => {
        e.preventDefault()
	console.log({ title, content })
 	dispatch(updateNote({id: note.id, title, content}))

	resetTitle()
	resetContent()

	history.push('/')
    }

    return (
        <div className="section">
	    <form onSubmit={handleSubmit} className="light-green lighten-5 rounded">
	        <h5 className="grey-text text-darken-3">Write a note...</h5>
		
		<div className="input-field ">
      			<input id="note_title" type="text" className="validate" {...bindTitle}/>
		        <label className="active" htmlFor="note_title">Note Tittle</label>
		</div>
	    	
	    	<div className="input-field">
			<textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
          		<label className="active" htmlFor="note_content">Note content</label>
    		</div>

	    	<button className="btn green lighten-2">Uodate</button>
	    </form>
	</div>
    )

}

export default EditForm