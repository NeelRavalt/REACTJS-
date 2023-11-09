import React, { useState, ChangeEvent, FormEvent } from 'react';

function UserInput() {
  const [text, setText] = useState<string>(''); // Initialize with an empty string
  const [select, setSelect] = useState<string>('canada'); // Initialize with an empty string

//   const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setText(event.target.value);
//   };

  const handleSubmit = (event: FormEvent) => {
   
    // Add your submission logic here
    event.preventDefault(); // Prevent the form from being submitted
    console.log(text); // Log the current text  
    console.log(select); // Log the current text  
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textarea">comments:</label>
      <textarea
        name="textarea"
        id="textarea"
        cols={30}
        rows={5}
        value={text} // Value should be of type 'string'
        onChange={(e)=> setText(e.target.value)}
      ></textarea>
      <br /><br />
      <select value={select} onChange={(e)=> setSelect(e.target.value)} title="Country">
        <option value="Canada">Canada</option>   
        <option value="USA">USA</option>   
        <option value="UK">UK</option>   
        <option value="Brazil">Brazil</option>   
      </select> <br />
      <input type="submit" id="submit" value="submit" />
    </form>
  );
}

export default UserInput;
