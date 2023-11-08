import { Image, ImageProps } from "@chakra-ui/react";
import bullEyes from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEyes, alt: "exceptional", boxSize: "35px" },
  };

  return rating < 3 ? null : <Image {...emojiMap[rating]}></Image>;
};

export default Emoji;
