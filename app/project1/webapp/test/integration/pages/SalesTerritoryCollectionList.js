sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.deloitte.project1',
            componentId: 'SalesTerritoryCollectionList',
            contextPath: '/SalesTerritoryCollection'
        },
        CustomPageDefinitions
    );
});