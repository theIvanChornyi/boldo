import Section from './shared/components/section/section.component';
import Header from './modules/header/header.component';
import Hero from './modules/hero/hero.component';
import Services from './modules/services/services.component';
import Connection from './modules/connection/connection.component';
import Feedback from './modules/feedback/feedback.component';
import Support from './modules/support/support.component';
import Blog from './modules/blog/blog.component';
import Subscription from './modules/subscription/subscription.component';
import Footer from './modules/footer/footer.component';
import ErrorBoundary from './shared/components/error-boundary/error-boundary.component';
import { ToastContainer } from 'react-toastify';
import { ROUTES } from './shared/const/routes.const';

import * as css from './app.styles';

function App() {
  return (
    <>
      <Section className={css.heroSection} id={ROUTES.HERO}>
        <Header />
        <Hero />
      </Section>
      <Services />
      <Connection />
      <Section className={css.feedbackSection}>
        <Feedback />
      </Section>
      <Support />
      <ErrorBoundary>
        <Blog />
      </ErrorBoundary>
      <ErrorBoundary>
        <Subscription />
      </ErrorBoundary>
      <Footer />

      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
