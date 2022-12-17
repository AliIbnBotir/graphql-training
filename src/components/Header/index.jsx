import cls from "./header.module.scss";

export default function Header({ children }) {
  return <div className={cls.header}>{children}</div>;
}
