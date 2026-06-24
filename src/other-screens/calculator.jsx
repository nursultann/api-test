// function Calculator(){
import { useState } from "react";
// '9' => 9
// }
// parseFloat('10') => 10
const Calculator = ()=>{
    // let num = 0;
    // num = 1;
    // const x = 0;
    // let y = 0;
    // y = y +1;
    // let name = 'John';
    // let num = document.getElementById('').value;
    let [num,setNum] = useState(0);
    let [num2,setNum2] = useState();
    let [sum,setSum] = useState(0);
    let [name,setName] = useState();
    function plus(){
        setSum(parseFloat(num) + parseFloat(num2));
        setName('John');
    }
    // let minus = ()=>{
    //     setSum(num - num2);
    // }
    return(
        <>
        <input type="text" onChange={(e)=>setNum(e.target.value)} />
        <input type="text" onChange={(a)=>setNum2(a.target.value)} />
        <br />
        Сумма:{sum} <br />
        <button onClick={plus}>+</button>
        <br />
        {name}
        </>
    )
}
export default Calculator;