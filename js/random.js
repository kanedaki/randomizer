var RandomMock = Backbone.Model.extend({
  initialize: function() {
    window.setInterval((function() {
      this.trigger("random:generate", [12,123,234,342,2,32]);
      console.log("triggered genenate");
    }).bind(this), 1000);
  }
});

var RandomView = Backbone.View.extend({
  initialize: function(data) {
    this.setElement("body");
    this.$(".start").on("click", this.start);
    randomService = new RandomMock();
  },
  start: function() {
    randomService.listenTo(randomService, "random:generate", this.updateView);
  },
  updateView: function(data){
    $(".data").text("Data: " + data.map(function(data) {return data + " "}));
  }

})


new RandomView();
