import React, { useContext } from "react";
import { ApiContext } from "../../../../context/ApiContext";
import FilledAddress from "./FilledAddress/FilledAddress";
import "../AddressList/FilledAddress/FilledAddress.css";
function AddressList() {
  const { productState } = useContext(ApiContext);

  return (
    <div>
      {productState.addressList.length === 0 ? (
        <div className="addresslist-empty-placeholder">
          <h3>No address to display</h3>
        </div>
      ) : (
        <ul className="list-stacked address-list brd-rd-semi-sq">
          {productState.addressList.map((ele) => {
            return <FilledAddress addressItem={ele} key={ele.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default AddressList;
