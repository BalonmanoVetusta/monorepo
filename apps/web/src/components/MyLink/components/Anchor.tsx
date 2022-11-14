export function Anchor({ children, ...props }) {
  props.rel = props.rel ?? "";
  if (!props.rel.includes("noopener")) props.rel += " noopener ";

  if (!props.rel.includes("noreferrer")) props.rel += " noreferrer ";

  return <a {...props}>{children}</a>;
}
