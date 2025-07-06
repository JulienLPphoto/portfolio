import styles from "../styles/PageTitle.module.scss";
import clsx from "clsx";

interface PageTitleProps {
  text: string;
}

function PageTitle({text}: PageTitleProps) {
  return (
    <div className={clsx(styles.cPageTitle, "c-page-title")}>
      <h1 className="h3">
        {text}
      </h1>
    </div>
  )
}

export default PageTitle
