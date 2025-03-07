export type FileStatus = "removed" | "added" | "modified" | "renamed" | "copied" | "changed" | "unchanged";

export interface FileInfo {
  map: string;
  name: string;
  filepath: string
}

export interface ImageJson {
  name: string;
  src: string;
  full: string;
  medium: string;
  thumbnail: string;
  webp_full: string;
  webp_medium: string;
  webp_thumbnail: string;
}

export enum ImageFormat {
  JPG = "jpg",
  WEBP = "webp",
}

export enum ImageVariant {
  Full = "full",
  Medium = "medium",
  Thumbnail = "thumbnail",
}

export type ImageDimensions = Readonly<[number, number | undefined]>;

export type DispatchInputs = null | {
  maps?: string;
};
