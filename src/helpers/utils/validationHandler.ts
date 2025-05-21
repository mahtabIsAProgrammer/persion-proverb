import { object, string } from "yup";

export const validationProverb = () => {
  return object().shape({
    persionText: string().trim().required("the input is required"),
    englishText: string().trim().required("the input is required"),
    germanText: string().trim().required("the input is required"),
    meaning: string().trim().required("the input is required"),
  });
};
