function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} Mini-Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
