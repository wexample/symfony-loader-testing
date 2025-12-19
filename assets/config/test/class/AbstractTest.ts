import UnitTest from '../../../js/Class/UnitTest';

export default abstract class AbstractTest extends UnitTest {
  protected pathCoreTestAdaptive: string;

  public init() {
    this.pathCoreTestAdaptive = this.app.services.routing.path('_loader_testing_test_adaptive');
  }

  protected async fetchAdaptiveHtmlPage(path: string = this.pathCoreTestAdaptive): Promise<string> {
    return fetch(path)
      .then((response: Response) => {
        this.assertTrue(response.ok, `Fetch succeed of ${path}`);

        return response.text();
      });
  }
}
