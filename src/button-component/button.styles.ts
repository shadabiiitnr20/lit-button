import { css } from 'lit';

export default css`
  :root {
    --btn-border-radius: 6px;
    --btn-box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    --btn-font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
    --btn-gap: 0.5rem;
    --btn-primary-bg: #5ba4fc;
    --btn-primary-border: #5ba4fc;
    --btn-primary-color: #ffffff;
    --btn-primary-hover-bg: #0473f8;
    --btn-primary-active-opacity: 0.75;
    --btn-danger-bg: #fc3d39;
    --btn-danger-border: #fc3d39;
    --btn-danger-hover-bg: #e10703;
    --btn-danger-active-opacity: 0.75;
    --btn-success-bg: #53d769;
    --btn-success-border: #53d769;
    --btn-success-hover-bg: #26a53b;
    --btn-success-active-opacity: 0.75;
    --btn-neutral-bg: #e8e8e8;
    --btn-neutral-border: #000000;
    --btn-neutral-hover-bg: #dcdcdc;
    --btn-neutral-active-opacity: 0.75;
    --btn-spinner-animation: spin 1s linear infinite;
  }

  .btn {
    border-radius: var(--btn-border-radius, 6px);
    box-shadow: var(--btn-box-shadow, rgba(0, 0, 0, 0.1) 1px 2px 4px);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    gap: var(--btn-gap, 0.5rem);
    align-items: center;
    font-family: var(
      --btn-font-family,
      nunito,
      roboto,
      proxima-nova,
      'proxima nova',
      sans-serif
    );
    outline: 0;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
  }

  .btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn.btn-loader-cursor {
    cursor: not-allowed;
  }

  /**
   * Size MD
   */

  .md {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1rem;
    min-height: 2.5rem;
    min-width: auto;
    padding: 0.75rem 1rem;
  }

  .md > .btn-spinner {
    display: inline-block;
    height: 1.15rem;
    width: 1.15rem;
    border-radius: 50%;
    border: 2.5px solid transparent;
  }

  /**
   * Size SM
   */

  .sm {
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1rem;
    min-height: 1.5rem;
    min-width: auto;
    padding: 0.25rem 0.5rem;
  }

  .sm > .btn-spinner {
    display: inline-block;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    border: 1.5px solid transparent;
  }

  /**
   * Filled + Primary
   */

  .filled.primary {
    background: var(--btn-primary-bg, #5ba4fc);
    border: 1px solid var(--btn-primary-border, #5ba4fc);
    color: var(--btn-primary-color, #ffffff);
  }

  .filled.primary:hover,
  .filled.primary:active {
    background-color: var(--btn-primary-hover-bg, #0473f8);
    background-position: 0 0;
    color: var(--btn-primary-color, #ffffff);
  }

  .filled.primary:active {
    opacity: var(--btn-primary-active-opacity, 0.75);
  }

  /** Filled Primary Spinner */

  .filled.primary > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(
        var(--btn-primary-bg, #5ba4fc),
        var(--btn-primary-bg, #5ba4fc)
      ),
      conic-gradient(from 0.15turn, white, var(--btn-primary-bg, #5ba4fc));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.primary:hover > .btn-spinner {
    background: linear-gradient(
        var(--btn-primary-hover-bg, #0473f8),
        var(--btn-primary-hover-bg, #0473f8)
      ),
      conic-gradient(from 0.15turn, white, var(--btn-primary-hover-bg, #0473f8));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Outline + Primary
   */

  .outline.primary {
    background: #ffffff;
    border: 1px solid var(--btn-primary-border, #5ba4fc);
    color: var(--btn-primary-border, #5ba4fc);
  }

  .outline.primary:hover,
  .outline.primary:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: var(--btn-primary-hover-bg, #0473f8);
    border: 1px solid var(--btn-primary-hover-bg, #0473f8);
  }

  .outline.primary:active {
    opacity: var(--btn-primary-active-opacity, 0.75);
  }

  /** Outline Primary Spinner */

  .outline.primary > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, var(--btn-primary-border, #5ba4fc));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.primary:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, var(--btn-primary-hover-bg, #0473f8));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Filled + Danger
   */

  .filled.danger {
    background: var(--btn-danger-bg, #fc3d39);
    border: 1px solid var(--btn-danger-border, #fc3d39);
    color: var(--btn-primary-color, #ffffff);
  }

  .filled.danger:hover,
  .filled.danger:active {
    background-color: var(--btn-danger-hover-bg, #e10703);
    background-position: 0 0;
    color: var(--btn-primary-color, #ffffff);
  }

  .filled.danger:active {
    opacity: var(--btn-danger-active-opacity, 0.75);
  }

  /** Filled Danger Spinner */

  .filled.danger > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(
        var(--btn-danger-bg, #fc3d39),
        var(--btn-danger-bg, #fc3d39)
      ),
      conic-gradient(from 0.15turn, white, var(--btn-danger-bg, #fc3d39));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.danger:hover > .btn-spinner {
    background: linear-gradient(
        var(--btn-danger-hover-bg, #e10703),
        var(--btn-danger-hover-bg, #e10703)
      ),
      conic-gradient(from 0.15turn, white, var(--btn-danger-hover-bg, #e10703));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Outline + Danger
   */

  .outline.danger {
    background: #ffffff;
    border: 1px solid var(--btn-danger-border, #fc3d39);
    color: var(--btn-danger-border, #fc3d39);
  }

  .outline.danger:hover,
  .outline.danger:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: var(--btn-danger-hover-bg, #e10703);
    border: 1px solid var(--btn-danger-hover-bg, #e10703);
  }

  .outline.danger:active {
    opacity: var(--btn-danger-active-opacity, 0.75);
  }

  /** Outline Danger Spinner */

  .outline.danger > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, var(--btn-danger-border, #fc3d39));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.danger:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, var(--btn-danger-hover-bg, #e10703));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Filled + Success
   */

  .filled.success {
    background: var(--btn-success-bg, #53d769);
    border: 1px solid var(--btn-success-border, #53d769);
    color: var(--btn-primary-color, #ffffff);
  }

  .filled.success:hover,
  .filled.success:active {
    background-color: var(--btn-success-hover-bg, #26a53b);
    background-position: 0 0;
    color: var(--btn-primary-color, #ffffff);
  }

  .filled.success:active {
    opacity: var(--btn-success-active-opacity, 0.75);
  }

  /** Filled Success Spinner */

  .filled.success > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(
        var(--btn-success-bg, #53d769),
        var(--btn-success-bg, #53d769)
      ),
      conic-gradient(from 0.15turn, white, var(--btn-success-bg, #53d769));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.success:hover > .btn-spinner {
    background: linear-gradient(
        var(--btn-success-hover-bg, #26a53b),
        var(--btn-success-hover-bg, #26a53b)
      ),
      conic-gradient(from 0.15turn, white, var(--btn-success-hover-bg, #26a53b));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Outline + Success
   */

  .outline.success {
    background: #ffffff;
    border: 1px solid var(--btn-success-border, #53d769);
    color: var(--btn-success-border, #53d769);
  }

  .outline.success:hover,
  .outline.success:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: var(--btn-success-hover-bg, #26a53b);
    border: 1px solid var(--btn-success-hover-bg, #26a53b);
  }

  .outline.success:active {
    opacity: var(--btn-success-active-opacity, 0.75);
  }

  /** Outline Success Spinner */

  .outline.success > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, var(--btn-success-border, #53d769));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.success:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, var(--btn-success-hover-bg, #26a53b));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Filled + Neutral
   */

  .filled.neutral {
    background: var(--btn-neutral-bg, #e8e8e8);
    border: 1px solid var(--btn-neutral-border, #000000);
    color: var(--btn-neutral-border, #000000);
  }

  .filled.neutral:hover,
  .filled.neutral:active {
    background-color: var(--btn-neutral-hover-bg, #dcdcdc);
    background-position: 0 0;
    color: var(--btn-neutral-border, #000000);
  }

  .filled.neutral:active {
    opacity: var(--btn-neutral-active-opacity, 0.75);
  }

  /** Filled Neutral Spinner */

  .filled.neutral > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(
        var(--btn-neutral-bg, #e8e8e8),
        var(--btn-neutral-bg, #e8e8e8)
      ),
      conic-gradient(from 0.15turn, black, var(--btn-neutral-bg, #e8e8e8));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.neutral:hover > .btn-spinner {
    background: linear-gradient(
        var(--btn-neutral-hover-bg, #dcdcdc),
        var(--btn-neutral-hover-bg, #dcdcdc)
      ),
      conic-gradient(from 0.15turn, black, var(--btn-neutral-hover-bg, #dcdcdc));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
     * Outline + Neutral
     */

  .outline.neutral {
    background: #ffffff;
    border: 1px solid var(--btn-neutral-border, #000000);
    color: var(--btn-neutral-border, #000000);
  }

  .outline.neutral:hover,
  .outline.neutral:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: var(--btn-neutral-border, #000000);
  }

  .outline.neutral:active {
    opacity: var(--btn-neutral-active-opacity, 0.75);
  }

  /** Outline Neutral Spinner */

  .outline.neutral > .btn-spinner {
    animation: var(--btn-spinner-animation, spin 1s linear infinite);
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, black, #ffffff);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.neutral:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, black, #ffffff);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Animation KeyFrame
   */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
