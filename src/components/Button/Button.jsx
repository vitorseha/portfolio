import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  icon,
  type = 'button',
  disabled,
  id,
}) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClass}
      disabled={disabled}
      id={id}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
