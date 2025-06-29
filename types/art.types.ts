import {SingleArtist} from './artist.types';
import {Comment, LabelValueNew} from './common.types';

interface ExhibitionsAndAwardsItem {
  eventName: string;
  description: string;
  date: Date;
  _id: string;
}

export enum ShippingType {
  'MANUAL' = 'MANUAL',
  'PLATFORM' = 'PLATFORM',
}

export enum PriceCurrency {
  'USD' = 'USD',
  'EUR' = 'EUR',
  'GBP' = 'GBP',
  'NPR' = 'NPR',
}
export enum PriceType {
  'FIXED' = 'FIXED',
  'NEGOTIABLE' = 'NEGOTIABLE',
}

export enum ArtActions {
  'ART_GET' = 'art-get',
  'ART_POST' = 'art-post',
  'ART_PATCH' = 'art-patch',
  'ART_DELETE' = 'art-delete',
}

interface TimeFrame {
  startDate: string;
  endDate: string;
}
interface Images {
  featured: string;
  samples: string[];
}

interface SubCategoryItem {
  label: string;
  value: string;
  _id: string;
}

interface StyleItem {
  label: string;
  value: string;
  _id: string;
}

interface MaterialItem {
  materialTopic: string;
  materialValue: string;
}

interface ShippingInfo {
  shippingType: ShippingType;
  shippingDetails?: object;
}

export interface SingleArt {
  timeFrame: TimeFrame;
  images: Images;
  shippingInfo: ShippingInfo;
  _id: string;
  title: string;
  description: string;
  category: string[];
  subCategory: SubCategoryItem[];
  style: StyleItem[];
  theme: string;
  size: string;
  material: MaterialItem[];
  priceCurrency: PriceCurrency;
  price: number;
  priceType: PriceType;
  location: string;
  keywords: LabelValueNew[];
  isHighlighted: boolean;
  exhibitionsAndAwards: ExhibitionsAndAwardsItem[];
  isFramed: boolean;
  collections: string;
  likeCount: number;
  likedBy: string[];
  comments: Comment[];
  commentCount: number;
  shareCount: number;
  artist: SingleArtist;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostArtSchemaBE {
  title: string;
  description: string;
  timeFrame: string;
  featuredImage: File;
  sampleImages: File[];
  category: string;
  subCategory: string;
  style: string;
  theme: string;
  size: string;
  material: string;
  priceCurrency: PriceCurrency;
  price: number;
  location: string;
  keywords: string;
  priceType: PriceType;
  isHighlighted: boolean;
  exhibitionsAndAwards: string;
  isFramed: boolean;
  collections: string;
  shippingInfo: string;
}
