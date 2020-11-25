import React from 'react';

const activate = (e) => {
  alert("clicked");
  e.preventDefault();
}

const handleSubmit=(event)=> {
  alert('submitted:');
  event.preventDefault();
}


const handleChange=(event)=> {
  console.log(event.target.value);
}






function LoginForm() {
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Name :
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label> <br></br>
        Password :
        <input type="password" password="password" />
      </label><br></br>
      <input type="submit" value="Submit" />
      <button onClick={activate}>
      click me
        </button>
    </form>
    </div>
  );
}

export default LoginForm
