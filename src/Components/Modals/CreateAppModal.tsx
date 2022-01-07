type CreateAppProps = {
  appname: string;
  description: string;
  onSubmit: (appname: string, description: string) => void;
};
export const CreateAppModal = (props: CreateAppProps) => {
  return (
    <div id="create-app-modal" className="modal">
      <div
        data-theme="light"
        className="modal-box flex items-center w-72 flex-col"
      >
        <div className="title">Scan to Connect</div>
        <p>Create Your {props.appname}</p>
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
