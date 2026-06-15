import logoDefault from '../assets/images/Logo-images/Logo-Default.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner">
        <img src={logoDefault} alt="Portfolio logo" className="site-footer-logo" />
        <div className="site-footer-meta">
          <small>Built with passion by John Leonard A. Libanan</small>
          <span>&copy; Copyright 2026. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
