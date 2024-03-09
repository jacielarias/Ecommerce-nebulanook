import { useState } from "react";
import LazyLoadedImage from '../LazyLoading';
import FaqsItem from "./FaqsItem";
import '../../style sheet/FAQs.css';
import FAQsImage from '../../imagenes/FAQs.jpg'

function Faqs () {
  const [curOpen, setIsOpen] = useState(0);
    
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return (
    <div id="faqs" className="FAQs-content">
      l<LazyLoadedImage className={`image-faqs`} src={FAQsImage} alt='FAQs' />
        <div className="FAQs-accordion-content"> 
          <h2 className="title">FAQs</h2>
          {faqs.map((item, i) => (
            <FaqsItem
              title={item.title}
              text={item.text}
              num={i}
              key={item.title}
              curOpen={curOpen}
              onOpen={setIsOpen}
            >
              {item.text}
            </FaqsItem>
          ))}
        </div>
    </div>
  );
}

export default Faqs;