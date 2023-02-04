import BrandIcon from "../icons/BrandIcon";
import DetailedRecordsIcons from "../icons/DetailedRecordsIcons";
import FullyCustomizable from "../icons/FullyCustomizable";
export interface ICardsDB {
  icon: JSX.Element;
  title: string;
  description: string;
}
export const CardsDB: ICardsDB[] = [
  {
    icon: <BrandIcon />,
    title: "Brand Recognition",
    description:
      "  Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: <DetailedRecordsIcons />,
    title: "Detailed Records",
    description:
      "  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: <FullyCustomizable />,
    title: "Fully Customizable",
    description:
      "  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
