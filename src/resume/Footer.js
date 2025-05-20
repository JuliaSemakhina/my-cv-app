import React, { useState } from 'react';
import { socials } from './data'
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Footer =()=> {
  const [isCopied, setIsCopied] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const onCopyText = (id) => {
    setActiveButton(id);
setIsCopied(!isCopied);
    setTimeout(() => {
      setIsCopied(false);
    }, 800);
  };

    return (
      <footer className='section' id='contacts'>
            <div className="title">
          <h2>Contacts and Links</h2>
          <div className="underline"></div>
        </div>
               <div className="sprite-sheet__logo">
               </div>
    <div className="contacts__grid">

    {socials.map((social)=>{
      const { title, icon, url, id, short } = social;
                return (
      <div className="contact__item" key={url}>
      <div className="contact__icon d-f_jc-c">
  {icon}
  </div>
  <div className="contact__title">{title}</div>
  <div className="contact__description">
  <a>{short}</a>
  <CopyToClipboard text={url} onCopy={()=>onCopyText(id)}>
  <span>{isCopied && activeButton === id ? "Copied!" : <div className='copy'><MdContentCopy /><span className="tooltiptext">Copy to clipboard</span></div>}</span>
</CopyToClipboard>
  </div>
      </div>
                )
    }
    )}

</div>
      <p className='end-code'>
      const contactMe = () => console.log("Hello!");
    </p>
      </footer>

    )
}

export default Footer
