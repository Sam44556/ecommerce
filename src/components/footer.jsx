function Foot() {
  const t = new Date().getFullYear();
  return (
    <>
    <footer className="footer">
      <p>&copy; {t}Copyright. All Rights Reserved.</p>
    </footer>
    </>
  );
}
export default Foot;
