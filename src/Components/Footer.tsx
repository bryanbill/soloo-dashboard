export const Footer = () => {
  return (
    <footer className="footer px-4 py-6">
      <div className="footer-content">
        <p className="text-sm text-gray-600 text-center">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
