type ImageOrientation =
  | "standard-landscape"
  | "ultra-wide-landscape"
  | "standard-portrait"
  | "ultra-tall-portrait"
  | "square";

export function getImageOrientation(
  width: number,
  height: number
): ImageOrientation {
  if (width === height) return "square";

  const ratio = width / height;

  if (width > height) {
    return ratio >= 2 ? "ultra-wide-landscape" : "standard-landscape";
  } else {
    return 1 / ratio >= 2 ? "ultra-tall-portrait" : "standard-portrait";
  }
}
