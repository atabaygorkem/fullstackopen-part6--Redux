import { createSlice } from "@reduxjs/toolkit"
// import { act } from "react-dom/test-utils"
// import { useDispatch } from "react-redux"

import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    vote(state, action) {
      return state.map((anecdote) =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      )
    },
    newAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(newAnecdote(anecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateAnecdote({
      ...anecdote,
      votes: anecdote.votes + 1,
    })
    dispatch(vote(updatedAnecdote))
  }
}

export const { vote, newAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
// export default reducer

/////////////////////////////////////////////
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// export const voteAnecdote = (id) => ({type: "VOTE", id})

// export const createAnecdote = (note) => ({type: "NEW_NOTE", note})

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const copy = (obj) => {
//   return {
//     content: obj.content,
//     id: obj.id,
//     votes: obj.votes
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "VOTE":
//       return state
//       .map(anecdote => anecdote.id !== action.id ?
//         anecdote :
//         {...anecdote, votes: anecdote.votes + 1})
//     case "NEW_NOTE":
//       // return [...state, asObject(action.note)]
//       return state
//       .map(anecdote => copy(anecdote)).concat(asObject(action.note))

//     default:
//       return state
//   }
// }
