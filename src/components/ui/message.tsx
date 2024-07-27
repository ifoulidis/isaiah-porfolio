type MessageProps = {
  variant: string;
  children?: string;
};

export const Message = ({ variant, children }: MessageProps) => {
  // Include a variant for a different appearance
  return <div className={`custom-alert c-alert-${variant}`}>{children}</div>;
};
