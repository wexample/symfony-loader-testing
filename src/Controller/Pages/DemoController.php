<?php

namespace Wexample\SymfonyLoaderTesting\Controller\Pages;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Wexample\SymfonyHelpers\Helper\VariableHelper;
use Wexample\SymfonyLoader\Controller\AbstractPagesController;
use Wexample\SymfonyLoader\Rendering\RenderPass;
use Wexample\SymfonyLoader\Service\Usage\FontsAssetUsageService;
use Wexample\SymfonyLoaderTesting\Traits\SymfonyLoaderTestingBundleClassTrait;

#[Route(path: '_loader/demo/', name: '_loader_demo_')]
final class DemoController extends AbstractPagesController
{
    use SymfonyLoaderTestingBundleClassTrait;

    final public const ROUTE_INDEX = VariableHelper::INDEX;

    private bool $useJs = true;

    #[Route(path: '', name: self::ROUTE_INDEX)]
    final public function index(): Response
    {
        return $this->renderPage(
            self::ROUTE_INDEX
        );
    }

    protected function configureRenderPass(
        RenderPass $renderPass
    ): RenderPass {
        $renderPass->setUseJs($this->useJs);

        $renderPass->setUsage(
            FontsAssetUsageService::getName(),
            'demo'
        );

        return $renderPass;
    }
}
