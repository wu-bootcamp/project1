	YAHOO.namespace("netsol.search");
	google.load('search', '1.0');

	var netsolSearchComplete = function(sc, searcher) {
		document.getElementById("netsolSearchFormResultsContainer").style.display="block";
		//document.getElementById("column1").style.visibility="hidden";
		//document.getElementById("column2").style.visibility="hidden";
		//document.getElementById("column3").style.visibility="hidden";
	};
	
	

	function OnLoad() {
		
		// Create a Google search control. Make links show on same page
		var netsolSearchControl = new google.search.SearchControl(); 
		netsolSearchControl.setLinkTarget(GSearch.LINK_TARGET_BLANK );
		netsolSearchControl.setNoResultsString(google.search.SearchControl.NO_RESULTS_DEFAULT_STRING );
		
		// Add searcher for my site
		var netsolMySiteSearch = new google.search.WebSearch();
		netsolMySiteSearch.setUserDefinedLabel("This site");
		netsolMySiteSearch.setUserDefinedClassSuffix("netsolsitesearch");
		var netsolSiteName = document.URL.replace(/\S+:\/\//,'').replace(/\/.*/,'');
		netsolMySiteSearch.setSiteRestriction(netsolSiteName);
		netsolSearchControl.addSearcher(netsolMySiteSearch);
		
		//netsolMySiteSearch.setUserDefinedLabel("Amazon.com");
		//netsolMySiteSearch.setUserDefinedClassSuffix("siteSearch");
		//netsolMySiteSearch.setSiteRestriction("amazon.com");
		//netsolSearchControl.addSearcher(netsolMySiteSearch);
		netsolSearchControl.setResultSetSize(google.search.Search.SMALL_RESULTSET );
		
		// tell the searcher to draw itself and where to attach
		var netsolSearchDrawOptions = new GdrawOptions();
		netsolSearchDrawOptions.setDrawMode(GSearchControl.DRAW_MODE_TABBED);
		netsolSearchDrawOptions.setSearchFormRoot(document.getElementById("netsolSearchForm"));
		netsolSearchControl.draw(document.getElementById("netsolSearchFormResultsContainer"), netsolSearchDrawOptions);
		 
		// Configure function to make search results visible upon search completion
		netsolSearchControl.setSearchCompleteCallback(this, netsolSearchComplete);
		
		var netsolSearchForm = document.getElementById("netsolSearchForm");
		var clearButtonDivs = YAHOO.util.Dom.getElementsByClassName("gsc-clear-button","div",netsolSearchForm);
		YAHOO.util.Event.addListener(clearButtonDivs[0],"click",function () {document.getElementById("netsolSearchFormResultsContainer").style.display="none";
				//document.getElementById("column1").style.visibility="visible";
				//document.getElementById("column2").style.visibility="visible";
				//document.getElementById("column3").style.visibility="visible";
		});
		
	}
    
  
	google.setOnLoadCallback(OnLoad, true);


