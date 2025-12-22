<?php

namespace Wexample\SymfonyLoaderTesting\Controller\Config;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Wexample\SymfonyLoaderTesting\Traits\SymfonyLoaderTestingBundleClassTrait;
use Wexample\SymfonyRouting\Attribute\TemplateBasedRoutes;
use Wexample\SymfonyHelpers\Helper\VariableHelper;

#[Route(path: DemoController::CONTROLLER_BASE_ROUTE . '/test/', name: DemoController::CONTROLLER_BASE_ROUTE . '_test_')]
#[TemplateBasedRoutes]
final class TestController extends AbstractLoaderTestingShowcaseController
{
    // Trait exposes the bundle class so the route loader knows where to fetch the templates.
    use SymfonyLoaderTestingBundleClassTrait;

    final public const ROUTE_ADAPTIVE = 'adaptive';
    final public const ROUTE_ERROR_MISSING_VIEW = 'error_missing_view';
    final public const ROUTE_INDEX = VariableHelper::INDEX;
    final public const ROUTE_VIEW = VariableHelper::VIEW;

    #[Route(path: self::ROUTE_ADAPTIVE, name: self::ROUTE_ADAPTIVE, options: self::ROUTE_OPTIONS_ONLY_EXPOSE)]
    final public function adaptive(Request $request): Response
    {
        return $this->renderPage(
            self::ROUTE_ADAPTIVE,
        );
    }

    #[Route(path: self::ROUTE_VIEW, name: self::ROUTE_VIEW, options: self::ROUTE_OPTIONS_ONLY_EXPOSE)]
    public function view(): Response
    {
        return $this->renderPage(
            self::ROUTE_VIEW,
            bundle: self::getBundleClassName()
        );
    }

    #[Route(path: 'error-missing-view', name: self::ROUTE_ERROR_MISSING_VIEW, options: self::ROUTE_OPTIONS_ONLY_EXPOSE)]
    public function errorMissingVue(): Response
    {
        return $this->renderPage(
            self::ROUTE_ERROR_MISSING_VIEW
        );
    }
}
