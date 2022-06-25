import React from "react";

const ContractCallModal = () => {
  return (
    <div>
      <div className="modal" id="contractCallModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Call Contract</h5>
            </div>
            <div className="modal-body">
              <form>
                <fieldset>
                  <legend className="mb-3">Make a contract call.</legend>
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="contractAddress">Contract address</label>
                    </div>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="contractAddress"
                      ></input>
                    </div>
                    <div className="col-sm-3">
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="loadContract"
                      >
                        Load
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="methodSelector">Choose method</label>
                    </div>
                    <div className="col-sm-8">
                      <select
                        className="form-control w-100"
                        id="methodSelector"
                      ></select>
                    </div>
                  </div>
                  <div className="m-0 p-0" id="inputList"></div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary contractCallBtn">
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                  id="contractCallSpinner"
                ></span>
                Call
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelContractCall"
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

export default ContractCallModal;
