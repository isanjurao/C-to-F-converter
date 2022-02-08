
const convert = (e)=>{

    const  input = document.getElementById('input').value;
    const tempselected = document.getElementById('temp_diff');
  const optionvalue =temp_diff.options[tempselected.selectedIndex].value;

  console.log(optionvalue)
  const c2f =(cel)=>{ 
      let Fahrenheit = Math.round((cel * 9/5)+32);
      return Fahrenheit; 
  };

  const f2c =(feh)=>{ 
    let celsius  = Math.round((feh - 32) * 5/9);
    return celsius ; 
};

let result;
 
  if(optionvalue === 'cel'){
      result = c2f(input)
      document.getElementById('result').innerHTML = `${result} °F`;  
  }
  else{
        result =f2c(input);
        document.getElementById('result').innerHTML = `${result} °C `;  
}
}
