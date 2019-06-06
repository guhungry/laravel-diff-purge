#!/usr/bin/env node

const table = require('markdown-table')
const R = require('ramda')
const semver = require('semver')
const getStdin = require('get-stdin')


const RepoUrl='https://github.com/guhungry/laravel-diff-purge'


const generateTable = async () => {
    const isBig = R.contains('--big', process.argv)
    const input = await getStdin()
    const releases = R.dropLast(1, R.split('\n')(input))

    // words or phrases of length 12
    const comments = [
        'this is cool',
        'purge time!!',
        'i love diffs',
        'diffs == fun',
    ]

    const diffTable = [
        ['From->To', ...comments[Math.floor(Math.random() * comments.length)] .toUpperCase() .split('')],
        ...R.map(fromRelease => {
            const length = releases.length
            return [
                fromRelease,
                ...R.pipe(
                    R.map(idx => {
                        const toRelease = releases[idx]
                        if (semver.eq(fromRelease, toRelease)) {
                            return 'X'
                        }
                        if (semver.gt(fromRelease, toRelease)) {
                            return '-'
                        }
                        return isBig
                        ? `[->${toRelease}](${RepoUrl}/compare/release/${fromRelease}..release/${toRelease}) [core](https://github.com/facebook/react-native/compare/v${fromRelease}...v${toRelease})`
                        : `[->${toRelease}](${RepoUrl}/compare/release/${fromRelease}..release/${toRelease})`
                    }),
                )(R.range(0, length)),
            ]
        }, releases),
    ]

    console.log(table(diffTable))
}


(async () => {
    await generateTable()
})()
