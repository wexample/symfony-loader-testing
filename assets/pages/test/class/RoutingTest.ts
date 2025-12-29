import AbstractTest from "./AbstractTest";

export default class RoutingTest extends AbstractTest {
  public getTestMethods() {
    return [
      this.testNotEmpty
    ];
  }

  private testNotEmpty() {
    this.assertTrue(
      Object.values(this.app.services.routing.getRoutes()).length > 0,
      'Some routes are registered'
    )
  }
}
