import { html, nothing, TemplateResult } from 'lit';
import LitButton from './button.component';

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
    ${buttonContent(scope)}
    ${scope.loader && !scope.disabled
      ? html`<span class="btn-spinner"></span>`
      : nothing}
  </button>`;
};

const buttonContent = (scope: LitButton): TemplateResult => {
  switch (scope.iconPosition) {
    case 'left':
      return html`
        <slot name="icon"></slot>
        <span class="btn-label">${scope.label}</span>
      `;
    case 'right':
      return html`
        <span class="btn-label">${scope.label}</span>
        <slot name="icon"></slot>
      `;
    default:
      return html`<span class="btn-label">${scope.label}</span> `;
  }
};

export default template;
