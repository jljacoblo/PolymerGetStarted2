/**
 * Created by jacoblo on 2/7/17.
 */
Polymer({
  is : 'shop-category-data'

  , ready : function () {
    this.$.jsonElement.fetchObj('categories', '/data/categories.json');
  }

  , attached : function() {

  }

  /*
  , properties : {
    categories : {
      type : Array
      , value : []
      , readOnly : false
      , notify : true
      , observer : '_categoriesChanged'
    }
  }

  // handle observers
  , _categoriesChanged(categories, oldCategories) {
    console.log( " Categories Length : " + categories.length);
  }


  // methods

  , fetchObj : function(obj, urlString) {
    this._getResource({
      url: urlString
      , onLoad: function(e) {
        this.set(obj, JSON.parse(e.target.responseText));
      }
      , onError : function(e) {
        console.log("Error on fetchObj");
      }
    }, 1);
  }

  , _getResource: function(rq, attempts) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', rq.onLoad.bind(this));
    xhr.addEventListener('error', function(e) {
      // Flaky connections might fail fetching resources
      if (attempts > 1) {
        this.debounce('_getResource', this._getResource.bind(this, rq, attempts - 1), 200);
      } else {
        rq.onError.call(this, e);
      }
    }.bind(this));

    xhr.open('GET', rq.url);
    xhr.send();
  }
 */
});