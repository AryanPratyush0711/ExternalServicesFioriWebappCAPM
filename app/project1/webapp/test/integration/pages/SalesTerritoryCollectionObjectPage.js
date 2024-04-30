sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.deloitte.project1',
            componentId: 'SalesTerritoryCollectionObjectPage',
            contextPath: '/SalesTerritoryCollection'
        },
        CustomPageDefinitions
    );
});