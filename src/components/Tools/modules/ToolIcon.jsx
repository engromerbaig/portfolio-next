const ToolIcon = ({ imgSrc, text }) => {
    return (
      <div className="flex flex-col  items-center">
        <img src={imgSrc} alt={text} className="w-16 h-16 mb-2" />
        <p className="text-center text-sm">{text}</p>
      </div>
    );
  };
  
  export default ToolIcon;
  