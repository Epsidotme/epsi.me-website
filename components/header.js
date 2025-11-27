class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    z-index: 100;
                }
				

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sponsor-section {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.sponsor-logo {
    display: block;
}

.sponsor-text {
    font-size: 0.9rem;
    letter-spacing: 2px;
    color: #00e0ff; /* neon cyan */
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
}

nav a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
}

nav a:hover,
nav a.active {
    color: #00e0ff;
}

                
                header {
                    background: rgba(10, 10, 26, 0.8);
                    backdrop-filter: blur(5px);
                    border-bottom: 1px solid rgba(157, 0, 255, 0.3);
                    padding: 1rem 2rem;
                    position: relative;
                }
                
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .logo-icon {
                    width: 24px;
                    height: 24px;
                    background: linear-gradient(135deg, #9d00ff, #00f0ff);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                }
                
                .logo-icon i {
                    width: 16px;
                    height: 16px;
                    color: #0a0a1a;
                }
                
                .logo-text {
                    font-weight: bold;
                    font-size: 1.25rem;
                    background: linear-gradient(90deg, #9d00ff, #00f0ff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                
                nav ul {
                    display: flex;
                    gap: 1.5rem;
                    list-style: none;
                }
                
                nav a {
                    color: white;
                    text-decoration: none;
                    position: relative;
                    padding: 0.5rem 0;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.9rem;
                }
                
                nav a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #9d00ff, #00f0ff);
                    transition: width 0.3s ease;
                }
                
                nav a:hover::after {
                    width: 100%;
                }
                
                .active {
                    color: #00f0ff;
                }
                
                .active::after {
                    width: 100% !important;
                }
                
                @media (max-width: 768px) {
                    .header-container {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    nav ul {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    
                    nav a {
                        font-size: 0.8rem;
                    }
                }
            </style>
            <header>
    <div class="header-content">
        <a href="https://zentaka.com" class="sponsor-section">
            <img src="images/zentaka logo.png" alt="Zentaka Cybernetics" class="sponsor-logo" width="45" height="45">
            <span class="sponsor-text">OFFICIAL ZENTAKA EMPLOYEE</span>
        </a>

        <nav>
            <ul>
                <li><a href="index.html" class="${window.location.pathname === 'index.html' ? 'active' : ''}">Profile</a></li>
                <li><a href="network.html" class="${window.location.pathname === 'network.html' ? 'active' : ''}">Network</a></li>
                <li><a href="operations.html" class="${window.location.pathname === 'operations.html' ? 'active' : ''}">Operations</a></li>
                <li><a href="contact.html" class="${window.location.pathname === 'contact.html' ? 'active' : ''}">Contact</a></li>
                <li><a href="security.html" class="${window.location.pathname === 'security.html' ? 'active' : ''}">Security</a></li>
            </ul>
        </nav>
    </div>
</header>

        `;
    }
}

customElements.define('custom-header', CustomHeader);