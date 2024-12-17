import React from 'react'
import { useNavigate } from 'react-router-dom'

const Policy = () => {

  const navigate = useNavigate()

  const HandleAllowbtn =()=>{
    navigate("/token")
  }

  return (
    <div className='h-[696px] w-[567px] ml-[294px]  border boxShadow'>
      <div className='h-[96px] border-b-2 flex gap-4 justify-center items-center'>
        <div className='h-[48px] w-[88.8px] flex'>
          <div className='w-[48px] h-[48px] rounded-full border'>
            <img src="https://s3-alpha-sig.figma.com/img/d8ee/c9bf/de1ea85209ba02afdb15b0ffdbf04f74?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drsF7Ue7oJS67AlBa8gQptxP9EL8qCMrgiPEx3xgY8TgM6svT40-l6kemCZM31khRxrXSQnDNGhyUVdHDEvabNYZuWk2tZLcTXdZlRW3rU~xmWpdd~ItCuI7NqvuGGCkotyAsYzTJUSXhjvdL~gvCAUBDCD7JuoJn8ZgAJP5KnnjXTNfUdmmVDRDppKAFBrcc~GbryfqArtK6qU5ZNFPe3j-ZgsJS1AkjC3Z2s7ZO7sjsAaGD~8jWUPynnsNDodtxQz3131t~w7m3ciXesLlQM9EyYS3nmUeFvFN4In0Gqp296fP0hXGhf3MbWQKtSlWNH6KSPVcGV27ya8ItfEXYg__" alt="" className='w-[100%]'/>
          </div>
          <div className='w-[48px] h-[48px] rounded-full border'>
            <img src="https://s3-alpha-sig.figma.com/img/d7fa/ec30/40321c1cfb636670587335d458fc0da5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LCxRzx8GQRMJl33i0IAr6Y3vH-orpFkqDDcsqmop-jwFAijOZyXgZkljeZ-TVhCB-W19rmZstIAlcUiOthJn9eheZQ3dmlBZNf07hce6WXzPCDo5qdAOFBr7EFuH-4e9rkiK80H27dDRuYACq8OUyGRtL8FVYULxc5O-aswO8KDfffQy9S6MWju0I0WfaIGp3em2K0k75ofQtxXKYpiTWueXtrIwwh7uxEORW8fG~d14vrTG-avDUr0HoQlqc7GuAMS0BuOV8TgzBfC3MJGcAo0bQAQ995p~-fyaJrnyW2Fia71I3F2-1benkhwtsJwpybiMXVuulRWVSAni2c4T3g__" alt="" className='w-[100%]'/>
          </div>
        </div>
        <div className='h-[46px] w-[394px] '>
          <p className='text-gray-600 text-[16px] font-medium'>Johndoe@gmail.com</p>
          <p className='text-gray-500 text-[12px]'>Policy Version</p>
        </div>
      </div>
      <div className='h-[409px] '>
        <div className='w-[495px] h-[210px] m-[36px]'>
          <div className='h-[87px] flex flex-col gap-[12px]'>
            <p className='text-gray-800'>The following details will be collected from you by XYZ_name</p>
            <div>
              <input type="checkbox" name="fancial" id=""defaultChecked/>
              <label htmlFor="" className='text-gray-500 ml-2 text-[14px]'>facial scan</label>
            </div>
            <div>
              <input type="checkbox" name="loaction" defaultChecked/>
              <label htmlFor="" className='text-gray-500 ml-2 text-[14px]'>Location access</label>
            </div>
          </div>
          <div className='h-[87px] mt-[36px]'>
            <p className='flex flex-col gap-[12px]'>
              <h1 className='text-gray-700'>Purpose</h1>
              <p className='text-gray-500 text-[14px]'>Fraud prevention and compliance checks</p>
              <p className='text-gray-500 text-[14px]'>Fraud prevention and compliance checks</p>
            </p>
          </div>
        </div>
      </div>
      <div className='h-[146px] border-t-2 pt-[24px] pb-[24px] pl-[32px] pr-[32px] text-gray-600 text-[14px]'>
        <p>
        By clicking Allow, you allow the app to use your information in accordance to their respective <span className='text-violet-600'>terms of serve</span> and <span className='text-violet-600'>privacy policies.</span>
        </p>
        <div className='w-[503px] h-[36px] mt-[12px] flex justify-between '>
        <button className='w-[245px] h-[36px] border rounded-md text-[14px]'>Deny</button>
        <button className='w-[245px] h-[36px] border rounded-md bg-violet-600 text-white text-[14px]' onClick={HandleAllowbtn}>Allow</button>
        </div>
      </div>
      <p className='text-gray-500 text-[12px] text-center relative top-5'>SDK Version </p>
    </div>
  )
}

export default Policy