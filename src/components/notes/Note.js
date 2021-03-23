import React from 'react'

const Note = ({ note }) => {
    
    return (
        <div className="note lime lighten-5">
	    <div className="right-align">
	        <i className="material-icons red-text" style={{cursor:'pointer'}}>favorite</i>
		<i className="material-icons" style={{cursor:'pointer'}}>delete</i>
	    </div>
	    
	    <h5 className="grey-text text-darken-2">{note.title}</h5>
	    <p className="truncate">{note.content}</p>
	    <p className="grey-text">2 days ago</p>
	    <div className="right-align">
	        <i className="material-icons black-text"
	    		style={{cursor:'pointer'}}
	    	>
	    	edit</i>
	    </div>
	</div>
    )
}

export default Note
