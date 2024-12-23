import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Token = () => {

  const {HandleValid,validToken} = useOutletContext()


  return (
    <div className={`w-[503px] mt-[40px] ml-[294px] boxShadow rounded-md ${validToken? "h-[160px]":"h-[740px]"}`}>
      <div className='w-[100%] rounded-md  p-[32px]'>
        <div className='w-[439px] h-[92px] flex flex-col justify-between'>
          <div className='h-[36px]  flex justify-between items-center'>
            <label htmlFor="" className='text-[10px] text-gray-500'>Token</label>
            <input type="text" placeholder='Token value' className='w-[344px] h-auto border rounded-md pt-[5.5px] pr-[12px] pb-[5.5px] pl-[12px] ' />
          </div>
          <div className='h-[36px] border'>
            <button className='text-white text-[12px] bg-violet-600 rounded w-[100%] h-[100%]' onClick={HandleValid}>Validate Token</button>
          </div>
        </div>
        <div className={`w-[100%] mt-[36px] max-h-[549px] border-t-2 overflow-y-scroll boxScrollBar ${validToken? "hidden":"visible"}`}>
          <div className='flex justify-between mt-[32px]'>
            <p>Consent Status</p>
            <button className='w-[102px] h-[32px] border flex justify-evenly items-center pt-[6px] pr-[12px] pb-[6px] pl-[10px] text-green-800 bg-green-100 rounded-md'>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.46484 4.62435L3.33984 6.70768L8.54818 1.29102" stroke="#006644" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span>Accepted</span>
            </button>
          </div>
          <div className='w-[100%] h-[381px] mt-[20px]'>
            <h2 className='pb-[21px]'>Consent Details</h2>
            <div className="">
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">Device ID</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">hashedUserId</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, modi.</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">timestamp</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">2024-06-12T14:35:22Z</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">ipAddress</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">192.168.1.15</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">Scope</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">Purpose</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">User onboarding and identity verification. Lorem ipsum dolor sit amet.</div>
              </div>
            </div>

          </div>
          <div className='w-[100%] h-[381px] mt-[20px]'>
            <h2 className='pb-[21px]'>Tenure</h2>
            <div className="">
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">Device ID</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">hashedUserId</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, modi.</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">timestamp</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">2024-06-12T14:35:22Z</div>
              </div>
              <div className="flex mb-[10px] text-[14px] text-gray-600">
                <div className="w-[190px] h-[21px]">ipAddress</div>
                <div className="w-[249px] text-left font-medium leading-[21px]">192.168.1.15</div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Token