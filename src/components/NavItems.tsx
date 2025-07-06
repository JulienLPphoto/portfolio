import styles from "../styles/NavItems.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { NavItemList } from "../utils/commonData";

interface NavItemsProps {
  extraClassName?: string;
}

function NavItems({extraClassName}: NavItemsProps) {
  return (
    <div className={clsx(styles.cNavItems, "c-nav-items", extraClassName)}>
      {NavItemList.map((link, linkIdx) => (
        <Link
          key={linkIdx}
          to={link.url}
          title={`View ${link.label}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
};

export default NavItems