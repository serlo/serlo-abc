// @ts-ignore
import { Analytics as AnalyticsExpo, PageHit } from 'expo-analytics';
import Sentry from './sentry';

class Analytics {
  private analytics: AnalyticsExpo;

  public init() {
    this.analytics = new AnalyticsExpo('UA-126536605-1');
  }

  public hit(page: PageHit) {
    if (this.analytics) {
      this.analytics.hit(page).catch(Sentry.captureException);
    }
  }
}

export default new Analytics();
