<img src="http://ooo.0o0.ooo/2015/12/22/56796c0477718.png" align="right"/>
# node-test-runner 

I hate to installed all my test dependencies into my project directory, now you can install `node-test-runner` globally to test all your node projects.


## Install

```bash
$ npm install -g node-test-runner
```

## Usage

### Karma

Assuming you have a directory structure like:

```bash
├── src
│   ├── css
│   │   ├── class.js
│   │   └── style.js
│   ├── dom
│   │   ├── each.js
│   │   ├── is.js
│   │   ├── isType.js
│   │   └── manipulations.js
│   └── simple.js
└── tests
    ├── css
    │   ├── test-class.js
    │   └── test-style.js
    ├── dom
    │   └── test-each.js
    ├── helpers
    │   └── create-elements.js
    └── test-simple.js
```

Run:

```bash
# run karma test once
$ ntr karma
# run karma in watch mode
$ ntr karma --watch/-w
```

Or you can customize your own directory structure, just check out default [Karma Configs](/conf/karma.conf.js), you can override all of them in `.ntrrc` file, like:

```json
{
  "karma": {
    "files": [
      "spec/**/*Spec.js"
    ]
  }
}
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
