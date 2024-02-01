import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, CheckCircleFilledIcon } from "../../assets/svg";
import Header from "../../common/header";
import PageLayout from "../pageLayout/pageLayout";
import styles from "./postCaseLayout.module.scss";

interface IProps {
  activeStep: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  state?: any;
}

const topTabs = [
  { title: "Client and Accident Details" },
  { title: "Injuries and Damage" },
  { title: "Other Party's Details" },
];
const PostCaseLayout = ({ activeStep, children, state }: IProps) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!state && activeStep !== 1 && activeStep !== 4) {
      navigate(-1);
    }
  }, [state, activeStep]);

  return (
    <PageLayout>
      <div className={`${styles.post_page} ${activeStep === 4 ? "p-0" : ""}`}>
        <div className={styles.page_wrapper}>
          <div className="d-lg-none">
            <Header />
          </div>
          <div className={styles.horizontal_tabs_wrap}>
            <div className={styles.horizontal_tabs}>
              {topTabs.map((item, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${styles.single_tab} ${
                      index < activeStep ? styles.active : ""
                    }`}
                    key={index}
                  >
                    <span>
                      {index + 1 < activeStep ? (
                        <CheckCircleFilledIcon />
                      ) : (
                        `${index + 1}.`
                      )}
                    </span>
                    {item.title}
                  </span>
                  {topTabs.length > index + 1 ? (
                    <span className={styles.arrowIcon}>
                      <ArrowRightIcon />
                    </span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
          {children}
        </div>
      </div>
    </PageLayout>
  );
};

export default PostCaseLayout;
