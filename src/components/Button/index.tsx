import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
  onClick: VoidFunction;
  link?: string;
  color?: string;
  id: string;
};
const Button = ({ children, color, onClick, link, id }: Props) => {
  if (link)
    return (
      <a
        className={styles.link}
        onClick={onClick}
        id={id}
        color={color}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );

  return (
    <button className={styles.button} color={color} id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
