// @ts-ignore
import * as SentryExpo from 'sentry-expo';

class Sentry {
  private sentry: SentryExpo;

  public init() {
    this.sentry = SentryExpo;
    this.sentry
      .config(
        'https://eada474aeba348a9aaad570be730e8e0:bb2a0776afe64f409a9edb752ca2d92d@sentry.io/253336'
      )
      .install();
  }

  public captureException(err: Error) {
    if (this.sentry) {
      this.sentry.captureException(err);
    }
  }
}

export default new Sentry();
