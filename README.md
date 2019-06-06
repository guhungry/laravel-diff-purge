# Laravel diff PURGE

This repository exposes an untouched Laravel app generated with the CLI
`composer create-project laravel/laravel LaravelDiffApp`. Each new Laravel release causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template.

## Diff table

| From->To | D   | I   | F   | F   | S   |     | =   | =   |     | F   | U   | N   |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5.4.0    | X   |     |     |     |     |     |     |     |     |     |     |     |

## To see the full table containing all releases click [HERE](https://github.com/guhungry/laravel-diff-purge/)
