import React from "react"
import ReactDOM from "react-dom/client";


const parent = React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},
React.createElement('h1',{},"I am a h1 tag"))
)

const heading = React.createElement('h1',{},'Hello Namaste Javascript'); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);