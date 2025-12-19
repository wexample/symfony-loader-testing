import TestManagerPage from '../../js/Class/TestManagerPage';
import TestTest from "./class/TestTest";

export default class extends TestManagerPage {
  async pageReady() {
    await this.runTests({
      TestTest,
    });
  }
}
