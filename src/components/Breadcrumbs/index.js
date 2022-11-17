import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../css/learn/learn.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Breadcrumbs({link,title}) {
  return (
    <>
      <nav
        aria-label="breadcrumbs"
        itemscope=""
        itemtype="https://schema.org/BreadcrumbList"
        className={styles.breadcrumbs}>
        <ul class="breadcrumbs breadcrumbs--lg" style={{ padding: "5px 10px" }}>
          <a
            className={clsx(styles.breadcrumbsLink, "breabreadcrumbs__link")}
            href="/">
            Home
          </a>
          <span style={{ padding: 0 }}>/</span>
          <a
            className={clsx(
              styles.breadcrumbsLink,
              "breabreadcrumbs__link",
              "breadcrumbs__item--active"
            )}
            href="/">
            Learn
          </a>
          <span style={{ padding: 0 }}>/</span>
          <a
            className={clsx(styles.breadcrumbsLink, "breabreadcrumbs__link")}
            href="/">
            Modules
          </a>
          <span style={{ padding: 0 }}>/</span>
          <a
            className={clsx(
              styles.breadcrumbsLink,
              styles.breadcrumbsLinkActive
            )}
            href={`/learn/modules/${link}`}>
            {title}
          </a>
        </ul>
      </nav>
    </>
  );
}
