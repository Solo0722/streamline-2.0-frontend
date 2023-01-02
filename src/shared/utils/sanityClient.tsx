import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: "4v53lxkh",
  dataset: "production",
  apiVersion: "2022-12-30",
  useCdn: true,
  token:
    "sknVIcfBEK0KRw1yYe4VCCtyGlYVH38X6lsjV1s9n8MdYQkens1YmaaQSrYwx8glc8Ymg1ULE8wsBQF1eNqHRBk8ClBWygpZOuE1TDSqfaLqRJ3NvmGeYG8VQL0PvbilC9x4Dltm89ptGon5X0FMTpfqeInt8Ts0voMmikKOVaoV6Knj5Waa",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
