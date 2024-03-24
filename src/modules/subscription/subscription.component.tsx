import { useFormik, FormikProvider, FormikHelpers } from 'formik';

import Input from '../../shared/components/input/input.component';
import Button from '../../shared/components/button/button.component';
import * as css from './subscription.styles';
import { initialValues } from './subscription.const';
import { IForm } from './subscription.types';
import { validationSchema } from './subscription.validation';
import { SIZE, VARIANT } from '../../shared/components/button/button.types';
import { useSubscribe } from './useSubscribe.hook';
import Loader from '../../shared/components/loader/loader.component';
import { ROUTES } from '../../shared/const/routes.const';

const Subscription: React.FC = () => {
  const { handleSubscribe, isLoading } = useSubscribe();

  const onSubmit = ({ email }: IForm, { resetForm }: FormikHelpers<IForm>) => {
    handleSubscribe(email);
    resetForm();
  };

  const formik = useFormik<IForm>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className={css.section} id={ROUTES.SUBSCRIBE}>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>
          An enterprise template to ramp <br /> up your company website
        </h2>
        <FormikProvider value={formik}>
          <form className={css.form} onSubmit={formik.handleSubmit}>
            <Input placeholder="Your email address" name="email" type="email" />
            <Button
              disabled={isLoading}
              variant={isLoading ? VARIANT.DISABLED : VARIANT.DEFAULT}
              size={SIZE.LARGE}
              type="submit"
            >
              Start now
            </Button>
            {isLoading && <Loader />}
          </form>
        </FormikProvider>
      </div>
    </section>
  );
};

export default Subscription;
