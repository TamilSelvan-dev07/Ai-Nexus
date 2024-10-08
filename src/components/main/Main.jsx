import React, { useContext } from 'react'
import '../main/Main.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { LuSendHorizonal } from "react-icons/lu";
import { FaNewspaper } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { BsMic } from "react-icons/bs";
import { Assets } from "../../assets/assets"
import { Context } from '../../Context/Context';

const Main = () => {


  const {onSent,input,setInput,recent,loading,result,resultData}=useContext(Context);


  return (
    <div className='container'>
      <div className="container-1">

        <div className="left-side">
          <img src={Assets.Logo} />
          <p>Ai-Nexus</p>
        </div>

        <div className="user">
          <img src={Assets.user_icon} />
        </div>
      </div>
      

      <div className="container-2">

        {!result?<>
          <div className="text">
          <p><span>Hello, Dev.</span></p>
          <p>How Can i help you today?</p>
        </div>

        <div className="box">
          <div className="boxes">
            <p>Create a chart based on my data</p>
            <FaChartBar className='icons'/>
            
          </div>

          <div className="boxes">
            <p>write a essay about technology </p>
            <TbWriting className='icons'/>
          </div>

          <div className="boxes">
            <p>What's news in the japan today?</p>
            <FaNewspaper className='icons'/>
          </div>

          <div className="boxes">
            <p>Suggest a beautiful place in world</p>
            <FaMapLocationDot className='icons'/>
          </div>

        </div>
        </> :<div className='Result'>
          
          <div className="title">
            <img src={Assets.user_icon} />
            <p>{recent}</p>
            </div>
            
            <div className="result-data">
              <img src={Assets.Logo} />
              {loading?<div className="loader"></div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              
              </div> </div>}

    

      <div className="container-3">
      
      <div className="input-box">
           <input type="text" placeholder='Enter a prompt' onChange={(e)=>setInput(e.target.value)} value={input} />
          <div className="icon">
          <CiImageOn className='input-icon'/>
          <BsMic className='input-icon'/>
          {input?<LuSendHorizonal className='input-icon' onClick={()=>onSent()}/>:null}
          </div>
          
      </div>
      <p>Ai-Nexus may display inaccurate info,including about people,so check its responses. Your privacy and Ai-Nexus app</p>
      </div>

      </div>


     

    </div>
  )
}

export default Main