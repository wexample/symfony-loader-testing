import AppTest from './class/AppTest';
import TestTest from "./class/TestTest";
import TestManagerPage from '../../js/Class/TestManagerPage';
import LayoutTest from "./class/LayoutTest";
import RoutingTest from "./class/RoutingTest";
import VariablesTest from "./class/VariablesTest";
import TranslationTest from "./class/TranslationTest";
import AdaptiveRenderingTest from "./class/AdaptiveRenderingTest";
import NoJsTest from "./class/NoJsTest";
import AggregationTest from "./class/AggregationTest";
import ResponsiveTest from "./class/ResponsiveTest";


export default class extends TestManagerPage {
  async pageReady() {
    await this.runTests({
      AdaptiveRenderingTest,
      AggregationTest,
      AppTest,
      LayoutTest,
      NoJsTest,
      ResponsiveTest,
      RoutingTest,
      TestTest,
      TranslationTest,
      VariablesTest
    });

    // Run test without aggregation.
    const location = window.location;
    if (!this.app.layout.vars.enableAggregation && !(new URLSearchParams(location.search)).get('no-test-aggregation')) {
      location.replace(
        `${location.origin}${location.pathname}?test-aggregation=1`
      );
    }
  }
}
