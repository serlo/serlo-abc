// @ts-ignore
import SentryExpo from 'sentry-expo';

class Sentry {
  private initialized = false;

  public init() {
    this.initialized = true;
    SentryExpo.config(
      'https://eada474aeba348a9aaad570be730e8e0:bb2a0776afe64f409a9edb752ca2d92d@sentry.io/253336'
    ).install();
  }

  public captureException(err: Error) {
    if (this.initialized) {
      SentryExpo.captureException(err);
    }
  }
}

export default new Sentry();
