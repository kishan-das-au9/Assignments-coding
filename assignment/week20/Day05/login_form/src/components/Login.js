import React from 'react';

function LoginForm() {
  

  return (
    <div>
      <form>
      <label>
        Name :
        <input type="text" name="name" />
      </label>
      <label> <br></br>
        Password :
        <input type="password" password="password" />
      </label><br></br>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default LoginForm
