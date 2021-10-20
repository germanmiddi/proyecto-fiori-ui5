sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.model.Filter} Filter
     * @param {typeof sap.ui.core.model.FilterOperator} FilterOperator
     */
	function (Controller, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("logaligroup.invoices.controller.MainView", {
			onInit: function () {
                //Se puede simplificar el sap.ui.model.json declarandolo como dependencia
                const oJSONModel =  new sap.ui.model.json.JSONModel();
                //Cargo el modelo en el objeto JSON
                oJSONModel.loadData("./model/SelectionScreenMenu.json")

                // Instancio la vista
                const oView = this.getView();
                // Se setea/bindea el modelo en la vista, en el segundo parametro se pasa el nombre que se quiere usar en la vista
                oView.setModel(oJSONModel, "selectionScreen")

                // Se pueden resumir los pasos de arriba con:
                // this.getView().setModel(oJSONModel, "selectionScreen")
            },
            onFilter: function (oEvent){

                const oData = this.getView().getModel("selectionScreen").getData()
                let filters = []

                if(oData.ShipName !== ""){
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName ))
                }

                if(oData.CountryKey !== ""){
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey ))
                }    
                
                const oList = this.getView().byId("invoicesList")
                const oBinding = oList.getBinding("items")
                oBinding.filter(filters)

            },
            onClearFilter: function(){
                const oModelSelScreen = this.getView().getModel("selectionScreen")
                oModelSelScreen.setProperty("/ShipName", "")                
                oModelSelScreen.setProperty("/CountryKey", "")
                
                const oList = this.getView().byId("invoicesList")
                const oBinding = oList.getBinding("items")
                oBinding.filter([])

            }
		});
	});
