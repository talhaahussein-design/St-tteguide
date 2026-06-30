export default function ParentLayout({ children }) {
  return (
    <div className="page-container">
      <div className="parent-wrapper">
        {children}
      </div>
    </div>
  );
}
