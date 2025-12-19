import UnitTest from './UnitTest';
import Page from "@wexample/symfony-loader/js/Class/Page";

type TestCtor = new (app: any) => UnitTest;

export default class TestManagerPage extends Page {
  async runTests(tests: Record<string, TestCtor>): Promise<void> {
    for (const testDefinition of Object.values(tests)) {
      const test = new testDefinition(this.app);

      test.init();

      for (const method of test.getTestMethods()) {
        await method.apply(test);
      }
    }
  }
}
