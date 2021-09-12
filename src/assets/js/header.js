const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
<style>
  .navbar{
    background-color: #113662;
    color: white;
  }
</style>

<nav class="navbar">
  <div class="container-fluid ">
    <span class="navbar-brand mb-0 h1">BEDU SOCIAL</span>
  </div>
</nav>
`;

 class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);