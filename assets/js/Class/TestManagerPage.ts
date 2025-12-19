import UnitTest from './UnitTest';
import Page from "@wexample/symfony-loader/js/Class/Page";

type TestCtor = new (app: any) => UnitTest;

export default class TestManagerPage extends Page {
  async runTests(tests: Record<string, TestCtor>): Promise<{
    passed: number;
    failed: number;
    results: { name: string; status: 'passed' | 'failed'; error?: any }[];
  }> {
    const results: { name: string; status: 'passed' | 'failed'; error?: any }[] = [];
    let passed = 0;
    let failed = 0;

    for (const testDefinition of Object.values(tests)) {
      const test = new testDefinition(this.app);
      test.init();

      for (const method of test.getTestMethods()) {
        const name = method.name || 'anonymous';

        try {
          await method.apply(test);
          results.push({ name, status: 'passed' });
          passed++;
        } catch (error) {
          console.error('Test failed:', name, error);
          results.push({ name, status: 'failed', error });
          failed++;
        }
      }
    }

    return { passed, failed, results };
  }
}
