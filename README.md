# symfony_loader_testing

Version: 0.0.20

A dynamic rendering system for Symfony

## Table of Contents

- [Suite Integration](#suite-integration)
- [Dependencies](#dependencies)
- [Versioning](#versioning)
- [License](#license)
- [Suite Integration](#suite-integration)
- [Suite Signature](#suite-signature)
- [Installation](#installation)
- [Introduction](#introduction)
- [Migration Notes](#migration-notes)

## Integration in the Suite

This package is part of the Wexample Suite — a collection of high-quality, modular tools designed to work seamlessly together across multiple languages and environments.

### Related Packages

The suite includes packages for configuration management, file handling, prompts, and more. Each package can be used independently or as part of the integrated suite.

Visit the [Wexample Suite documentation](https://docs.wexample.com) for the complete package ecosystem.

## Dependencies

- php: >=8.2
- wexample/symfony-loader: >=0.0.21
- wexample/symfony-design-system: >=3.0.0

## Versioning & Compatibility Policy

Wexample packages follow **Semantic Versioning** (SemVer):

- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

We maintain backward compatibility within major versions and provide clear migration guides for breaking changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Free to use in both personal and commercial projects.

## Integration in the Suite

This package is part of the Wexample Suite — a collection of high-quality, modular tools designed to work seamlessly together across multiple languages and environments.

### Related Packages

The suite includes packages for configuration management, file handling, prompts, and more. Each package can be used independently or as part of the integrated suite.

Visit the [Wexample Suite documentation](https://docs.wexample.com) for the complete package ecosystem.

# About us

[Wexample](https://wexample.com) stands as a cornerstone of the digital ecosystem — a collective of seasoned engineers, researchers, and creators driven by a relentless pursuit of technological excellence. More than a media platform, it has grown into a vibrant community where innovation meets craftsmanship, and where every line of code reflects a commitment to clarity, durability, and shared intelligence.

This packages suite embodies this spirit. Trusted by professionals and enthusiasts alike, it delivers a consistent, high-quality foundation for modern development — open, elegant, and battle-tested. Its reputation is built on years of collaboration, refinement, and rigorous attention to detail, making it a natural choice for those who demand both robustness and beauty in their tools.

Wexample cultivates a culture of mastery. Each package, each contribution carries the mark of a community that values precision, ethics, and innovation — a community proud to shape the future of digital craftsmanship.

## Installation

### Enable services + routes

Make sure the bundle loads its services config so controllers are registered (required by `TemplateBasedRoutes`).

Routes import in the app:

```yaml
symfony_loader_testing:
    resource: '@WexampleSymfonyLoaderTestingBundle/Resources/config/routes.yaml'
```

### Front paths for templates

The bundle must implement `LoaderBundleInterface` and expose `getLoaderFrontPaths()` so the `@WexampleSymfonyLoaderTestingBundle` namespace is registered.

# wexample/symfony-loader-testing

Version: 0.0.19

A dynamic rendering system for Symfony

## Table of Contents

- [Installation](#installation)


## Installation

### Enable services + routes

Make sure the bundle loads its services config so controllers are registered (required by `TemplateBasedRoutes`).

Routes import in the app:

```yaml
symfony_loader_testing:
    resource: '@WexampleSymfonyLoaderTestingBundle/Resources/config/routes.yaml'
```

### Front paths for templates

The bundle must implement `LoaderBundleInterface` and expose `getLoaderFrontPaths()` so the `@WexampleSymfonyLoaderTestingBundle` namespace is registered.

## Migration Notes

When upgrading between major versions, refer to the migration guides in the documentation.

Breaking changes are clearly documented with upgrade paths and examples.
