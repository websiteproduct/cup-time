import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "",
  });

  const updateOrderDetails = (field, value) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const clearOrderDetails = () => {
    setOrderDetails({
      name: "",
      phone: "",
      address: "",
      payment: "",
    });
  };

  return (
    <OrderContext.Provider value={{ orderDetails, updateOrderDetails, clearOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
