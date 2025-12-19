import UnitTest from './UnitTest';
import Page from "@wexample/symfony-loader/js/Class/Page";

export default class TestManagerPage extends Page {
  async runTests(tests) {
    let testDefinition: any;
    let method: Function;

    for (testDefinition of Object.values(tests)) {
      let test = new testDefinition(this.app) as UnitTest;

      test.init();

      for (method of test.getTestMethods()) {
        await method.apply(test);
      }
    }
  }
}
