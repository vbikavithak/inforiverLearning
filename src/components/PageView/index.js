import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../css/learn/learn.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Breadcrumbs({ link, title, description, chapters }) {
  return (
    <>
      <div className={clsx(styles.page, "item shadow--md")}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img
            alt="Generic Trophy Image"
            src={useBaseUrl("/img/generic-trophy.svg")}
          />
          <div style={{ padding: "2rem" }}>
            <div style={{ textAlign: "left" }}>
              <h1>{title}</h1>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{description}</p>
              <div>
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="module-a/Export and Import">
                  <div>Start</div>
                </Link>
              </div>
            </div>
            <div>
              <div style={{ padding: "2.5rem 0" }}>
                {chapters.map((chapter) => (
                  <div className={styles.unitColumn}>
                    <a
                      href={`module-a/${chapter.chapter}`}
                      key={chapter.chapter}>
                      {chapter.chapter}
                    </a>
                    <span>2 mins</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
