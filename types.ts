export interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
}

export interface Theme {
  colors: Colors;
  spacing: Spacing;
}

export type ThemeType = "light" | "dark";

export type DetailsButtonVariant = "primary" | "secondary";

export interface ProjectType {
  title: string;
  description: string;
  screenshot?: string;
  github?: string;
  link?: string;
  details?: string;
  variant: "primary" | "secondary";
  alt?: string;
}

export interface Pos {
  x: number;
  y: number;
}
