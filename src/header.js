
const logo = require('./LOGO.svg');

export default function headerMarkup() {
  return `
  <nav class="wrapper">
    <div class="logo-img logo">
      <a href="/index.html">${logo}</a>
    </div>
    <div class="logo-klem"><span>Klem</span></div>
    <input type="checkbox" id="menu-toggle">
      <label for="menu-toggle" class="label-toggle"></label>
    </input>
    <ul>
      <a href="/velvære.html"><li>Velvære</li></a>
      <a href="/smerteoglindring.html"><li>Smerte og indring</li></a>
      <a href="/hjelpihverdagen.html"><li>Hjelp i hverdagen</li></a>
      <a href="/om.html"><li>Hvem er Klem?</li></a>
    </ul>
  </nav>
  `;
}
