import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = () => {
  const customerIdElement = useRef();
  const redirectUrlElement = useRef();
  const policyElement = useRef();
  const purposeElement = useRef();
  const scopeElement = useRef();
  const navigate = useNavigate();

  const HandleInputField = (e) => {
    e.preventDefault();

    const customerId = customerIdElement.current.value;
    const redUrl = redirectUrlElement.current.value;
    const policy = policyElement.current.value;
    const purpose = purposeElement.current.value;
    const scope = scopeElement.current.value;

    customerIdElement.current.value = "";
    redirectUrlElement.current.value = "";
    policyElement.current.value = "";
    purposeElement.current.value = "";
    scopeElement.current.value = "";

    navigate("/policy");
  };

  return (
    <div className='w-[567px] h-[438px] mt-[120px] ml-[294px]'>
      <div className='h-[54px] text-center text-2xl font-medium text-gray-700'>Enter Consent Details</div>
      <div className='h-[384px] rounded-md border boxShadow'>
        <form
          action=""
          className='flex flex-col gap-[20px] w-[503px] h-[320px] m-[24px]'
          onSubmit={(e) => HandleInputField(e)}
        >
          <div className='flex w-[503px] h-[36px] justify-between'>
            <label htmlFor="" className='text-[12px] text-gray-500'>Customer ID</label>
            <input type="text" className='border rounded-md' ref={customerIdElement} />
          </div>
          <div className='flex w-[503px] h-[36px] justify-between'>
            <label htmlFor="" className='text-[12px] text-gray-500'>Redirect URI</label>
            <input type="text" className='border rounded-md' ref={redirectUrlElement} />
          </div>
          <div className='flex w-[503px] h-[36px] justify-between'>
            <label htmlFor="" className='text-[12px] text-gray-500'>Policy Version</label>
            <input type="text" className='border rounded-md' ref={policyElement} />
          </div>
          <div className='flex w-[503px] h-[36px] justify-between'>
            <label htmlFor="" className='text-[12px] text-gray-500'>Purpose</label>
            <input type="text" className='border rounded-md' ref={purposeElement} />
          </div>
          <div className='flex w-[503px] h-[36px] justify-between'>
            <label htmlFor="" className='text-[12px] text-gray-500'>Scope</label>
            <input type="text" className='border rounded-md' ref={scopeElement} />
          </div>
          <div className='flex w-[503px] h-[36px]'>
            <button
              className='bg-violet-400 hover:bg-violet-600 w-[100%] text-[14px] text-white rounded-md'
              type='submit'
            >
              Request Consent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputField;
