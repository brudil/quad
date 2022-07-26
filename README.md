oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g quad
$ quad COMMAND
running command...
$ quad (--version)
quad/0.0.0 darwin-arm64 node-v17.6.0
$ quad --help [COMMAND]
USAGE
  $ quad COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`quad auth KEY`](#quad-auth-key)
* [`quad bulk`](#quad-bulk)
* [`quad help [COMMAND]`](#quad-help-command)
* [`quad open`](#quad-open)
* [`quad plugins`](#quad-plugins)
* [`quad plugins:install PLUGIN...`](#quad-pluginsinstall-plugin)
* [`quad plugins:inspect PLUGIN...`](#quad-pluginsinspect-plugin)
* [`quad plugins:install PLUGIN...`](#quad-pluginsinstall-plugin-1)
* [`quad plugins:link PLUGIN`](#quad-pluginslink-plugin)
* [`quad plugins:uninstall PLUGIN...`](#quad-pluginsuninstall-plugin)
* [`quad plugins:uninstall PLUGIN...`](#quad-pluginsuninstall-plugin-1)
* [`quad plugins:uninstall PLUGIN...`](#quad-pluginsuninstall-plugin-2)
* [`quad plugins update`](#quad-plugins-update)
* [`quad start ID`](#quad-start-id)
* [`quad transfer KEY`](#quad-transfer-key)

## `quad auth KEY`

Set your token

```
USAGE
  $ quad auth [KEY]

ARGUMENTS
  KEY  Your API key

DESCRIPTION
  Set your token

EXAMPLES
  $ quad auth 843h98rhhohwe90hjf
```

_See code: [dist/commands/auth.ts](https://github.com/zeigo/hello-world/blob/v0.0.0/dist/commands/auth.ts)_

## `quad bulk`

Bulk import issues

```
USAGE
  $ quad bulk -f <value> [-t <value>]

FLAGS
  -f, --file=<value>  (required)
  -t, --team=<value>

DESCRIPTION
  Bulk import issues

EXAMPLES
  $ quad bulk -f issues.txt --team platform
```

_See code: [dist/commands/bulk.ts](https://github.com/zeigo/hello-world/blob/v0.0.0/dist/commands/bulk.ts)_

## `quad help [COMMAND]`

Display help for quad.

```
USAGE
  $ quad help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for quad.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `quad open`

Opens the current branch issue in Linear

```
USAGE
  $ quad open

DESCRIPTION
  Opens the current branch issue in Linear

EXAMPLES
  $ quad open
```

_See code: [dist/commands/open.ts](https://github.com/zeigo/hello-world/blob/v0.0.0/dist/commands/open.ts)_

## `quad plugins`

List installed plugins.

```
USAGE
  $ quad plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ quad plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `quad plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ quad plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ quad plugins add

EXAMPLES
  $ quad plugins:install myplugin 

  $ quad plugins:install https://github.com/someuser/someplugin

  $ quad plugins:install someuser/someplugin
```

## `quad plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ quad plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ quad plugins:inspect myplugin
```

## `quad plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ quad plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ quad plugins add

EXAMPLES
  $ quad plugins:install myplugin 

  $ quad plugins:install https://github.com/someuser/someplugin

  $ quad plugins:install someuser/someplugin
```

## `quad plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ quad plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ quad plugins:link myplugin
```

## `quad plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ quad plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ quad plugins unlink
  $ quad plugins remove
```

## `quad plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ quad plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ quad plugins unlink
  $ quad plugins remove
```

## `quad plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ quad plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ quad plugins unlink
  $ quad plugins remove
```

## `quad plugins update`

Update installed plugins.

```
USAGE
  $ quad plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `quad start ID`

Switches to working on a new issue

```
USAGE
  $ quad start [ID]

DESCRIPTION
  Switches to working on a new issue

EXAMPLES
  $ quad start ISS-832
```

_See code: [dist/commands/start.ts](https://github.com/zeigo/hello-world/blob/v0.0.0/dist/commands/start.ts)_

## `quad transfer KEY`

Duplicate issues from one team to another

```
USAGE
  $ quad transfer [KEY]

ARGUMENTS
  KEY  Your API key

DESCRIPTION
  Duplicate issues from one team to another

EXAMPLES
  $ quad transfer --team platform RD-482 RD-324 RD-382
```

_See code: [dist/commands/transfer.ts](https://github.com/zeigo/hello-world/blob/v0.0.0/dist/commands/transfer.ts)_
<!-- commandsstop -->
