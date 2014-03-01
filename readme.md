Hoppa
=========
Hoppa is a javascript compressor and less compiler for web projects.


Installation
--------------

```sh
$ sudo npm install hoppa -g
```

### Configure

Add a Hoppa project file. Hoppa looks for `hoppa.json` or a given json path at launch using `-p` (see Launch). Use config to define wether Hoppa should compress javascript and/or compile less files when running Hoppa without arguments (-a, -j, -l).

```sh
{

  "config": {
    "compress": true
    ,"compile": true
  }
  
  ,"js": {
    "./js/scripts.min.js": ["./js/*.js"]
  }
  
  ,"less": {
    "./css/bootstrap.min.css": ["./less/bootstrap/bootstrap.less"]
  }
  
}
```

### Launch

Go to your project directory and run

```sh
$ hoppa -a
```

To start in watch mode use `-w`

```sh
$ hoppa -a -w
```

To start with javascript compression `-j`

```sh
$ hoppa -j
```

To start with less compilation `-l`

```sh
$ hoppa -l
```

To start with less compilation and javascript compression `-a`

```sh
$ hoppa -a
```

To start with a custom project json use `-p`

```sh
$ hoppa -a -w -p ./my_project.json
```

To start with terminal notifications use `-n` (see Notifications)

```sh
$ hoppa -a -w -n -p ./my_project.json
```

For help use `--help`

```sh
$ hoppa --help
```

### Notifications

####Windows
Install Growl: http://growl.info/

####OSX
Install terminal-notifier
```sh
$ sudo gem install terminal-notifier
```
    