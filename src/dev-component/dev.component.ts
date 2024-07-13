import { html, LitElement, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './dev.styles';

@customElement('dev-component')
export class DevComponent extends LitElement {
  static styles: CSSResult = styles;
  render() {
    return html`
      <p>From Dev Component!!</p>
      <lit-button variant="filled" type="primary" size="md"></lit-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dev-component': DevComponent;
  }
}
