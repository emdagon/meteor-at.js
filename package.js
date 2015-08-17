Package.describe({
  name: "emdagon:at.js",
  summary: "At.js - Add GitHub-like autocomplete mentions",
  version: "0.0.2",
  git: "https://github.com/emdagon/meteor-at.js"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use("jquery", "client")
  api.use("jameslefrere:caretjs@0.0.1", "client")
  api.addFiles(["At.js/dist/css/jquery.atwho.css", "At.js/dist/js/jquery.atwho.js"], "client");
});
