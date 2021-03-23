export const addNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('notes')
	.add({
	    ...note,
	    favorite: false,
	    createdAt: new Date()
	})
	.then( () => {
	    console.log('Add note successfully')
	})
	.catch( (err) =>{
	    console.log(err)
	})
    }
}

export const deleteNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('notes').doc(note.id).delete()
	.then( () => {
	    console.log('Note was deleted: ', note.id)
	})
	.catch( (err) =>{
	    console.log(err)
	})
    }
}

export const toggleFav = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

	const favstatus = !note.favorite

        firestore.collection('notes').doc(note.id).update({
	    favorite: favstatus
	}).then(() => {
	    console.log('Toggle favorite success')
	}).catch(err => {
	    console.log('Something went wrong: ', err)
	})

    }
}

export const updateNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('notes').doc(note.id).update({
		title: note.title,
		content: note.content
	}).then(() => {
	    console.log('Update note success')
	}).catch(err => {
	    console.log('Something went wrong on updating: ', err)
	})

    }
}
