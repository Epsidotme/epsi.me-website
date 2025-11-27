class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: rgba(10, 10, 26, 0.8);
          border-top: 1px solid rgba(157, 0, 255, 0.3);
          padding: 2rem;
          margin-top: 4rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .sponsor-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .sponsor-section:hover {
          opacity: 0.8;
        }
.sponsor-logo {
          height: 40px;
        }
        
        .sponsor-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }
        
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        
        .footer-links a {
          color: #00f0ff;
          text-decoration: none;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #9d00ff;
          text-shadow: 0 0 8px rgba(157, 0, 255, 0.5);
        }
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
          font-family: 'Share Tech Mono', monospace;
text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .copyright:hover {
          color: #00f0ff;
          text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);
        }

        .contact-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 26, 0.9);
          z-index: 1000;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background: rgba(10, 10, 26, 0.95);
          border: 1px solid #9d00ff;
          padding: 2rem;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 0 20px rgba(157, 0, 255, 0.5);
        }

        .modal-content h3 {
          color: #00f0ff;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          text-transform: uppercase;
        }

        .modal-content input,
        .modal-content textarea {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(157, 0, 255, 0.3);
          color: white;
          font-family: 'Rajdhani', sans-serif;
        }

        .modal-content textarea {
          min-height: 150px;
          resize: vertical;
        }

        .modal-content button {
          background: linear-gradient(90deg, #9d00ff, #00f0ff);
          color: #0a0a1a;
          border: none;
          padding: 0.8rem 1.5rem;
          font-weight: bold;
          cursor: pointer;
          margin-top: 0.5rem;
          width: 100%;
          transition: all 0.3s ease;
        }

        .modal-content button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(157, 0, 255, 0.5);
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #00f0ff !important;
          margin-top: 1rem !important;
        }
.gear-disclaimer {
          color: rgba(0, 240, 255, 0.7);
          font-size: 0.7rem;
          font-family: 'Share Tech Mono', monospace;
          text-align: center;
          margin-top: 1rem;
        }
      </style>
      <div class="footer-container">
        <div class="contact-modal" id="contact-modal">
          <div class="modal-content">
            <h3>SEND MESSAGE</h3>
            <form id="contact-form">
              <input type="text" placeholder="Your Name" required>
              <input type="email" placeholder="Your Email" required>
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">SEND</button>
              <button type="button" class="close-btn">CLOSE</button>
            </form>
          </div>
        </div>
<a href="https://zentaka.com" class="sponsor-section">
          <img src="images/zentaka logo.png" alt="Zentaka Cybernetics" class="sponsor-logo">
          <span class="sponsor-text">OFFICIAL CYBERNETICS PROVIDER</span>
        </a>
<div class="gear-disclaimer">
          All cybernetic gear issued by Zentaka Cybernetics Division
        </div>
        <a href="https://zentaka.com" class="copyright">
          © 2077 ZENTAKA CYBERNETICS. ALL RIGHTS RESERVED.
        </a>
</div>
    `;
  }
}