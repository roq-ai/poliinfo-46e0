import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  category: yup.string().required(),
  status: yup.string().required(),
  author_id: yup.string().nullable().required(),
  editor_id: yup.string().nullable(),
});
