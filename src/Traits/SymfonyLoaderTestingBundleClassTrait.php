<?php

namespace Wexample\SymfonyLoaderTesting\Traits;

use Wexample\SymfonyHelpers\Traits\BundleClassTrait;
use Wexample\SymfonyLoaderTesting\WexampleSymfonyLoaderTestingBundle;

trait SymfonyLoaderTestingBundleClassTrait
{
    use BundleClassTrait;

    public static function getBundleClassName(): string
    {
        return WexampleSymfonyLoaderTestingBundle::class;
    }
}
