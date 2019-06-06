# Laravel diff PURGE

This repository exposes an untouched Laravel app generated with the CLI
`composer create-project laravel/laravel LaravelDiffApp`. Each new Laravel release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template.

## Diff table

| From->To | R                                                                                                 | N                                                                                                 |                                                                                                   | C                                                                                               | O                                                                                               | R                                                                                                 | E                                                                                                 |                                                                                                 | T                                                                                                 | E                                                                                                 | A                                                                                                 | M   |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --- |
| 5.6.33   | X                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.6.21   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.6.33) | X                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.6.12   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.6.21) | X                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.6.7    | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.6.33)  | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.6.21)  | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.6.12)  | X                                                                                               | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.6.0    | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.33)  | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.21)  | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.12)  | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.7)  | X                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.5.28   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.0) | X                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.5.22   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.0) | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.5.28) | X                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.5.0    | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.6.33)  | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.6.21)  | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.6.12)  | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.6.7)  | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.6.0)  | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.5.28)  | [->5.5.22](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.0..release/5.5.22)  | X                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.4.30   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.6.0) | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.5.28) | [->5.5.22](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.5.22) | [->5.5.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.30..release/5.5.0) | X                                                                                                 | -                                                                                                 | -                                                                                                 | -   |
| 5.4.23   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.6.0) | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.5.28) | [->5.5.22](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.5.22) | [->5.5.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.5.0) | [->5.4.30](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.23..release/5.4.30) | X                                                                                                 | -                                                                                                 | -   |
| 5.4.21   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.6.0) | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.5.28) | [->5.5.22](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.5.22) | [->5.5.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.5.0) | [->5.4.30](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.4.30) | [->5.4.23](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.21..release/5.4.23) | X                                                                                                 | -   |
| 5.4.19   | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.6.0) | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.5.28) | [->5.5.22](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.5.22) | [->5.5.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.5.0) | [->5.4.30](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.4.30) | [->5.4.23](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.4.23) | [->5.4.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.4.19..release/5.4.21) | X   |

## To see the full table containing all releases click [HERE](https://github.com/guhungry/laravel-diff-purge/)
