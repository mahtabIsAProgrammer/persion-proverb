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
  persionText: string;
  englishText: string;
  isDetailPage?: boolean;
  isRandomPage?: boolean;
  categories: string | string[];
  refetch?: TAny;
  onEdit?: TEmptyFunctionVoid;
  onDelete?: TEmptyFunctionVoid;
}
interface IProverbForm {
  open: boolean;
  onClose: TEmptyFunctionVoid;
  title: string;
  initialValues: {
    persionText: string;
    englishText: string;
    germanText: string;
    meaning: string;
    categories: string[];
  };
  validationFunctions: () => object;
  onSubmit: (values: Proverbs) => void;
  categoriesData: string[];
}
