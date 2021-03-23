import React from 'react'
import { deleteNote, toggleFav } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Note = ({ note }) => {
    
    const dispatch = useDispatch()
    
    const deleteNoteHandler = () => {
    	dispatch( deleteNote(note) )
    }

    const toggleFavoriteHandler = () => {
	dispatch( toggleFav(note) )
    }

    const editNoteHandler = () => {
    	dispatch({ type: 'EDIT_NOTE', payload: note })
    }

    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border'
    
    return (
        <div className="note lime lighten-5">
	    <div className="row">
	    <div className="col s8 left-align">
	        <i className="small material-icons black-text" style={{cursor:'pointer'}}>expand_less</i>
	    </div>
	    <div className="col s4 right-align">
	        <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={toggleFavoriteHandler}>{heartMarkup}</i>	
	    </div>
	    </div>

	    <Link to={"/note/" + note.id}>
	    	<h5 className="grey-text text-darken-2">{note.title}</h5>
	    </Link>
	    <p className="truncate">{note.content}</p>
	    <p className="grey-text">{ moment(note.createdAt.toDate()).fromNow() }</p>

	    <div className="right-align">
	    	<Link to={`/editform/${note.id}`}>
	        	<i className="material-icons black-text"
	    			style={{cursor:'pointer'}}
	    			onClick={editNoteHandler}
	    		>
	    		edit</i>
		</Link>
	    
	        <i className="material-icons" style={{cursor:'pointer'}} onClick={deleteNoteHandler}>delete</i>
	    </div>

	</div>
    )
}

export default Note
