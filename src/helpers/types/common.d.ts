interface ICustomTitle {
  title?: string;
  setting?: {
    color?: string;
    iconColor?: string;
  };
}
interface ICustomLabel {
  label: string;
  color?: string;
  required?: boolean;
  size?: TStandardSize;
}

interface IProverbCard {
  id: string;
  meaning?: string;
  germanText: string;
  isLoading: boolean;
  persionText: string;
  englishText: string;
  isDetailPage?: boolean;
  isRandomPage?: boolean;
  categories: string | string[];
  refetch?: TAny;
}
