import AppTest from './class/AppTest';
import TestTest from "./class/TestTest";
import TestManagerPage from '../../js/Class/TestManagerPage';
import LayoutTest from "./class/LayoutTest";


export default class extends TestManagerPage {
  async pageReady() {
    await this.runTests({
      AppTest,
      LayoutTest,
      TestTest,
    });
  }
}
