import { useBarcode } from "next-barcode";
import { useEffect, useRef, useState } from "react";

const Brcode = () => {
  const [barcode, setbarcode] = useState("next-barcode");
  //useEffect(() => {}, [barcode]);
  const valueRef = useRef();
  const { inputRef } = useBarcode({
    value: barcode,
    format: "pharmacode",
    width: 4,
    height: 40,
    displayValue: false,
  });
  const handleSUbmit = (e) => {
    e.preventDefault();
    setbarcode(valueRef.current.value);
  };
  useEffect(() => {
    setbarcode("mahedi");
  }, []);
  return (
    <>
      <form onSubmit={handleSUbmit}>
        <input type="text" name="barcode" ref={valueRef} />
        <button>Submit</button>
      </form>
      <svg ref={inputRef} />
    </>
  );
};

export default Brcode;
