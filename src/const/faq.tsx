import { AccordionData } from "@/components/base/Accordion";

export const FAQ: AccordionData[] = [
  {
    title: 'Where is your company located?',
    content: "We are Real Estate Photo Editing Company and located in Hanoi, Vietnam."
  },
  {
    title: 'How can I contact you?',
    content: (
      <>
        <p>
          Email: <strong>Newday247@gmail.com</strong>
        </p>
        <li>Chat with us through the chat icon at right bottom.</li>
        <li>Facebook Messenger, Instagram chat.</li>
      </>
    )
  },
  {
    title: 'Do you work 24/7?',
    content: "Yes. We are always open 24/7 to serve your requests."
  },
  {
    title: 'Free Trial?',
    content: (
      <>
        <p>
          We are offering a free trial for 02 services:
        </p>
        <li>Real Estate Photo Editing: 03 photos.</li>
        <li>Day to Dusk conversion: 01 photo</li>
      </>
    )
  },
  {
    title: 'Can you ensure that my data will be secured?',
    content: "Yes, we can. We can ensure that your original and edited photos will not be published/advertised or accessible to any third-party or any persons who don't have authority without your permission."
  },
  {
    title: 'Which payment method do you use?',
    content: (
      <>
        <p>
          We are using PayPal as the payment method. After each job is completed, we will send you a
          invoice link that help you easy for tracking and make payment. Besides PayPal platform, you can send your payment by using <strong>Wire Transfer</strong> or <strong>Wise</strong>.
        </p>
      </>
    )
  },
]