import '../../style sheet/FAQs.css' 

function FaqsItem ({ num, title, curOpen, onOpen, children }) {
  let isOpen = num === curOpen;

  function openItem() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={openItem}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="head">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div
        className={`content-box ${isOpen ? 'content-box--active' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}



export default FaqsItem;