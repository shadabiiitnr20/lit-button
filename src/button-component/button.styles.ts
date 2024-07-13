import { css } from 'lit';

export default css`
  .btn {
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
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

  ::slotted([slot='icon-left']) {
    margin-right: 0.25rem;
  }

  ::slotted([slot='icon-right']) {
    margin-left: 0.25rem;
  }

  /**
   * Size MD
   */

  .md {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1rem;
    min-height: 2.5rem;
    min-width: 8rem;
    padding: 0.75rem 1rem;
  }

  /**
   * Size SM
   */

  .sm {
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1rem;
    min-height: 1.5rem;
    min-width: 6rem;
    padding: 0.25rem 0.5rem;
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
    opacity: 0.5;
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
    opacity: 0.5;
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
    opacity: 0.5;
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
    opacity: 0.5;
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
    opacity: 0.5;
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
    opacity: 0.5;
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
    opacity: 0.5;
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
    opacity: 0.5;
  }
`;
