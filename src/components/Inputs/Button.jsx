const Button = ({handleClick, name}) => (
  <div className="submit-button-container">
      <button 
        className="submit-button" 
        onClick={handleClick}>
            {name}
      </button>
  </div>
);
  

export default Button;
