import { useState } from "react";
import { CreateAppModal } from "..";
import { closeModal } from "../../utils/close_modal";
import { openModal } from "../../utils/open_modal";

export const AppListWidget = () => {
  let initialValue = {
    appname: "",
    description: "",
  };
  const [appModalValues, setCreateAppModal] = useState(initialValue);

  const handleCreateAppModal = (app: {
    appname: string;
    description: string;
  }) => {
    setCreateAppModal(app);
    openModal("create-app-modal");
  };
  const list = [
    {
      name: "Arena",
      logo: "https://images-platform.99static.com//ygpJC1vhkkI1E4q089NeODXKj1c=/984x963:1486x1465/fit-in/590x590/99designs-contests-attachments/111/111703/attachment_111703617",
      description: "Some short ddescription",
      users: 23,
      access: "Paid",
    },
    {
      name: "Wallet",
      logo: "data:image/jpeg;base64,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",
      description: "Some short ddescription",
      users: 200,
      access: "Free",
    },
    {
      name: "ShowTime",
      logo: "https://www.pngitem.com/pimgs/m/21-214634_tv-logo-transparent-background-hd-png-download.png",
      description: "Some short ddescription",
      users: 127,
      access: "Beta",
    },
  ];
  return (
    <>
      <div className="flex w-full mt-4 justify-between items-center my-2">
        <div className="font-bold text-2xl">All Apps</div>
        <CreateAppModal
          appname={initialValue.appname}
          description={initialValue.description}
          onSubmit={() => closeModal()}
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="m-1 btn">
            <i className="fas fa-list"></i>
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Free</a>
            </li>
            <li>
              <a>Paid</a>
            </li>
            <li>
              <a>Beta</a>
            </li>
          </ul>
        </div>
      </div>
      {/* App List */}
      <div className="flex flex-row flex-wrap w-full items-center justify-between">
        {list.map((element, index) => {
          return (
            <div
              className="flex flex-col items-center card w-56 shadow-xl m-1"
              key={index}
            >
              <div
                className="card-body"
                style={{ backgroundImage: element.logo }}
              >
                <h2 className="card-title">
                  {element.name}
                  <div className="badge mx-1 badge-primaryDark">
                    {element.access}
                  </div>
                </h2>
                <p>{element.description}</p>
                <div className="justify-end card-actions">
                  <button
                    className="btn btn-primaryMaroon"
                    onClick={() =>
                      handleCreateAppModal({
                        appname: element.name,
                        description: element.description,
                      })
                    }
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
