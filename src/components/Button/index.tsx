import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
  onClick: VoidFunction;
  link?: boolean;
};
const Button = ({ children, onClick, link }: Props) => {
  if (link)
    return (
      <a className={styles.link} onClick={onClick} href="dkdkd">
        {children}
      </a>
    );

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
