import { css } from 'lit';

export default css`
  .btn {
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
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

  ::slotted([slot='icon-left']) {
    margin-right: 0.5rem;
  }

  ::slotted([slot='icon-right']) {
    margin-left: 0.5rem;
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
    margin-left: 0.5rem;
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
    margin-left: 0.5rem;
    border-radius: 50%;
    border: 1.5px solid transparent;
  }

  /**
   * Filled + Primary
   */

  .filled.primary {
    background: #5ba4fc;
    border: 1px solid #5ba4fc;
    color: #ffffff;
  }

  .filled.primary:hover,
  .filled.primary:active {
    background-color: #0473f8;
    background-position: 0 0;
    color: #ffffff;
  }

  .filled.primary:active {
    opacity: 0.75;
  }

  /** Filled Primary Spinner */

  .filled.primary > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#5ba4fc, #5ba4fc),
      conic-gradient(from 0.15turn, white, #5ba4fc);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.primary:hover > .btn-spinner {
    background: linear-gradient(#0473f8, #0473f8),
      conic-gradient(from 0.15turn, white, #0473f8);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Outline + Primary
   */

  .outline.primary {
    background: #ffffff;
    border: 1px solid #5ba4fc;
    color: #5ba4fc;
  }

  .outline.primary:hover,
  .outline.primary:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: #0473f8;
    border: 1px solid #0473f8;
  }

  .outline.primary:active {
    opacity: 0.75;
  }

  /** Outline Primary Spinner */

  .outline.primary > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, #5ba4fc);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.primary:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, #0473f8);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Filled + Danger
   */

  .filled.danger {
    background: #fc3d39;
    border: 1px solid #fc3d39;
    color: #ffffff;
  }

  .filled.danger:hover,
  .filled.danger:active {
    background-color: #e10703;
    background-position: 0 0;
    color: #ffffff;
  }

  .filled.danger:active {
    opacity: 0.75;
  }

  /** Filled Danger Spinner */

  .filled.danger > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#fc3d39, #fc3d39),
      conic-gradient(from 0.15turn, white, #fc3d39);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.danger:hover > .btn-spinner {
    background: linear-gradient(#e10703, #e10703),
      conic-gradient(from 0.15turn, white, #e10703);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Outline + Danger
   */

  .outline.danger {
    background: #ffffff;
    border: 1px solid #fc3d39;
    color: #fc3d39;
  }

  .outline.danger:hover,
  .outline.danger:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: #e10703;
    border: 1px solid #e10703;
  }

  .outline.danger:active {
    opacity: 0.75;
  }

  /** Outline Danger Spinner */

  .outline.danger > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, #fc3d39);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.danger:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, #e10703);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Filled + Success
   */

  .filled.success {
    background: #53d769;
    border: 1px solid #53d769;
    color: #ffffff;
  }

  .filled.success:hover,
  .filled.success:active {
    background-color: #26a53b;
    background-position: 0 0;
    color: #ffffff;
  }

  .filled.success:active {
    opacity: 0.75;
  }

  /** Filled Success Spinner */

  .filled.success > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#53d769, #53d769),
      conic-gradient(from 0.15turn, white, #53d769);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.success:hover > .btn-spinner {
    background: linear-gradient(#26a53b, #26a53b),
      conic-gradient(from 0.15turn, white, #26a53b);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Outline + Success
   */

  .outline.success {
    background: #ffffff;
    border: 1px solid #53d769;
    color: #53d769;
  }

  .outline.success:hover,
  .outline.success:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: #26a53b;
    border: 1px solid #26a53b;
  }

  .outline.success:active {
    opacity: 0.75;
  }

  /** Outline Success Spinner */

  .outline.success > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, #53d769);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .outline.success:hover > .btn-spinner {
    background: linear-gradient(#ffffff, #ffffff),
      conic-gradient(from 0.15turn, white, #26a53b);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
   * Filled + Neutral
   */

  .filled.neutral {
    background: #e8e8e8;
    border: 1px solid #000000;
    color: #000000;
  }

  .filled.neutral:hover,
  .filled.neutral:active {
    background-color: #dcdcdc;
    background-position: 0 0;
    color: #000000;
  }

  .filled.neutral:active {
    opacity: 0.75;
  }

  /** Filled Neutral Spinner */

  .filled.neutral > .btn-spinner {
    animation: spin 1s linear infinite;
    background: linear-gradient(#e8e8e8, #e8e8e8),
      conic-gradient(from 0.15turn, black, #e8e8e8);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .filled.neutral:hover > .btn-spinner {
    background: linear-gradient(#dcdcdc, #dcdcdc),
      conic-gradient(from 0.15turn, black, #dcdcdc);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  /**
     * Outline + Neutral
     */

  .outline.neutral {
    background: #ffffff;
    border: 1px solid #000000;
    color: #000000;
  }

  .outline.neutral:hover,
  .outline.neutral:active {
    background-color: #ffffff;
    background-position: 0 0;
    color: #000000;
  }

  .outline.neutral:active {
    opacity: 0.75;
  }

  /** Outline Neutral Spinner */

  .outline.neutral > .btn-spinner {
    animation: spin 1s linear infinite;
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
