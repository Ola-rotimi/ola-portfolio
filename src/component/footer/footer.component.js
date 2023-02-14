import "./footer.styles.scss"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer-container">
      <p>© {year} Olarotimi Adamson</p>
    </div>
  );
};

export default Footer;
