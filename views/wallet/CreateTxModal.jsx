import React from "react";

const CreateTxModal = () => {
  return (
    <div>
      <div className="modal" id="createTxModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create transaction</h5>
            </div>
            <div className="modal-body">
              <form>
                <fieldset>
                  <legend className="mb-3">
                    Create your own transaction below.
                  </legend>
                  <div className="form-group row formRow" id="createTxTypeForm">
                    <div className="col-sm-4">
                      <label for="createTxType">Transaction type</label>
                    </div>
                    <div className="col-sm-8">
                      <div className="form-group" role="group">
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="selectTxType"
                              id="satTxRadio"
                              value="1"
                            >
                              Send ESAT
                            </input>
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="selectTxType"
                              id="tokenTxRadio"
                              value="2"
                            >
                              Send token
                            </input>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="form-group row formRow"
                    id="createTxTokenContractForm"
                  >
                    <div className="col-sm-4">
                      <label for="createTxTokenContract">
                        (Token) contract address
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="createTxTokenContract"
                      ></input>
                    </div>
                  </div>
                  <div
                    className="form-group row formRow"
                    id="createTxFromAddressForm"
                  >
                    <div className="col-sm-4">
                      <label for="createTxFromAddress">Sender address</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="createTxFromAddress"
                      ></input>
                    </div>
                  </div>
                  <div
                    className="form-group row formRow"
                    id="createTxToAddressForm"
                  >
                    <div className="col-sm-4">
                      <label for="createTxToAddress">Destination address</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="createTxToAddress"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row formRow" id="createTxValueForm">
                    <div className="col-sm-4">
                      <label for="createTxValue">
                        Transaction Value (in tokens)
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="createTxValue"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row formRow" id="createTxDataForm">
                    <div className="col-sm-4">
                      <label for="createTxData">Transaction Data</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="createTxData"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row formRow" id="createTxGasLimitForm">
                    <div className="col-sm-4">
                      <label for="createTxGasLimit">Gas Limit (in wei)</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="createTxGasLimit"
                      ></input>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary createTxBtn">
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                  id="createTxSpinner"
                ></span>
                Sign & Send
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelCreateTx"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTxModal;
