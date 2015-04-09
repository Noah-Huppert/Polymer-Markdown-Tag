var marky = window.polymerMarkdownTag.marky;

var options = {
  container: "div",
  domReady: function(){

  },
  injectContainter: function(){
    var container = this.querySelector("#container");

    if(container === undefined){
      container = this.createElement(this.container);
      container.id = "container";
    }
  }
};

Polymer("mark-down", options);

var old = {
  container: "div",
  created: function() {},

  domReady: function() {
    this.update();
  },

  update: function(){
    this.innerHTML = marky(this.innerHTML).html();
    //this.innerHTML = md.render(this.value);
  },

  // Fires when the "<polymer-element>" has been fully prepared
  ready: function() {},

  // Fires when the element was inserted into the document
  attached: function() {},

  // Fires when the element was removed from the document
  detached: function() {},

  // Fires when an attribute was added, removed, or updated
  attributeChanged: function(attr, oldVal, newVal) {
    this.update();
  }
};
