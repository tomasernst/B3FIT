const Spinner = ({
    containerClassName = 'absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2',
    spinnerClassName = 'border-t-transparent border-solid animate-spin  rounded-full border-rcsgreen border-8 h-32 w-32',
  }) => {
    return (
      <div className={`${containerClassName}  `}>
        <div className={`${spinnerClassName}`} />
      </div>
    );
  };
  
  export default Spinner;