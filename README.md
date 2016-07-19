wpscan
============

`wpscan` [Node.js module](https://www.npmjs.com/package/wpscan) allows you to quickly scan a WordPress site looking for known vulnerabilities, security issues and misconfigurations. `wpscan` helps you secure and maintain your WordPress against hackers.

Beginner friendly. Easy to install. Supports custom rules. **Work in progress**, see [todos](TODO.md) and [changelog](CHANGELOG.md).

[![Dependency Status](https://david-dm.org/sergejmueller/wpscan.svg)](https://david-dm.org/sergejmueller/wpscan)
[![Code Climate](https://codeclimate.com/github/sergejmueller/wpscan/badges/gpa.svg)](https://codeclimate.com/github/sergejmueller/wpscan)
[![Build Status](https://travis-ci.org/sergejmueller/wpscan.svg?branch=master)](https://travis-ci.org/sergejmueller/wpscan)
[![Known Vulnerabilities](https://snyk.io/test/github/sergejmueller/wpscan/badge.svg)](https://snyk.io/test/github/sergejmueller/wpscan)


Install
-----

```
[sudo] npm install --global wpscan
```


Usage
-----

```bash
wpscan <url> [url] [options]
```

`url` → WordPress site URL (e.g. `https://ma.tt`)

Multiple URLs can be separated by spaces.


Options
-----
Option | Shortcut | Description
------ | -------- | -----------
`--help` | `-h` | Outputs supplied help text.
`--silent` | `-s` | Disables success and info messages. Displays warnings only.
`--rules-dir` | `-r` | Loads additional rules from a directory (see below).
`--bulk-file` | `-b` | Reads additional WordPress site URLs from a text file (see below).
`--user-agent` | `-u` | Defines a custom `User-Agent` string. Default is `wpscan`.


Quick examples
-----

```bash
wpscan https://ma.tt
wpscan https://ma.tt --silent
wpscan https://ma.tt --rules-dir ~/path/to/custom/rules
wpscan https://ma.tt --bulk-file ~/path/to/sources.txt
wpscan https://ma.tt --user-agent "Netscape Gold"
```


Default rules
-----
`wpscan` has a few rules that are enabled by default:

- **Check sensitive WordPress/Apache/Dot files for their availability**
  - `/wp-config.php`
  - `/wp-admin/maint/repair.php`
  - `/.htaccess`
  - `/.htpasswd`
  - `/.ssh`
  - `/.npmrc`
  - `/.gitconfig`
  - `/config.json`
  - `/config.gypi`
  - `/wp-config-sample.php`
  - `/wp-content/debug.log`

- **Scan WordPress login page for security mistakes**
  - Basic access `authentication`
  - `HTTPS` protocol usage


Custom rules
-----
The power of `wpscan` is the flexibility: You can expand the tool functionality by building their own rules. The option `--rules-dir` allows loading of user-defined rules from a custom directory.

- The directory path
  - can be absolute or relative to the `wpscan` folder
- The custom rules
  - must be stored as `.js` files
  - need to be structured as follows:

```javascript
exports.fire = function( data ) {
  // Play with data
}
```

`wpscan` will run every custom rule file. The file naming does not matter. Feel free to create your own rules, enjoy!

**Get inspired**
- [example custom rules](example/rules)
- [wpscan default rules](lib/rules)


Bulk scan
-----
Multiple WordPress site URLs can be imported from a single file. This is a simple text file with one URL per line.

```bash
wpscan -b ~/path/to/sources.txt
```


Use, don't abuse!
-----
