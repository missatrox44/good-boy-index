declare namespace JSX {
  interface IntrinsicElements {
    'wired-button': React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & { elevation?: string | number };
    // 'wired-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    //   elevation?: string | number;
    // };
    // 'wired-input': React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    //   placeholder?: string;
    //   value?: string;
    //   onInput?: (e: any) => void;
    // };
    // 'wired-checkbox': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    //   checked?: boolean;
    //   onClick?: () => void;
    // };
    // 'wired-radio': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    //   name?: string;
    //   checked?: boolean;
    //   onClick?: () => void;
    // };
  }
}

export {};