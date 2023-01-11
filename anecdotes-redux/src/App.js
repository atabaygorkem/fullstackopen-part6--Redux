import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import { useDispatch, useStore } from "react-redux"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
import { useEffect } from "react"
import anecdoteService from "./services/anecdotes"
import { initializeAnecdotes, setAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
    // anecdoteService
    //   .getAll()
    //   .then(arrOfAnecdotes => dispatch(setAnecdotes(arrOfAnecdotes)))
  })

  console.log(useStore().getState())
  return (
    <div>
      <AnecdoteList>
        <Filter />
        <Notification />
      </AnecdoteList>
      <AnecdoteForm />
    </div>
  )
}

export default App
