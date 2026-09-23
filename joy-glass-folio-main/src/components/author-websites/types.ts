export interface MiniWebsiteProps {
  onBackToPortfolio: () => void;
  onBookWebsiteService?: () => void;
  viewportMode?: "desktop" | "tablet" | "mobile";
}

export interface SampleModalState {
  isOpen: boolean;
  title: string;
  author: string;
  chapter: string;
  content: string[];
}

export interface BuyModalState {
  isOpen: boolean;
  bookTitle: string;
  author: string;
  coverImage: string;
}
