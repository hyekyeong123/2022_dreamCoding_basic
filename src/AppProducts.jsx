import React, {useState} from 'react';
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  // ******************************************
  return (
    <div>
      {showProducts && <Products/>}

      {/* Toggle 버튼 만들기 */}
      <button onClick={() => {
        setShowProducts((show) => !show)
      }}>
        Toggle
      </button>
    </div>
  );
};