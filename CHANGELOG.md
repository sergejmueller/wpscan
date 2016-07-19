### v0.4.3 (2016-07-19)

##### Changes
* Core: Remove ES6 source code for Node.js v0.10 support
* Readme: Text changes


### v0.4.2 (2016-07-18)

##### New
* Option: `--help` outputs supplied help text
* Core: Add timeout to initial app requests
* Test: Add `wpscan --help` case
* Readme: Add `Default rules` part
* Readme: Add `--help` option

##### Changes
* Core: Refactor app singletons
* Example: Rename `./examples` → `./example`
* Example: Rename `sources.txt` → `sources/list.txt`
* package.json: Set `repository` → `sergejmueller/wpscan`
* package.json: Set `engines.node` → `>=4`
* package.json: Set `files` → `["lib","index.js","config.json"]`


### v0.4.1 (2016-07-15)

##### Changes
* Rule: Sensitive dotfiles availability check
* Core: Remove `prepend` helper function
* Readme: Text changes


### v0.4.0 (2016-07-14)

##### New
* Option: `--bulk-file` reads sources/URLs from a file
* Core: Add helper function `makeAbsolute`
* Test: Bulk file tests
* Rule: Availability check for `wp-config-sample.php`
* Examples: Add bulk file `sources.txt`

##### Changes
* Core: Refactor `index.js`
* Core: Export config data into `config.json`
* Core: Set the default User-Agent to `wpscan`
* Core: Split error and status code warnings
* Readme: Text changes


### v0.3.0 (2016-07-04)

##### New
* Rule: Scan WordPress login page for vulnerabilities
* Option: Custom `User-Agent` string via `--user-agent`

##### Changes
* Test: Replace `chai` testing library by `must`
* Core: Rename `data` object key `silent` to `silentMode`
* Readme: Text changes
* Travis: Add `node_js` v4


### v0.2.2 (2016-07-03)

##### New
* Test: Add new mocha tests
* Test: Add comments to all mocha tests

##### Changes
* ESLint: Bump to v3.0.0
* Core: Rename app lib `message` to `log`
* Core: Rename `message.success` to `log.ok`
* Core: Remove function `message.die` and replace by `log.warn`


### v0.2.1 (2016-07-01)

##### Changes
* Core: Add `normalizeURL` function with `validUrl` check
* Readme: Text changes


### v0.2.0 (2016-06-30)

##### New
* Test: Add multiple mocha tests
* Core: URI autocomplete for CLI commands (`ma.tt → http://ma.tt`)
* Core: Extended functionality for CLI arguments handling
* Core: Shortcuts for CLI options (`-s` → `--silent` & `-r` → `--rules-dir`)

##### Changes
* Travis: Remove `node_js` versions <= 4
* ESLint: Add `mocha: true` to `env` arguments
* Codeclimate: Add `test` folder to `exclude_paths`


### v0.1.2 (2016-06-27)

##### New
* Readme: Add badges ;)

##### Changes
* Readme: Reorganize text blocks
* ESLint: Embed path to `.eslintrc`
* Codeclimate: Set `mass_threshold` to `50`


### v0.1.1 (2016-06-27)

##### New
* Examples: Add example file for custom rules

##### Changes
* Readme: Add more example snippets
* Readme: Add description for custom rules
* ESLint: Check all JS files
* ESLint: Add `sourceType: module` property
* Core: Replace `var` by `const` when it's necessary
* Core: Add `silent` state to `message.(success|notice)` calls
* Core: Better error handling for rules loading


### v0.1.0 (2016-06-26)

##### New
* Core functionality
* Option: Silent mode
* Option: Load additional rules from a custom directory
* Rule: System files exists
