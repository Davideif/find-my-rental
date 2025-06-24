export const metadata = {
  title: 'Property pulse',
  description: 'Property pulse',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          {children}
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
