import { LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import template from './button.template';

@customElement('lit-button')
export class LitButton extends LitElement {
  //Attributes that the custom web component will accept

  @property({ type: String, reflect: true }) label: string = 'Click Me!';

  /*** 
   * Functionality to add in the future
   '@'property({ type: String }) loadingText = '';
   '@'property({ type: String }) successText = '';
   **/

  @property({ type: String, reflect: true })
  variant: //Using TypeScript Union Type
  'filled' | 'outline' | 'text' = 'filled';

  @property({ type: String, reflect: true })
  type: //Using TypeScript Union Type
  'primary' | 'danger' | 'success' | 'neutral' = 'primary';

  @property({ type: String, reflect: true })
  size: //Using TypeScript Union Type
  'sm' | 'md' | 'lg' = 'md';

  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  get generateId() {
    const prefix = 'lit';
    return prefix + '-' + Math.random().toString().substring(4);
  }

  get buttonClassName() {
    let baseClass = `btn ${this.variant} ${this.type} ${this.size}`;
    if (this.disabled) baseClass = `${baseClass} disabled`;
    return baseClass;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  render(): TemplateResult {
    return template(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': LitButton;
  }
}
