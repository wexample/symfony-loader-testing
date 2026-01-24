import AggregationTest from './class/AggregationTest.js';
import AdaptiveRenderingTest from './class/AdaptiveRenderingTest.js';
import AppTest from './class/AppTest.js';
import HelperTest from './class/HelperTest.js';
import IconTest from './class/IconTest.js';
import ModalInModalTest from './class/ModalInModalTest.js';
import NoJsTest from './class/NoJsTest.js';
import OverlayTest from './class/OverlayTest.js';
import ResponsiveTest from './class/ResponsiveTest.js';
import RoutingTest from './class/RoutingTest.js';
import TestTest from './class/TestTest.js';
import TranslationTest from './class/TranslationTest.js';
import UsageTest from './class/UsageTest.js';
import VariablesTest from './class/VariablesTest.js';
import TestManagerPage from '../../js/Class/TestManagerPage.js';
import LayoutTest from "./class/LayoutTest.js";
import VueTest from "./class/VueTest.js";


export default class extends TestManagerPage {
  async pageReady() {
    await this.runTests({
      AggregationTest,
      AdaptiveRenderingTest,
      AppTest,
      IconTest,
      HelperTest,
      LayoutTest,
      ModalInModalTest,
      NoJsTest,
      OverlayTest,
      RoutingTest,
      ResponsiveTest,
      TestTest,
      TranslationTest,
      UsageTest,
      VariablesTest,
      VueTest,
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
