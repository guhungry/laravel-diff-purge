# Laravel diff PURGE

This repository exposes an untouched Laravel app generated with the CLI
`composer create-project laravel/laravel LaravelDiffApp`. Each new Laravel release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template.

## Diff table

| From->To | I                                                                                                 |                                                                                                   | L                                                                                                 | O                                                                                                 | V                                                                                               | E                                                                                                 |                                                                                                   | D                                                                                                 | I                                                                                               | F                                                                                               | F                                                                                                 | S   |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --- |
| 5.7.28   | X                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.7.19   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.19..release/5.7.28) | X                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.7.15   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.15..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.15..release/5.7.19) | X                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.7.13   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.13..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.13..release/5.7.19) | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.13..release/5.7.15) | X                                                                                                 | -                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.7.0    | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.0..release/5.7.28)  | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.0..release/5.7.19)  | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.0..release/5.7.15)  | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.7.0..release/5.7.13)  | X                                                                                               | -                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.6.33   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.33..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.33..release/5.7.19) | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.33..release/5.7.15) | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.33..release/5.7.13) | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.33..release/5.7.0) | X                                                                                                 | -                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.6.21   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.7.19) | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.7.15) | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.7.13) | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.7.0) | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.21..release/5.6.33) | X                                                                                                 | -                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.6.12   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.7.19) | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.7.15) | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.7.13) | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.7.0) | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.12..release/5.6.21) | X                                                                                                 | -                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.6.7    | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.7.28)  | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.7.19)  | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.7.15)  | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.7.13)  | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.7.0)  | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.6.33)  | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.6.21)  | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.7..release/5.6.12)  | X                                                                                               | -                                                                                               | -                                                                                                 | -   |
| 5.6.0    | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.7.28)  | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.7.19)  | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.7.15)  | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.7.13)  | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.7.0)  | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.33)  | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.21)  | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.12)  | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.6.0..release/5.6.7)  | X                                                                                               | -                                                                                                 | -   |
| 5.5.28   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.7.19) | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.7.15) | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.7.13) | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.7.0) | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.28..release/5.6.0) | X                                                                                                 | -   |
| 5.5.22   | [->5.7.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.7.28) | [->5.7.19](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.7.19) | [->5.7.15](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.7.15) | [->5.7.13](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.7.13) | [->5.7.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.7.0) | [->5.6.33](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.33) | [->5.6.21](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.21) | [->5.6.12](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.12) | [->5.6.7](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.7) | [->5.6.0](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.6.0) | [->5.5.28](https://github.com/guhungry/laravel-diff-purge/compare/release/5.5.22..release/5.5.28) | X   |

## To see the full table containing all releases click [HERE](https://github.com/guhungry/laravel-diff-purge/)
