<?php

namespace Wexample\SymfonyLoaderTesting\Controller\Config;

use Symfony\Component\Routing\Annotation\Route;
use Wexample\SymfonyLoader\Traits\SymfonyLoaderBundleClassTrait;
use Wexample\SymfonyRouting\Attribute\TemplateBasedRoutes;
use Wexample\SymfonyHelpers\Helper\VariableHelper;

#[Route(path: DemoController::CONTROLLER_BASE_ROUTE . '/demo/', name: DemoController::CONTROLLER_BASE_ROUTE . '_demo_')]
#[TemplateBasedRoutes]
final class DemoController extends AbstractLoaderTestingShowcaseController
{
    // Trait exposes the bundle class so the route loader knows where to fetch the templates.
    use SymfonyLoaderBundleClassTrait;

    final public const ROUTE_INDEX = VariableHelper::INDEX;
}
