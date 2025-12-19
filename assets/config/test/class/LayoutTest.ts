import AbstractTest from "./AbstractTest";
import { domCreateHtmlDocumentFromHtml } from "@wexample/js-helpers/Helper/Dom";

export default class LayoutTest extends AbstractTest {
  public getTestMethods() {
    return [
      this.testNotEmpty
    ];
  }

  private testNotEmpty() {
    this.fetchAdaptiveHtmlPage().then((html: string) => {
      let elHtml = domCreateHtmlDocumentFromHtml(html);
      const head = elHtml.querySelector('head')!;
      const titleEl = head.querySelector('title')!;
      const metaDescription = head.querySelector('meta[name=description]') as HTMLMetaElement | null;
      const metaViewport = head.querySelector('meta[name=viewport]') as HTMLMetaElement | null;
      const canonical = head.querySelector('link[rel=canonical]') as HTMLLinkElement | null;

      this.assertEquals(
        titleEl.innerText,
        'ADAPTIVE_DOCUMENT_TITLE'
      );

      this.assertEquals(
        metaDescription?.content,
        'DOCUMENT_META_DESCRIPTION'
      );

      this.assertEquals(
        metaViewport?.content,
        'width=device-width, initial-scale=1'
      );

      const routePath = this.pathCoreTestAdaptive;

      this.assertTrue(
        !!canonical && canonical.href.endsWith(routePath),
        `Canonical ends with route path (${routePath}), got "${canonical?.href}"`
      );
    })
  }
}
