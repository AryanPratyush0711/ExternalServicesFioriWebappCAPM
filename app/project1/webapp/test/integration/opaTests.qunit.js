sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/deloitte/project1/test/integration/FirstJourney',
		'com/deloitte/project1/test/integration/pages/SalesTerritoryCollectionList',
		'com/deloitte/project1/test/integration/pages/SalesTerritoryCollectionObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesTerritoryCollectionList, SalesTerritoryCollectionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/deloitte/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesTerritoryCollectionList: SalesTerritoryCollectionList,
					onTheSalesTerritoryCollectionObjectPage: SalesTerritoryCollectionObjectPage
                }
            },
            opaJourney.run
        );
    }
);