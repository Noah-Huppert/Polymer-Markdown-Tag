var options = {
  src: "",
  update: function(){
    if(this.src === undefined || this.src === null){
      throw "Src cannot be undefined";
    }

    if(this.innerHTML !== undefined){
      var srcValue = this.src;
      this.innerHTML = marked(srcValue);
    }
  },
  ready: function(){
    this.update();
  },
  srcChanged: function() {
    this.update();
  }
};

marked.setOptions({
  highlight: function (code) {
    console.log("Highlighting \"" + code + "\"");
    return hljs.highlightAuto(code).value;
  }
});

Polymer("mark-down", options);