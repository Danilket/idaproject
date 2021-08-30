import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import { getVehicles } from "@/js/request";

export const state = () => ({
	productInfo: {},
	vehicles: 0,
	vehiclesLoading: true,
	vehiclesLoadingFailed: false,
})

export const mutations = {
	increment(state) {
		state.counter++
	},
	changeProductInfo(state, payload) {
		state.productInfo = payload
	},
	changeResponse(state, payload) {
		state.vehicles = payload
	},
	vehiclesMutation(state, payload) {
		state.vehicles = payload
	},
	vehiclesLoading(state, payload) {
		state.vehiclesLoading = payload
	},
	vehiclesLoadingFailed(state, payload) {
		state.vehiclesLoadingFailed = payload
	},
}

export const actions = {
	vehiclesAction({ commit }) {
		return getVehicles()
			.then(vehicles => {
				commit("vehiclesMutation", vehicles);
				commit("vehiclesLoading", false);
				commit("vehiclesLoadingFailed", false);
			})
			.catch(() => {
				commit("vehiclesLoadingFailed", true);
				commit("vehiclesLoading", false);
			})
	}
}