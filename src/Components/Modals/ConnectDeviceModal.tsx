import { QRCode } from "react-qrcode-logo";

export const ConnectDeviceModal = () => {
  return (
    <div id="modal" className="modal">
      <div
        data-theme="light"
        className="modal-box flex items-center w-72 flex-col"
      >
        <div className="title">Scan to Connect</div>
        <p>
          <QRCode
            value="http://192.168.0.105:3000"
            logoImage="https://i.pravatar.cc/300"
            fgColor="#3D412C"
          />
        </p>
        <div
          className="btn btn-primary bg-primary border border-transparent hover:bg-primaryDark"
          onClick={() => window.location.assign("#")}
        >
          Close
        </div>
      </div>
    </div>
  );
};
