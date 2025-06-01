// Base types
type MediaFile = {
  thumbnail?: string;
  file?: string;
  fileId?: string;
};

type Logo = MediaFile;

// Page Builder Types
type PageSection = {
  id: string;
  type:
    | 'header-banner'
    | 'content-section'
    | 'grid-layout'
    | 'image-text'
    | 'bottom-media';
  order: number;
  data: any;
};

type HeaderBannerSection = {
  image?: MediaFile;
  title?: string;
  subtitle?: string;
};

type ContentSection = {
  title?: string;
  content?: string;
};

type GridItem = {
  id: string;
  image?: MediaFile;
  title?: string;
  description?: string;
};

type GridLayoutSection = {
  title?: string;
  columns?: number;
  items?: GridItem[];
};

type ImageTextSection = {
  image?: MediaFile;
  title?: string;
  content?: string;
  imagePosition?: 'left' | 'right';
};

type BottomMediaSection = {
  media?: MediaFile;
  type?: 'image' | 'video';
  title?: string;
  description?: string;
};

type CustomPage = {
  _id?: string;
  title: string;
  slug: string;
  sections: PageSection[];
  isPublished: boolean;
  createdAt?: string;
  updatedAt?: string;
};
