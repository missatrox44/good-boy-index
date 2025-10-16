'use client';
import { useEffect } from "react";

// Wrapper components for wired-elements to avoid TypeScript issues

interface WiredButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  elevation?: string | number;
}

export const WiredButton = ({
  children,
  elevation = '2',
  ...props
}: WiredButtonProps) => {
  useEffect(() => {
    // Only run in the browser, and only register once
    if (typeof window !== 'undefined' && !customElements.get('wired-button')) {
      // Dynamic import so SSR never evaluates the module
      import('wired-elements').catch(() => {
        // (optional) swallow/handle if needed
      });
    }
  }, []);

  const WiredButtonElement = 'wired-button' as unknown as React.ElementType;

  return (
    <WiredButtonElement elevation={elevation} {...props}>
      {children}
    </WiredButtonElement>
  );
};

// interface WiredCardProps extends React.HTMLAttributes<HTMLElement> {
//   elevation?: string | number;
// }

// export const WiredCard = ({ children, elevation = "2", ...props }: WiredCardProps) => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('wired-elements');
//     }
//   }, []);

//   const WiredCardElement = 'wired-card' as any;

//   return (
//     <WiredCardElement elevation={elevation} {...props}>
//       {children}
//     </WiredCardElement>
//   );
// };

// interface WiredInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   onInput?: (e: any) => void;
// }

// export const WiredInput = ({ onInput, ...props }: WiredInputProps) => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('wired-elements');
//     }
//   }, []);

//   const WiredInputElement = 'wired-input' as any;

//   return (
//     <WiredInputElement onInput={onInput} {...props} />
//   );
// };

// interface WiredCheckboxProps extends React.HTMLAttributes<HTMLElement> {
//   checked?: boolean;
// }

// export const WiredCheckbox = ({ checked, ...props }: WiredCheckboxProps) => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('wired-elements');
//     }
//   }, []);

//   const WiredCheckboxElement = 'wired-checkbox' as any;

//   return (
//     <WiredCheckboxElement checked={checked} {...props} />
//   );
// };

// interface WiredRadioProps extends React.HTMLAttributes<HTMLElement> {
//   name?: string;
//   checked?: boolean;
// }

// export const WiredRadio = ({ name, checked, ...props }: WiredRadioProps) => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('wired-elements');
//     }
//   }, []);

//   const WiredRadioElement = 'wired-radio' as any;

//   return (
//     <WiredRadioElement name={name} checked={checked} {...props} />
//   );
// };