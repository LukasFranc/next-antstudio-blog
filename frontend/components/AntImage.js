import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const AntImage = ({ image , className }) => {
    const { alternativeText, width, height } = image.data.attributes;

    return (
        <Image
            width={width}
            height={height}
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
            className={className}
        />
    );
};

export default AntImage;