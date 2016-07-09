library-boilerplate
===================

**This is work in progress, don't use yet**

An *opinionated* setup I plan to use for my React component libraries. Forked
and updated from gaearon/library-boilerplate.

It has CommonJS and UMD builds via Babel and Webpack, ESLint, and Mocha.
It also has React-friendly examples folder with library code mapped to the
sources.

If you use this, make sure to grep for “library-boilerplate” and replace every
occurrence.

See `package.json` in the root and the example folder for the list of the
available commands.

## TODO

  - [ ] Add css modules support (and allow library users to inject class names)
  - [ ] Move some of the scripts to a Makefile
  - [ ] Add test coverage tasks
  - [ ] Add script to grep and change occurrences of library-boilerplate[-author|etc]
  - [ ] Use in a real project
