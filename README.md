# Lit Button

This is a custom button component, made using Lit. This project is almost completed but few extra things are left -

To run the application locally -

1. Fork and clone the repo.
2. Navigate to root folder and run `npm i`.
3. Run command `npm run dev`.

![Lit Button with Different Variants](<Screenshot 2024-07-15 at 7.49.34 PM.png>)

- Write Test Cases & Test it thoroughly in local in a react application
- Write thorough documentation, mentioning about the exposed properties, how to add icons, how to use loader and disabled property from the application, and exposed CSS variables. (Few documentation work has been done below)
- Publish the component to npm, setup a CI/CD pipleline to automate the publishing task.

### Lit Button Component Properties

The Button component is highly customizable through a set of properties. Below is a detailed description of each property available for customization:

## `label`

- **Type**: `String`
- **Default**: `"Click Me!"`
- **Description**: Sets the button's display text.

## `variant`

- **Type**: `String`
- **Allowed Values**: `"filled"`, `"outline"`
- **Default**: `"filled"`
- **Description**: Determines the button's style variant. The `"filled"` variant provides a solid background, while the `"outline"` variant provides a bordered style without a background fill.

## `type`

- **Type**: `String`
- **Allowed Values**: `"primary"`, `"danger"`, `"success"`, `"neutral"`
- **Default**: `"primary"`
- **Description**: Sets the button's type, which influences its color scheme. Each type represents a different semantic meaning (e.g., `"primary"` for primary actions, `"danger"` for destructive actions, etc.).

## `size`

- **Type**: `String`
- **Allowed Values**: `"sm"`, `"md"`
- **Default**: `"md"`
- **Description**: Determines the size of the button. `"sm"` for small and `"md"` for medium.

## `iconPosition`

- **Type**: `String`
- **Allowed Values**: `"left"`, `"right"`
- **Default**: `"left"`
- **Description**: Specifies the position of the icon (if present) relative to the button's label. It can be positioned to the `"left"` or `"right"` of the text.

## `disabled`

- **Type**: `Boolean`
- **Default**: `false`
- **Description**: If set to `true`, disables the button, preventing users from interacting with it.

## `loader`

- **Type**: `Boolean`
- **Default**: `false`
- **Description**: When `true`, displays a loading indicator on the button, typically used to indicate an asynchronous operation is in progress.

These properties allow for extensive customization of the Button component to fit various UI needs.

### Using FontAwesome Icons with Lit-Button

This guide explains how to incorporate FontAwesome icons into the `lit-button` component to enhance its visual appeal and user experience.

#### Prerequisites

Ensure you have FontAwesome included in your project. You can add it by including the following link in the `<head>` section of your HTML file:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>
```

```html
<lit-button variant="filled" type="danger" size="md">
  <span slot="icon" style="display: contents">
    <i class="fa fa-trash"></i>
  </span>
</lit-button>
```
