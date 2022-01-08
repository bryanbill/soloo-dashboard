import { ConnectDeviceModal, CreateAppModal } from "../Components";

export const openModal = (type: string) => {
  switch (type) {
    case "create-app-modal":
      window.location.assign("#create-app-modal");
      break;
    case "connect-device-modal":
      window.location.assign("#connect-device-modal");
      break;
    default:
      return null;
  }
};
