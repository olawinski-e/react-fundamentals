// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // --------------- V1
  //   const [name, setName] = React.useState('')

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     onSubmitUsername(name)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="usernameInput">Username:</label>
  //         <input
  //           id="usernameInput"
  //           type="text"
  //           onChange={event => setName(event.target.value)}
  //           value={name}
  //         />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )
  // }

  // const App = () => {
  //   const onSubmitUsername = username => alert(`You entered: ${username}`)
  //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
  // }

  // --------------- V2
  //   const refName = React.useRef()

  //   const handleSubmit = event => {
  //     event.preventDefault()
  //     onSubmitUsername(refName.current.value)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="usernameInput">Username:</label>
  //         <input id="usernameInput" type="text" ref={refName} />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )
  // }

  // const App = () => {
  //   const onSubmitUsername = username => alert(`You entered: ${username}`)
  //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
  // }

  // --------------- V3
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(name)
  }

  const handleChange = event => {
    const {value} = event.target
    setName(value)
    value === value.toLowerCase() ? setError(false) : setError(true)
    setTimeout(() => {
      setError(false)
    }, '2000')
    setName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={name}
        />
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
      <p role="alert" style={{color: 'red'}}>
        {error ? 'Sorry man but username name can only be lowercase' : null}
      </p>
    </form>
  )
}

const App = () => {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
