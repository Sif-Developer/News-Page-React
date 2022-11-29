import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const Form = () =>{
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message,setMessage] = useState("");
  const [visible, setVisible] = useState(true)
  const [data, setData] = useState({
    title: "",
    content: "",
    author: "", 
  })
  
  const initialState = {
  title: "",
  content: "",
  author: "",
  }

  const clearState = () => {
    setData({ ...initialState });
  };
  
  useEffect(() => {

    if (data.title.length < 3 || data.content.length <3 || data.author < 3) {
      setMessage("All fields have to be filled in. Minium 3 word per field");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending data..." + data.title + " " + data.content + " " + data.author);
    localStorage.setItem("data", JSON.stringify(data))
    clearState();
    setTimeout(() => {
        navigate('/home')
    }, 3000);
    setVisible(false)
  };

  return (
    <>
      <div>Formulary to write news</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={data.title}
          onChange={handleInputChange}
          name="title"
        />
        <br />
        <input
          type="text"
          placeholder="content"
          value={data.content}
          onChange={handleInputChange}
          name="content"
        />
        <br />
        <input
          type="text"
          placeholder="author"
          value={data.author}
          onChange={handleInputChange}
          name="author"
        />
        <button type="submit" disabled={btnDisabled}>
          Send
        </button>
      </form>
      <p>{visible ?message :'Redirecting to Home...'}</p>
    </>
  );
};

export default Form