import { CSSResult, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import template from './button.template';
import styles from './button.styles';

@customElement('lit-button')
export class LitButton extends LitElement {
  //Attributes that the custom web component will accept

  @property({ type: String, reflect: true }) label: string = 'Click Me!';

  @property({ type: String, reflect: true }) variant: 'filled' | 'outline' =
    'filled';

  @property({ type: String, reflect: true }) type:
    | 'primary'
    | 'danger'
    | 'success'
    | 'neutral' = 'primary';

  @property({ type: String, reflect: true }) size: 'sm' | 'md' = 'md';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true }) loader: boolean = false;

  static styles: CSSResult = styles;

  get generateId() {
    return 'lit' + '-' + Math.random().toString().substring(4);
  }

  get buttonClassName() {
    let baseClass = this.loader
      ? `btn btn-loader-cursor ${this.variant} ${this.type} ${this.size}`
      : `btn ${this.variant} ${this.type} ${this.size}`;
    if (this.disabled) baseClass = `${baseClass} disabled`;
    return baseClass;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  handleClick() {
    if (!this.disabled || !this.loader) {
      this.dispatchEvent(
        new CustomEvent('button-click', {
          detail: { message: 'Button clicked!' },
          bubbles: true,
          composed: true,
        })
      );
    }
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
