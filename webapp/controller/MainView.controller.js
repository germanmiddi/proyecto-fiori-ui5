sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
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
			}
		});
	});
