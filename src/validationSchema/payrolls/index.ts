import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  pay_period_start: yup.date().required(),
  pay_period_end: yup.date().required(),
  gross_pay: yup.number().integer().required(),
  net_pay: yup.number().integer().required(),
  deductions: yup.number().integer().required(),
  employee_id: yup.string().nullable().required(),
});
