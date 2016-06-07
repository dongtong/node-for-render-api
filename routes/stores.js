import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';
import request from 'request';
import template from 'art-template';

module.exports = app => {

	/**
	 * @api {get} /user/page/:page List stores
	 * @apiGroup Stores
	 * @apiParam {String} q Stores attributes
	 * @apiSuccess {String} code Return stataus
	 * @apiSuccess {String} totalPage Result page number
	 * @apiSuccess {String} totalCount Result count
	 * @apiSuccess {Array} users Return users
	 * @apiSuccessExample {json} Success
	 *     HTTP/1.1 200 OK
	 *     {}
     *  @apiErrorExample {json} Search error
     *     HTTP/1.1 200 OK
     *     {}
	 */
	app.route("/stores.html")
	   .get((req, res) => {
	   	    console.log('query:', req.query);
	   	    const cityId = req.query.cityId;
	   	    const channel = req.query.channel;
	   	    
	   	    // Statistic
	   	    console.log('Statistic ---> ');
			request("http://mois.suning.com/vpurchase/saveStatis.do?commodityCode=&channel=4&callback=jsonpCallback", function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			  	console.log('Statistic')
			    console.log(body) // Show the HTML for the Google homepage. 
			  }
			});
	   	    
	   	    // Query position
	   	    console.log('Query position ---> ');
	   	    request("http://ipservice.suning.com/ipQuery.do?callback=jsonpCallback", function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			  	console.log('Query position')
			    console.log(body) 
			  }
			});

	   	    // Get stores
	   	    request("http://mois.suning.com/vpurchase2nd/citycpxvstore/9173-34.700648-116.911468-1-jsonpCallback.html?_=1465261182455&callback=jsonpCallback", function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			    res.render('stores/index.html', {
			    	stores: JSON.parse(body.slice(14, -2)).data.vstore2ndList
			    });
			  }
			});
	   	    
	   	    // Get cityList
	   	    console.log('Get cityList ---> ');
	   	    request("http://www.suning.com/webapp/wcs/stores/servlet/SNiPhoneCityView?storeId=10052&callback=jsonpCallback", function (error, response, body) {
			  if (!error && response.statusCode == 200) {
			  	console.log('Get cityList')
			    console.log(body)
			  }
			});

	});
}