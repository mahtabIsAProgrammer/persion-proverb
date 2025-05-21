import { enqueueSnackbar, type OptionsObject } from "notistack";

interface PropsSimple {
  title: string;
  timer?: number;
  onClickOk?: TEmptyFunctionVoid;
  onClickCancel?: TEmptyFunctionVoid;
}
type TSimpleAlert = (props: PropsSimple) => void;

const defaultAlert = (): OptionsObject<TAny> => ({
  autoHideDuration: 1000 * 3,
  preventDuplicate: true,
  anchorOrigin: {
    horizontal: "left",
    vertical: "bottom",
  },
});

export const errorAlert: TSimpleAlert = ({ title, timer }) => {
  const defaultAlertObj = defaultAlert();
  const { autoHideDuration } = defaultAlertObj;
  enqueueSnackbar(title, {
    variant: "error",
    ...defaultAlertObj,
    autoHideDuration: timer ?? autoHideDuration,
    timer: timer ?? autoHideDuration,
  });
};

export const successAlert: TSimpleAlert = ({ title, timer }) => {
  const defaultAlertObj = defaultAlert();
  const { autoHideDuration } = defaultAlertObj;
  enqueueSnackbar(title, {
    variant: "success",
    ...defaultAlertObj,
    autoHideDuration: timer ?? autoHideDuration,
    timer: timer ?? autoHideDuration,
  });
  console.log("hi");
};
