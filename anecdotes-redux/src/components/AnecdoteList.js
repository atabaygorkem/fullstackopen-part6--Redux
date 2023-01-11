import { useDispatch, useSelector } from "react-redux"
import { vote, voteAnecdote } from "../reducers/anecdoteReducer"
import {
  applyNotification,
  removeNotification,
  setNotification,
} from "../reducers/notificationReducer"

export default function AnecdoteList({ children: [Filter, Notification] }) {
  console.log(Notification)

  const state = useSelector((state) => state)
  const anecdotes = [...state.anecdotes]
  const notify = state.notification.text
  const filter = state.filter.filterStr
  const dispatch = useDispatch()
  console.log("Anecdotes: ", anecdotes)
  return (
    <>
      <h2>Anecdotes</h2>
      {Filter}
      {notify && Notification}
      {anecdotes
        .filter((item) => item.content.toLowerCase().includes(filter))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  dispatch(voteAnecdote(anecdote))
                  dispatch(
                    applyNotification(`You voted: "${anecdote.content}"`, 5)
                  )
                }}
                // dispatch(setNotification(`You voted: "${anecdote.content}"`))
                // setTimeout(() => {
                //   dispatch(removeNotification(anecdote.id))
                // }, 5000)
                // }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </>
  )
}
