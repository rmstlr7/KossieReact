import { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = () => {
    axios.post('http://localhost:3000/posts', {
      title,
      body
    })
  }

  return(
    <div className="container">
      <div className="mb-3">
        <label className="form-label">title</label>
        <input 
          className="form-control" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form-label">body</label>
        <textarea 
          className="form-control"
          rows="20"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button 
        className="btn btn-primary"
        onClick={onSubmit}>
        Post
      </button>

    </div>
  )
}
export default App;