

const inpVal = () => {
  var x = document.getElementById('string').value;
  const y = x.split('');
  const res = []
  let char;
  for (char of y) {
    if (char === '#') {
      res.pop()
    }
    else {
      res.push(char)
    }
  }
  console.log(res.join(''))
  var k = res.join('')

  document.getElementById('result').value = k

}





