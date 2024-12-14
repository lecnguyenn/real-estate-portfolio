"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import TextArea from "@/components/base/TextArea";
import BreadCrumb from '@/components/BreadCrumb';
import Map from '@/components/Map';

const ContactUs = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    message: '',
    phone: '',
    email: ''
  })
  const [error, setError] = useState({
    name: '',
    email: ''
  });
  const templateParams = {
    from_name: customerInfo.name,
    to_name: 'NewDay247',
    message: customerInfo.message,
    phone_number: customerInfo.phone,
    email_info: customerInfo.email,
    reply_to: customerInfo.email,
    mail_to: 'NewDay247.photo@gmail.com'
  };
  const handleSubmit = async () => {
    if (!customerInfo.name.length && !customerInfo.email.length) {
      setError({ name: 'Name is required', email: 'Email is required' })
      return;
    }
    if (!customerInfo.name.length) {
      setError({ ...error, name: 'Name is required' })
      return;
    }
    if (customerInfo.email.length) {
      setError({ ...error, name: 'Email is required' })
      return;
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS,
        template_id: process.env.NEXT_PUBLIC_TEMPLE_ID_EMAILJS,
        user_id: process.env.NEXT_PUBLIC_KEY_EMAILJS,
        template_params: templateParams
      })
    });
    if (response.ok) {
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      return await response.text();
    } else {
      console.error('Failed to send email');
      const errorText = await response.text();
      console.error('Error details:', errorText);
      throw new Error('Email sending failed');
    }
  }

  return (
    <>
      <BreadCrumb name='Contact Us' title='For Any Infomation' />
      <div className="relative container mt-16 mx-auto px-3">
        <div className="flex flex-wrap md:flex-nowrap mb-[100px] gap-6">
          <div className="w-full md:w-5/12">
            {/* <h2 className='text-[16px] text-[#16191e] leading-5 mb-8'>You have an order and don’t have time to edit everything by yourself, we are always ready to help.</h2> */}
            <div className="mb-[50px] text-center">
              <h4 className="font-bold text-[26px] text-[#16191e]">Contact Us With Support Line</h4>
            </div>
            <div className=" relative border-[1px] border-[#eee] rounded-[10px] py-[30px] px-[50px] mb-6">
              <div className="absolute bg-white left-[35px] top-[-9px] py-0 px-5">
                <h6 className="text-[14px] text-[#5e5e5e] font-semibold">To Know More</h6>
              </div>
              <div className="flex gap-2 justify-end items-center">
                <div className="font-semibold">
                  <span className="text-[#5e5e5e] text-[12px] leading-[1px] ">Email now</span>
                  <h6 className="text-[16px]">
                    <Link href={'mailto:NewDay247.photo@gmail.com'}>NewDay247.photo@gmail.com</Link>
                  </h6>
                </div>
                <div className="w-[40px] h-[40px] bg-[#efb93f] rounded-[5px] flex justify-center items-center">
                  <Image src={'/icons/email-text.svg'} width={25} height={25} alt="mail" />
                </div>
              </div>
            </div>

            <div className=" relative border-[1px] border-[#eee] rounded-[10px] py-[30px] px-[50px]">
              <div className="absolute bg-white left-[35px] top-[-9px] py-0 px-5">
                <h6 className="text-[14px] text-[#5e5e5e] font-semibold">Address</h6>
              </div>
              <div className="flex gap-2 justify-end items-center">
                <div className="font-semibold">
                  <span className="text-[#5e5e5e] text-[12px] leading-[1px] ">Location</span>
                  <h6 className="text-[16px]">
                    <Link href={'mailto:newday247@gmail.com'}>Ha Noi, Viet Nam</Link>
                  </h6>
                </div>
                <div className="w-[40px] h-[40px] bg-[#efb93f] rounded-[5px] flex justify-center items-center">
                  <Image src={'/icons/location.svg'} width={25} height={25} alt="mail" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <div className="bg-[#f6eff7] rounded-[10px] px-[25px] pt-[45px] md:px-[60px] pb-[50px]">
              <Input id="full-name" name="fullname" label="Full Name" value={customerInfo.name} onChange={(event) => setCustomerInfo({ ...customerInfo, name: event.target.value })} required error={error.name} />
              <div className="flex gap-5">
                <Input id="number" name="number" value={customerInfo.phone} label="Phone" onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} />
                <Input id="mail" name="mail" value={customerInfo.email} label="Email" onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })} required error={error.email} />
              </div>
              <TextArea id="message" name="message" label="Message" value={customerInfo.message} placeholder="Write somthing..." onChange={(e) => setCustomerInfo({ ...customerInfo, message: e.target.value })} className="mb-[30px]" />
              <div className="flex justify-end">
                <Button id="submit-button" onClick={handleSubmit}>Submit now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </>
  )
}

export default ContactUs;