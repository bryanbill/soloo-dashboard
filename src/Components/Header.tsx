import { SearchField } from "./Input/SearchField";

export const Header = () => {
  return (
    <div className="fixed  w-full flex items-center h-14 text-white z-10  bg-backgroundColor">
      <div className="flex items-center bg-white justify-center md:justify-center w-1/6 md:w-52 h-14 dark:bg-gray-800 border-none">
        <div className="flex inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <svg
              className="w-10 h-10 text-red-400"
              fill="bg-primary"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex w-5/6 items-center justify-between">
        <p className="text-lg pl-2 font-semibold text-black">Dashboard</p>
        <SearchField />
        <div className="flex">
          <div className="flex flex-row">
            <span className="flex items-center justify-center px-3 text-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="inline-block  w-2 h-2 mr-2 bg-red-600 rounded-full"></span>
            </span>
            <span className="flex items-center justify-center px-3 text-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="inline-block  w-2 h-2 mr-2 bg-green-600 rounded-full"></span>
            </span>
            <span className="flex items-center justify-center px-3 text-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            <a href="" className="px-4">
              <img
                src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                alt=""
                className="h-10 w-10 bg-gray-200 border rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
