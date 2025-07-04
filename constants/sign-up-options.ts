import { ArtistLogo, ArtLogo } from "@/assets/icons";
import { SvgProps } from "react-native-svg";
import * as T from "@/types";
import { FC } from "react";

export interface TSignInOptions {
  label: string;
  logo: FC<SvgProps>;
  value: T.Common.ActorRole;
}

export const SignInOptions: TSignInOptions[] = [
  {
    label: "Artist",
    logo: ArtLogo,
    value: T.Common.ActorRole.ARTIST,
  },
  {
    label: "Art Geek",
    logo: ArtistLogo,
    value: T.Common.ActorRole.ART_GEEK,
  },
];
