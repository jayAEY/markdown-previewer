import { marked } from "marked";
import React, { useState } from "react";
import './App.css'

marked.setOptions({
  breaks:true,
})

const renderer = new marked.Renderer();

function App() {
  
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 quotes.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == "'''" && lastLine == "'''") {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:


Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/320px-FreeCodeCamp_logo.png)`


  const [markdown, setMarkdown] = useState(`${placeholder}`)
  
  const handleChange = (event) => {
    setMarkdown(event.target.value)
  }

  return (
   <div className="App w-100 row d-flex p-5"> 
   <h1 id="title"className="row">Markdown Previewer</h1>
   <div id="left" className="col m-5 p-3 bg-light" >
   <h2 id="editor-title" className="text-center ">Editor</h2>
   <textarea id='editor' rows='26' cols='65' value={markdown} onChange={handleChange}/>
   </div>
   <div id="right" className="col m-5 p-3 bg-light">
   <h2 id="preview-title" className="text-center">Preview</h2> 
   <div id="preview" dangerouslySetInnerHTML={{ __html:marked (markdown, { renderer: renderer })}}></div>
   </div>
   </div>
  );
}

export default App;
