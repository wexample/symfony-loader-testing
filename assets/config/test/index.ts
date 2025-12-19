import AppTest from './class/AppTest';
import TestTest from "./class/TestTest";
import TestManagerPage from '../../js/Class/TestManagerPage';
import LayoutTest from "./class/LayoutTest";
import RoutingTest from "./class/RoutingTest";
import VariablesTest from "./class/VariablesTest";
import TranslationTest from "./class/TranslationTest";


export default class extends TestManagerPage {
  async pageReady() {
    await this.runTests({
      AppTest,
      LayoutTest,
      RoutingTest,
      TestTest,
      TranslationTest,
      VariablesTest
    });
  }
}
