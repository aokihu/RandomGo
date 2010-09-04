function transpot(url,callback)
{
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange=_callback;
	xhr.open("GET",url,true);
	xhr.send(null);
	
	function _callback()
	{
		if(xhr.readyState == 4)
		{
			if(xhr.status == 200)
			{
				// On success do something
				callback({
					'status':200,
					'text':xhr.responseText,
					'xml':xhr.responseXML
				});
			}
			else
			{
				// nop
			}
		}
		else
		{
			// nop
		}
	}
}