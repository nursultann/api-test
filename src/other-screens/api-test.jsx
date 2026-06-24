import axios from "axios";
import { useState } from "react";

function ApiTest() {
    const [apiData, setApiData] = useState(null);
    const [apiData1, setApiData1] = useState(null);
    const [apiData2, setApiData2] = useState(null);
    const [value,setValue] = useState('');
    const fetchData = async () => {
        const x = await axios({
            method:'get',
            url:'https://dog.ceo/api/breeds/image/random'
        });
        console.log(x);
        if(x.status == 200){
            setApiData(x);
        }
    }
    const fetchData1 = async () => {
        const x = await axios({
            method:'get',
            url:'https://official-joke-api.appspot.com/random_joke'
        });
        console.log(x);
        if(x.status == 200){
            setApiData1(x);
        }
    }
    const fetchData2 = async () => {
        const countries = await axios({
            method:'get',
            url:`http://universities.hipolabs.com/search`,
            params:{
                country:value
            }
        });
        console.log('universities',countries);
        if(countries.status == 200){
            setApiData2(countries.data);
        }
    }
    return (
        <div>
            <h1>API Test</h1>
            {apiData != null && 
                <img src={apiData.data.message} alt="" width={100} />
            }
            <button onClick={fetchData}>Get Data</button>
            <br />
            {apiData1 != null &&
                    <>
                    <p>{apiData1.data.punchline}</p>
                    <p>{apiData1.data.setup}</p>
                    </>
            }
             <button onClick={fetchData1}>Get Data</button>

             <div className="col-12">
                <input type="text" onChange={(e)=>setValue(e.target.value)} />
                <button onClick={fetchData2}>Get Data</button>
                {apiData2 != null &&
                    <>
                    {apiData2.length > 0 &&
                        <>
                            {apiData2.map((i)=> 
                                <>
                                    <p>{i.country}</p>
                                    <p>{i.name}</p>
                                    <a href={"https://"+i.domains[0]}>{i.domains[0]}</a>
                                </>
                            )
                            }
                        </>
                    }
                    </>

                }
             </div>
        </div>
    )
}
export default ApiTest;