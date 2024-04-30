const cds = require('@sap/cds');
const { query } = require('express');
class MyService extends cds.ApplicationService{
    async init() {
        const {SalesTerritoryCollection} = this.entities;
        const SalesOrd = await cds.connect.to('salesterritory');
        this.on('READ', SalesTerritoryCollection, async(req,res) => {
            return await SalesOrd.tx(req).run(req.query);
        });
    }
}
module.exports = {MyService};