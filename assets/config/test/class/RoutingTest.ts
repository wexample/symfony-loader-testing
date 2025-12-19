import AbstractTest from "./AbstractTest";

export default class RoutingTest extends AbstractTest {
  public getTestMethods() {
    return [
      this.testRoutesNotEmpty,
      this.testAdaptiveRouteExists,
    ];
  }

  private testRoutesNotEmpty() {
    const routes = this.app.services.routing.getRoutes();

    this.assertTrue(
      Object.keys(routes).length > 0,
      'Some routes are registered'
    );
  }

  private testAdaptiveRouteExists() {
    const routeName = '_loader_testing_test_adaptive';
    const routing = this.app.services.routing;

    this.assertTrue(
      routing.hasRoute(routeName),
      'Adaptive route is registered'
    );

    const path = routing.path(routeName);

    this.assertTrue(
      typeof path === 'string' && path.length > 1,
      `Adaptive route resolves to "${path}"`
    );
  }
}
