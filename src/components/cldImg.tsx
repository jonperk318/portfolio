import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

const cld = new Cloudinary({
  cloud: {
    cloudName: "difdjam1a",
  },
});

const CldImage = ({ publicId }) => {
  const myImage = cld
    .image(publicId)
    .delivery(format("auto"))
    .delivery(quality("auto"))
    .roundCorners(byRadius(60));
  return (
    <AdvancedImage
      cldImg={myImage}
      plugins={[lazyload(), responsive(), placeholder({ mode: "blur" })]}
    />
  );
};

export default CldImage;
