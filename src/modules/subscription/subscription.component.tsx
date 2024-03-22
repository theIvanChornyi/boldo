import { useFormik, FormikProvider } from 'formik';

import Input from '../../shared/components/input/input.component';
import Button from '../../shared/components/button/button.component';
import * as css from './subscription.styles';
import { initialValues } from './subscription.const';
import { IForm } from './subscription.types';

const Subscription: React.FC = () => {
  const formik = useFormik<IForm>({
    initialValues,
    onSubmit: ({ email }) => {},
  });

  return (
    <section className={css.section}>
      <h2>An enterprise template to ramp up your company website</h2>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Input />
          <Button type="submit">Start now</Button>
        </form>
      </FormikProvider>
    </section>
  );
};

export default Subscription;
