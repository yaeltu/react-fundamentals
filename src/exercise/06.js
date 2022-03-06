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

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.username.value;
    onSubmitUsername(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

  //----------------------------------------------------------------------
  //----------------extra-credit-1----------------------------------------
  // const inputRef = React.useRef('');
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const value = inputRef.current.value;
  //   onSubmitUsername(value);
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input ref={inputRef} id="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  //----------------------------------------------------------------------
  //----------------extra-credit-2----------------------------------------
  // const [error, setError ] = React.useState(null);
  // const inputRef = React.useRef('');
  //
  // function handleChange(event) {
  //   const value = event.target.value;
  //   const isValid = value === value.toLowerCase();
  //   setError(isValid ? null : 'Username must be lower case');
  // }
  //
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const value = inputRef.current.value;
  //   onSubmitUsername(value);
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input ref={inputRef} id="username" type="text" onChange={handleChange} />
  //       <div style={{color: "red"}} role="alert">{error}</div>
  //     </div>
  //     <button disabled={error} type="submit">Submit</button>
  //
  //   </form>
  // )

  //----------------------------------------------------------------------
  //----------------extra-credit-3----------------------------------------
  // const [username, setUsername ] = React.useState('');
  //
  // function handleChange(event) {
  //   const value = event.target.value;
  //   setUsername(value.toLowerCase());
  // }
  //
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   onSubmitUsername(username);
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input value={username} id="username" type="text" onChange={handleChange} />
  //     </div>
  //     <button type="submit">Submit</button>
  //
  //   </form>
  // )
  //----------------------------------------------------------------------
}



function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
