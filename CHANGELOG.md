# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-06-15

### Removed

- The `level` property. It's not clear we need mutable loggers at this time, we should
not impose that on implementations. The log level can be passed at construction time
and remains the same afterwards.

## [0.1.0] - 2025-06-15

### Added

- First logger interface implementation with support for log levels: trace, debug,
info, warn and error.

[0.2.0]: https://github.com/infra-blocks/ts-logger-interface/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/infra-blocks/ts-logger-interface/releases/tag/v0.1.0
