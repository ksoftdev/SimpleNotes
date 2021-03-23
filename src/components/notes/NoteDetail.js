import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import moment from 'moment'

const NoteDetail = (props) => {
    
    const id = props.match.params.id

    useFirestoreConnect([{
	    	collection: 'notes',
		doc: id	
    }])

    const note = useSelector( ({ firestore:{data} }) =>
	    data.notes && data.notes[id]
    )

    const noteMarkup = !isLoaded(note) ? (
    	<div className="container section">
	    <div className="card z-depth-0">
	        <div className="card-content">
	    	    <span className="card-title">Loading...</span>
	        </div>

	        <div className="card-action grey lighten-4 grey-text"></div>
	    </div>
	</div>
    ) : isEmpty(note)? (
     	<div className="container section">
	    <div className="card z-depth-0">
	        <div className="card-content">
		     <p>Note is empty</p>
	        </div>

	        <div className="card-action grey lighten-4 grey-text"></div>
	    </div>
	</div>

    ) : (
     	<div className="container section">
	    <div className="card z-depth-0">
	        <div className="card-content yellow lighten-5">
	    	    <span className="card-title">{ note?.title }</span>
	    	    <p>{ note?.content }</p>
	        </div>

	        <div className="card-action amber lighten-5 grey-text">
	    	    <div>{ moment( note?.createdAt.toDate() ).calendar() }</div>
	        </div>
	    </div>
	</div>
   
    )

    return noteMarkup
}

export default NoteDetail

