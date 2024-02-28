# OTP Page Component Documentation

## Overview

The OTP (One-Time Password) Page component is a React component built with Next.js. It is designed for capturing and validating a user's phone number and initiating the process of requesting an OTP for verification.

## Usage

To use the OTPPage component, import it into your React application and include it in your page or route.

```javascript
import OTPPage from "@/path/to/OTPPage";
```

## Dependencies

-  `@heroicons/react`: Icon library used for rendering icons.
-  `react`: Core React library.
-  `next/link`: Next.js component for handling client-side navigation.
-  `next/navigation`: Next.js hook for handling navigation.
-  `@/components/Components/AuthPageComponents/ShadowBox`: Custom component for styling with a shadowed box.
-  `@/components/Components/AuthPageComponents/MiniComponents`: Custom mini components for headings and footers.
-  `@/components/Components/Common/Button`: Custom button components for styling.
-  `@/components/Components/AuthPageComponents/Input`: Custom input component for phone number input.
-  `@/helpers/functions/phoneNumberValidator`: Helper function for validating phone numbers.
-  `@/components/Components/Loaders/ButtonLoader`: Custom loader component for buttons.

## State

-  `status`: Object containing information about the form status, including the mode (e.g., "error") and a message.
-  `isRequestingOtp`: Boolean flag indicating whether the OTP request is in progress.
-  `router`: Next.js router instance for navigation.

## Methods

### `handleSubmit(e)`

Handles the form submission. Validates the phone number, requests a new OTP if the number is valid, and updates the form status accordingly.

## JSX Structure

-  `ShadowBox`: Styled container for the OTP page.
-  `Heading`: Custom component for rendering page headings.
-  `form`: Form element with an `onSubmit` handler set to `handleSubmit`.
   -  `AuthInput`: Custom input component for capturing the mobile number.
   -  `ElevatedButtonControlled`: Custom button component for triggering the OTP request.
-  `Footer`: Custom component for rendering page footer.
-  `Link`: Hidden link to the "/verify" route for client-side navigation.

## Example Usage

```javascript
<OTPPage />
```

This code snippet includes the OTPPage component in your React application.

---

Feel free to adjust the documentation based on your specific needs or add more details as necessary.
