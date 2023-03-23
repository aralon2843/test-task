export interface PaginationProps {
  onNextClickHandler: () => void;
  onPrevClickHandler: () => void;
  productLength?: number;
  page: number;
  limit: number;
}
