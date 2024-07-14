import LitButton from './button.component.js';

export * from './button.component.js';
export default LitButton;

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': LitButton;
  }
}
