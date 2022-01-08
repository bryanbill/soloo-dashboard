import { QRCode } from "react-qrcode-logo";
import { closeModal } from "../../utils/close_modal";

export const ConnectDeviceModal = (props: { userId: string }) => {
  return (
    <div id="connect-device-modal" className="modal">
      <div
        data-theme="light"
        className="modal-box flex items-center w-72 flex-col"
      >
        <div className="title">Scan to Connect</div>
        <p>
          <QRCode
            value={props.userId}
            logoImage="https://i.pravatar.cc/300"
            fgColor="#3D412C"
          />
        </p>
        <div
          className="btn btn-primary bg-primary border border-transparent hover:bg-primaryDark"
          onClick={() => closeModal()}
        >
          Close
        </div>
      </div>
    </div>
  );
};
