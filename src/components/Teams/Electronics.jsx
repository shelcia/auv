import React from "react";
import Thilak from "../../assets/auv_photos_team/sopho_ele/Thilak/ThilakDP.jpg";

const Electronicmodal = () => {
  return (
    <React.Fragment>
      <div className="modal" id="electronics">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Electronics</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <img src={Thilak} alt="Sharath" className="profile" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Electronicmodal;
