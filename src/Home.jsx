import { useCallback, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function Home() {
  const [data, setData] = useState(null);

  const handleOnChange = useCallback((err, result) => {
    if (result) setData(result.text);
    //else setData("Not Found");
  }, []);
  const noDataFound = <span>Use barcode for the scan.</span>;
  return (
    <>
      <BarcodeScannerComponent
        width={"50%"}
        height={"calc(50%)"}
        onUpdate={handleOnChange}
      />
      <p>{data ? data : noDataFound}</p>
    </>
  );
}

export default Home;
