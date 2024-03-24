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

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Connection />
      <Feedback />
      <Support />
      <ErrorBoundary>
        <Blog />
      </ErrorBoundary>
      <ErrorBoundary>
        <Subscription />
      </ErrorBoundary>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
