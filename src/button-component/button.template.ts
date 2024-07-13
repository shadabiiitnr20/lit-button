import { html, nothing, TemplateResult } from 'lit';
import { LitButton } from './button.component';

const template = (scope: LitButton): TemplateResult => {
  return html`<button
    id=${scope.generateId}
    class=${scope.buttonClassName}
    title=${scope.label}
    name=${scope.label}
    role="button"
    tabindex="0"
    ?disabled=${scope.disabled}
    @click=${scope.handleClick}
  >
    <slot name="icon-left"></slot>
    <span class="btn-label">${scope.label}</span>
    <slot name="icon-right"></slot>
    ${scope.loader && !scope.disabled
      ? html`<span class="btn-spinner"></span>`
      : nothing}
  </button>`;
};

export default template;
