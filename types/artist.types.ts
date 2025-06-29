import {Address} from './common.types';

interface ArtistDetails {
  followers: string[];
  _id: string;
  arts: string[];
}

export interface SingleArtist {
  _id: string;
  avatarImage: string;
  bannerImage: string;
  email: string;
  address: Address;
  followings: [];
  provider: string;
  providerId?: string;
  isVerified: boolean;
  isProfileComplete: boolean;
  isDeactivated: boolean;
  artCategory: [];
  socialHandles: [];
  createdAt: string;
  updatedAt: string;
  role: string;
  artistDetails: ArtistDetails;
  dob: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  userBio: string;
  userName: string;
}
