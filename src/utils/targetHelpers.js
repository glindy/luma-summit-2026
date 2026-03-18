const targetHelpers = {
    
    setItemCategory: function(){
        var itemId = location.href.substring(location.href.lastIndexOf('/') + 1);
        
        if (['1', '9', '11'].includes(itemId)) {
        this.itemCategory = 'mens';
        }
      if (['2', '4'].includes(itemId)) {
        this.itemCategory = 'womens';
        }
      if (['3'].includes(itemId)) {
        this.itemCategory = 'kids';
        }
      if (['5', '6', '7', '8', '10', '12'].includes(itemId)) {
        this.itemCategory = 'accessories';
        }
     console.log('Current category is: ' + this.itemCategory);
    },
    
    
    targetGetOffers: function(){
        /* L777: Exercise 3.1.3: paste adobe.target.getOffer code here */
        
        if (typeof adobe != 'undefined') {
        adobe.target.getOffer ({ 
          "mbox": "target-global-mbox", 
          "params": { 
              "user.categoryId": this.itemCategory
          }, 
          "success": function (offers) { 
            adobe.target.applyOffer ({ 
                "mbox": "target-global-mbox", 
                "offer": offers 
            }); 
          }, 
	      "error": function (status, error) {    
      		console.log ('Error', status, error);
 	        }
        })
      }
    }
}

export default targetHelpers;