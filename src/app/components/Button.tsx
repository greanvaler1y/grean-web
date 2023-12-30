import clsx from "clsx";

type Variant = "outlined" | "link" | "contained" | "none";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};
export function Button(props: Props): React.ReactElement {
  const { variant = "contained", type = "button", className, ...rest } = props;

  const classes: Record<Variant, string> = {
    contained: "bg-black hover:bg-stone-800 text-white rounded-[32px]",
    link: "hover:underline text-black p-0 rounded-0",
    outlined:
      "text-bk-black border-[1px] border-bk-black hover:bg-bk-light-gray rounded-[32px]",
    none: "rounded-md",
  };

  return (
    <button
      type={type}
      className={clsx(
        "flex items-center justify-center gap-2",
        classes[variant],
        className,
      )}
      {...rest}
    />
  );
}
