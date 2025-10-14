import { urlFor } from "@/lib/sanity";

export const getImageUrl = (image, options = {}) => {
  if (!image) {
    return options.fallback || "/assets/Hero.png";
  }

  if (typeof image === "string") {
    return image;
  }

  if (image.asset || image._ref) {
    let sanityImage = urlFor(image);
    return sanityImage.url();
  }

  return options.fallback || "/assets/Hero.png";
};

export const getBackgroundImageUrl = (image, options = {}) => {
  return getImageUrl(image, options);
};
