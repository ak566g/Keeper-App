import React, {useState} from "react";


function CreateArea(props) {

  const [content, setContent] =useState({
    title :'',
    content:''
  })

  function handleOnChange(event)
  {
    // console.log(event.target.name)
    
    const {name, value} = event.target
    setContent(prevContent => {
      return ({...prevContent,
      [name]: value})
    })
  }

  function submitNote(event)
  {
    props.add(content)
    setContent({
      title :'',
      content:''
    })
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input onChange={handleOnChange} name="title" placeholder="Title" value={content.title}/>
        <textarea onChange={handleOnChange} name="content" placeholder="Take a note..." rows="3" value={content.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
