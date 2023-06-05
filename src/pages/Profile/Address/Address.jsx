import React, { useContext, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import AddressForm from "./AddressForm/AddressForm";
import AddressList from "./AddressList/AddressList";

function Address() {
  const [openAddressForm, setOpenAddressForm] = useState(false);
  const { productState } = useContext(ApiContext);
  console.log(productState.addressList, "productstate");

  return (
    <div className="address-outer-container">
      {productState.addressList.length === 0 ? (
        <div className="header">
          <h3>No address to display</h3>
        </div>
      ) : null}
      <div className="address-container">
        <AddressForm
          openAddressForm={openAddressForm}
          setOpenAddressForm={setOpenAddressForm}
        />
        <AddressList />
      </div>
    </div>
  );
}

export default Address;
