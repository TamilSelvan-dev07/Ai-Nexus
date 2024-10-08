import {createContext, useState} from 'react';
import run from '../components/AiNexus';

 export const Context = createContext();

 const ContextProvider = (props)=>{

    const [input,setInput] = useState("");
    const [recent,setRecent] = useState("");
    const [prevRecent,setPrevRecent] = useState([]);
    const [loading,setLoading]= useState(false);
    const [result,setResult] = useState(false);
    const [resultData,setResultData] = useState("")


    const Delay = (index,nextword) =>{

        setTimeout(function() {
            
        setResultData(prev=>prev+nextword)
            
        }, 80*index);
    }

    const newChat = ()=>{
        setLoading(false);
        setResult(false);
    }


    const onSent = async (prompt)=>{
        setResultData("")
        setLoading(true)
        setResult(true)
        setRecent(input)
        setPrevRecent(prev=>[...prev,input])
         
       const response =  await run(input)
        let newResponse = response.split("**")
        let newArray = "";
        for (let i = 0; i < newResponse.length; i++) {
           if (i===0 || i%2 !==1) {
               
              newArray+= newResponse[i];
           }
           else {
            newArray += "<b>" + newResponse[i]+"</b>"
           }
            
        }

        const newResponse1 = newArray.split("*").join("<br>")
        const newResponseArray = newResponse1.split(" ")

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i];
            Delay(i,nextword+" ")
            
        }
         setInput("")
         setLoading(false)
         
    }

    const contextValue = {
         input,
         onSent,
         setInput,
         recent,
         setRecent,
         prevRecent,
         setPrevRecent,
         loading,
         result,
         resultData,
         newChat

    }

    return (

        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
 }

 export default ContextProvider;
