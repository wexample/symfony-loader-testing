<?php

namespace Wexample\SymfonyLoaderTesting\Controller\Config;

use Wexample\SymfonyLoader\Controller\AbstractPagesController;

abstract class AbstractLoaderTestingShowcaseController extends AbstractPagesController
{
    final public const CONTROLLER_BASE_ROUTE = '_loader';
}
