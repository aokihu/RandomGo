// get the sites data from local storage
function getSitesData()
{
	var ret = null;
	ret = localStorage['sites'].split(",");
	console.log(ret);
	return ret;
}

// set sites data to local storage
function setSitesData()
{
	var _sites = [
			'http://www.facebook.com',
			'http://www.yahoo.com',
			'http://www.twritter.com',
			'http://www.msn.com',
			'http://www.nytimes.com',
			'http://www.abc.com',
			'http://www.nbc.com',
			'http://www.nba.com',
			'http://www.facebook.com',
			'http://www.163.com',
			'http://www.sohu.com',
			'http://cn.yahoo.com',
			'http://www.taobao.com',
			'http://www.disney.com',
			'http://www.pcbeta.com'
	];
	
	if(!localStorage['init'])
	{
		localStorage['sites'] = _sites;
		
		localStorage['init'] = true;
	}
	else
	{
		// nop
	}
}

setSitesData();