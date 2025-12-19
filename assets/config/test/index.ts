import AppTest from './class/AppTest';
import TestTest from "./class/TestTest";
import TestManagerPage from '../../js/Class/TestManagerPage';


export default class extends TestManagerPage {
  async pageReady() {
    await this.runTests({
      AppTest,
      TestTest,
    });
  }
}
