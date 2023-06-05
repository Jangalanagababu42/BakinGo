import React, { useContext, useState } from "react";
import { ApiContext } from "../../../../context/ApiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import "./AddressForm.css";

function AddressForm({
  openAddressForm,
  setOpenAddressForm,
  filledAddressForm,
}) {
  const initialObjForm = {
    address: "",
    alternatemobile: "",
    city: "",

    mobile: "",
    name: "",
    pincode: "",
    state: "",
  };

  const [formData, setFormData] = useState(
    filledAddressForm ? filledAddressForm : initialObjForm
  );
  const { productState, productDispatch } = useContext(ApiContext);
  const formOnChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetFormData = () => {
    setFormData(initialObjForm);
  };

  const formOnSubmitHandler = (e) => {
    console.log(formData, "formData");
    e.preventDefault();
    if (!filledAddressForm) {
      productDispatch({
        type: "ADD_ADDRESS",
        payload: { address: { id: uuid(), ...formData } },
      });
    } else {
      productDispatch({
        type: "EDIT_ADDRESS",
        payload: { address: { ...formData } },
      });
    }
    resetFormData();
    setOpenAddressForm(false);
  };
  const generateRandomData = () => {
    setFormData({
      name: "nagababu",
      mobile: 876543456789,
      pincode: 507306,
      city: "dammapeta",
      address: "dammapeta, bhadradri kothagudem",
      alternatemobile: 98765456789,
      state: stateArr[Math.floor(Math.random() * (stateArr.length - 1))],
    });
  };
  const stateArr = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div>
      {openAddressForm ? (
        <form className="form-input" onSubmit={formOnSubmitHandler}>
          <div className="form-row">
            <div className="form-column">
              <input
                className="form-input-field"
                type="text"
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={formOnChangeHandler}
                required
              />
            </div>
            <div className="form-column">
              <input
                className="form-input-field"
                type="number"
                placeholder="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={formOnChangeHandler}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <input
                className="form-input-field"
                type="text"
                placeholder="city"
                name="city"
                value={formData.city}
                onChange={formOnChangeHandler}
                required
              />
            </div>
            <div className="form-column">
              <input
                className="form-input-field"
                type="number"
                placeholder="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={formOnChangeHandler}
                required
              />
            </div>
          </div>
          <div className="form-form-row">
            <textarea
              className="form-input-field text-area"
              type="text"
              placeholder="address"
              name="address"
              rows="5"
              value={formData.address}
              onChange={formOnChangeHandler}
              required
            ></textarea>
          </div>
          <div className="form-row">
            <div className="form-column">
              <input
                className="form-input-field"
                type="number"
                placeholder="alternatemobile(optional)"
                name="alternatemobile"
                value={formData.alternatemobile}
                onChange={formOnChangeHandler}
              />
            </div>
            <div className="form-column">
              <select
                className="form-input-field"
                name="state"
                value={formData.state}
                onChange={formOnChangeHandler}
                required
              >
                <option value="" disabled>
                  choose state
                </option>
                {stateArr.map((ele) => (
                  <option key={ele} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <input
                className="form-input-field btn btn-primary background-primary"
                type="submit"
                value="Add"
              />
            </div>
            <div className="form-column">
              <input
                className="form-input-field btn btn-secondary outlined-primary"
                type="reset"
                value="Reset"
                onClick={resetFormData}
              />
            </div>
            <div className="form-column">
              <input
                className="form-input-field btn btn-secondary outlined-primary"
                type="button"
                value="Random data"
                onClick={generateRandomData}
              />
            </div>
            <div className="form-column">
              <input
                className="form-input-field btn btn-secondary background-danger"
                type="button"
                value="cancel"
                onClick={() => setOpenAddressForm(false)}
              />
            </div>
          </div>
        </form>
      ) : (
        <div
          className="controller-container"
          onClick={() => {
            setOpenAddressForm(true);
            resetFormData();
          }}
        >
          <button className="btn btn-primary background-primary brd-rd-semi-sq">
            <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
          </button>
          <p className="add-address-label">Add new address</p>
        </div>
      )}
    </div>
  );
}

export default AddressForm;
