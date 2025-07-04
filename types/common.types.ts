import { SingleArtist } from "./artist.types";

export interface LabelValue {
  name: string;
  value: string;
}
export interface LabelValueNew {
  _id?: string;
  label: string;
  value: string;
}

export interface Address {
  country: string;
  street: string;
  city: string;
  state: string;
  zip: number;
}

export interface Comment {
  _id: string;
  comment: string;
  author: SingleArtist;
  replies: Comment[];
  createdAt: string;
  updatedAt: string;
}

export enum ActorRole {
  ARTIST = "ARTIST",
  ART_GEEK = "ARTGEEK",
}

export interface TPagination {
  totalResults: number;
  totalPages: number;
  offset: number;
  limit: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
}
