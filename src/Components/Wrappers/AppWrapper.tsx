export const AppWrapper = ({ children }) => (
  <div className="min-h-screen h-full flex flex-col flex-auto flex-shrink-0 antialiased bg-backgroundColor dark:bg-gray-700 text-black dark:text-white font-srif">
    {children}
  </div>
);
