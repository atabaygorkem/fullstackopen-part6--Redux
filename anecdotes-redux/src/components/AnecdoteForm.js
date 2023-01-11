import { useDispatch } from "react-redux"
import { createAnecdote, newNote } from "../reducers/anecdoteReducer"
import { applyNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

export default function AnecdoteForm() {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault()
    const anecdote = e.target.note.value
    e.target.note.value = ""

    // console.log("addnote: ", anecdote);
    dispatch(createAnecdote(anecdote))
    dispatch(applyNotification(`New anecdote: ${anecdote}`, 5))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input name="note" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}
