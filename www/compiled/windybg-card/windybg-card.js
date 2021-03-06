import {
  LitElement, html
} from './lit-element.js';

class WindyBgCard extends LitElement {
  static get properties() {
    return {
      hass: Object,
      config: Object,
    }
  }

  _render({ hass, config }) {
    var url = "/local/windy-animations/"; //root for the iframe html files
    var darksky = config.weather+""
    var current_weather = hass.states[darksky].state;
    console.log(current_weather);
    
    switch(current_weather) { 
      // case "sunny":           url += "sunny.html"; break;
      // case "partlycloudy":    url += "cloudy.html"; break;
      // case "cloudy":          url += "cloudy.html"; break;
      // case "mostlycloudy":    url += "mostlycloudy.html"; break;
      // case "clear-night":     url += "night.html"; break;
      // case "fog":             url += "fog.html"; break;
      //case "hail":            url += "hail.html"; break; TODO
      //case "lightning":       url += "lightning.html"; break; TODO
      //case "lightning-rainy": url += "lightning.html"; break; TODO
      //case "pouring":         url += "rainy.html"; break; TODO
      //case "rainy":           url += "rainy.html"; break; TODO
      //case "snowy":           url += "snowy.html"; break; TODO
      //case "snowy-rainy":     url += "rainy.html"; break; TODO
      //case "windy":           url += "windy.html"; break; TODO
      //case "windy-variant":   url += "windy.html"; break; TODO
      //case "exceptional":   url += "exceptional.html"; break; TODO
      default:                url += "windy.html"; break;
    } 

    return html`
      <style>
        .bg-video{
            min-width: 100%; 
            min-height: 100%;
            
        }
        
        .bg-wrap{
            position: absolute;
            right: 0;
            bottom: 0;
            min-width: 100vw; 
            min-height: 100vh;
            top:-116px;
            z-index: -1;
        }
        
        .bg-wrap:before {
          content: '';
          position: absolute;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      </style>
      <div class="bg-wrap">
       <iframe class="bg-video" frameborder="0" src="${url}"/> 
      </div>
    `;
  }

  setConfig(config) {
    if (!config.weather) {
      throw new Error('You need to define weather');
    }

    this.config = config;
  }
  
  getCardSize() {
    return 0;
  }
}
customElements.define('windybg-card', WindyBgCard);
