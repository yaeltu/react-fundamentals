// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div style={{backgroundColor: 'lightblue', fontStyle: 'italic'}} className={"box box--small"}>small lightblue box</div>
const mediumBox = <div style={{backgroundColor: 'pink', fontStyle: 'italic'}} className={"box box--medium"}>medium pink box</div>
const largeBox = <div style={{backgroundColor: 'orange', fontStyle: 'italic'}} className={"box box--large"}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

//----------------------------------------------------------------------
//----------------extra-credit-1----------------------------------------

// function Box(props) {
//   return (
//     <div className={`box ${props.className}`} style={{fontStyle: 'italic', ...props.style}}>
//       {props.children}
//     </div>
//   )
// }
//
// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//         small lightblue box
//       </Box>
//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//         small lightblue box
//       </Box>
//       <Box className="box--large" style={{backgroundColor: 'orange'}}>
//         small lightblue box
//       </Box>
//     </div>
//   )
// }

//----------------------------------------------------------------------
//----------------extra-credit-2----------------------------------------
// function Box(props) {
//   return (
//     <div className={`box box--${props.size}`} style={{fontStyle: 'italic', ...props.style}}>
//       {props.children}
//     </div>
//   )
// }
//
// function App() {
//   return (
//     <div>
//       <Box size="small" style={{backgroundColor: 'lightblue'}}>
//         small lightblue box
//       </Box>
//       <Box size="medium" style={{backgroundColor: 'pink'}}>
//         small lightblue box
//       </Box>
//       <Box size="large" style={{backgroundColor: 'orange'}}>
//         small lightblue box
//       </Box>
//     </div>
//   )
// }

//----------------------------------------------------------------------

export default App
