import Input from "@/components/base/Input";

const ContactUs = () => {
  return (
    <div className="relative container mt-16 mx-auto">
      <div className="flex flex-wrap mb-[100px]">
        <div className="w-7/12">
          <div className="bg-[#f6eff7] rounded-[10px] pt-[45px] px-[60px] pb-[50px]">
            <Input id="full-name" name="fullname" label="Full Name" required />
            <div className="flex gap-5">
              <Input id="number" name="number" label="Phone" required />
              <Input id="mail" name="mail" label="Email" />
            </div>
            <Input id="mail" name="mail" label="Message" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default ContactUs;