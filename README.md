# node-test-runner

I hate to installed all my test dependencies into my project directory, now you can install `node-test-runner` globally to test all your node projects.


## Install

```bash
$ npm install -g node-test-runner
```

## Usage

### Karma

```bash
# run karma test once
$ ntr karma
# run karma in watch mode
$ ntr karma --watch/-w
```

Check out default [Karma Configs](/conf/karma.conf.js), you can override all of them in `.ntrrc` file, like:

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
