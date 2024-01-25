import { Container } from "react-bootstrap";
import { ExploreIcon1, ExploreIcon2 } from "../../../assets/svg";
import SectionHeading from "../../../components/sectionHeading";
import styles from "./explore.module.scss";

const ExplorePlatform = () => {
  const BoxesList = [
    {
      image: "/images/home/save.svg",
      heading: "Save and Compare",
      description:
        "We're committed to ensuring you get the most reasonable legal rates available. Tap into our network of top attorneys who offer competitive contingency fees, meaning they only get paid if you win your case. We foster a competitive environment that drives down attorney fees, reducing a typical 33% rate to on average of 27% post settlement.",
      icon: <ExploreIcon1 />,
    },
    {
      image: "/images/home/Compititive.svg",
      heading: "Transparent Legal Aid",
      description:
        "We're dedicated to guiding you transparently through your legal journey, from demystifying the settlement process to seamlessly connecting you with the right attorney. Our commitment to clarity ensures that you're fully informed at every step.",
      icon: <ExploreIcon2 />,
    },
  ];
  return (
    <div className={styles.explore}>
      <Container>
        <SectionHeading heading="Explore our platform" />
        <div className={styles.wrapper}>
          {BoxesList.map((item, index) => (
            <div className={styles.single_row} key={index}>
              <div className={styles.imagePart}>
                <img src={item.image} alt="" />
              </div>
              <div className={styles.contentPart}>
                <div className={styles.icon}>{item.icon}</div>
                <SectionHeading noCenter heading={item.heading} />
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default ExplorePlatform;
