import React, {useState} from 'react';
import Products_V2 from "./components/Products_V2";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  // ******************************************
  return (
    <div>
      {showProducts && <Products_V2/>}

      {/* Toggle 버튼 만들기 */}
      <button onClick={() => {
        setShowProducts((show) => !show)
      }}>
        Toggle
      </button>
    </div>
  );
};