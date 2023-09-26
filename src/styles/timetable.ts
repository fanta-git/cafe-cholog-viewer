import { LinkProps } from "@chakra-ui/next-js";
import { BoxProps, CenterProps, GridProps, ImageProps, StackProps, StyleProps } from "@chakra-ui/react";

export const wrapperStack: StackProps = {
  width: "100%",
  alignItems: "flex-start",
  fontSize: "12px",
};

export const thumbnailWrapperBox: BoxProps = {
  h: "60px",
  w: "60px",
  overflow: "hidden",
  borderRadius: "20%",
  flexShrink: 0,
};

export const thumbnailImage: ImageProps = {
  width: 130,
  height: 100,
  w: "100%",
  h: "100%",
  objectFit: "contain",
  transform: "scale(1.8)",
  transformOrigin: "center",
};

export const musicInfoGrid: GridProps = {
  w: "100%",
  bgColor: "rgba(0, 0, 0, 0.8)",
  color: "white",
  p: "8px 15px 5px",
  gridTemplateColumns: "58px 5fr 1fr 1fr 20px",
  gridTemplateRows: "22px repeat(2, auto)",
  gridTemplateAreas: `
    "time reas reas reas sour"
    "titl titl titl titl sour"
    "arti arti rota fave sour"
  `
};

export const timestampCenter: CenterProps = {
  h: "18px",
  w: "58px",
  color: "#ffffff",
  bg: "#666666",
};

export const reason: StyleProps = {
  display: "flex",
  columnGap: "5px",
  padding: "0 10px",
  alignItems: "center",
};

export const reason_icon: StyleProps = {
  width: 22,
  height: 22,
  borderRadius: "50%",
};

export const reason_text: StyleProps = {
  display: "inline-block",
  fontSize: "12px",
};

export const reason_text_link: StyleProps = {
  textDecoration: "underline",
  fontWeight: "bold",
};

export const reason_text_link_hover: StyleProps = {
  textDecoration: "none",
};

export const reason_text_bold: StyleProps = {
  fontWeight: "bold",
};

export const reason_user_name: StyleProps = {
  color: "#ffef00",
};

export const reason_special_list: StyleProps = {
  color: "cyan",
};

export const reason_priority_list: StyleProps = {
  color: "cyan",
};

export const reason_fav: StyleProps = {
  color: "#ff33aa",
};

export const reason_playlist: StyleProps = {
  color: "#10d300",
};

export const title: Partial<LinkProps> = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.2em",
};

export const artist: StyleProps = {
  display: "flex",
  alignItems: "center",
};

export const artist_span: StyleProps = {
  color: "#AAA",
};

export const artist_span_hover: StyleProps = {
  textDecoration: "underline",
  cursor: "pointer",
  color: "white",
};

export const rotate: StyleProps = {
  display: "inline-flex",
  alignItems: "center",
  columnGap: "5px",
};

export const new_fav: StyleProps = {
  display: "inline-flex",
  alignItems: "center",
  columnGap: "5px",
};

export const invisible: StyleProps = {
  display: "none",
};

export const rotate_b: StyleProps = {
  color: "#ffef00",
  fontSize: "12px",
};

export const new_fav_icon: StyleProps = {
  width: "18px",
  height: "18px",
};

export const new_fav_icon_i: StyleProps = {
  position: "absolute",
  color: "#ff33aa",
};

export const in_icon: StyleProps = {
  fontSize: "18px",
  transform: "scale(.5)",
};

export const out_icon: StyleProps = {
  fontSize: "18px",
  opacity: ".5",
};

export const source: StyleProps = {
  margin: "auto",
  zIndex: 1,
};

export const source_material_icons: StyleProps = {
  fontSize: "20px",
  color: "#AAA",
};

export const source_material_icons_hover: StyleProps = {
  color: "#FFF",
};
