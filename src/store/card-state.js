import { createStore } from "vuex";
import axios from "axios";
import CardMixingLogic from "@/plugins/card-mixing-logic";

export default createStore({
  state: {
    cardObjectDefault: [
      { id: 1, img: "", comparedValues: 41054 },
      { id: 2, img: "", comparedValues: 61051 },
      { id: 3, img: "", comparedValues: 21052 },
      { id: 4, img: "", comparedValues: 71055 },
      { id: 5, img: "", comparedValues: 81059 },
      { id: 6, img: "", comparedValues: 91050 },
      { id: 7, img: "", comparedValues: 41054 },
      { id: 8, img: "", comparedValues: 61051 },
      { id: 9, img: "", comparedValues: 21052 },
      { id: 10, img: "", comparedValues: 71055 },
      { id: 11, img: "", comparedValues: 81059 },
      { id: 12, img: "", comparedValues: 91050 },
      { id: 13, img: "", comparedValues: 41054 },
      { id: 14, img: "", comparedValues: 61051 },
      { id: 15, img: "", comparedValues: 21052 },
      { id: 16, img: "", comparedValues: 71055 },
      { id: 17, img: "", comparedValues: 81059 },
      { id: 18, img: "", comparedValues: 91050 },
      { id: 19, img: "", comparedValues: 41054 },
      { id: 20, img: "", comparedValues: 61051 },
      { id: 21, img: "", comparedValues: 21052 },
      { id: 22, img: "", comparedValues: 71055 },
      { id: 23, img: "", comparedValues: 81059 },
      { id: 24, img: "", comparedValues: 91050 },
      { id: 25, img: "", comparedValues: 41054 },
      { id: 26, img: "", comparedValues: 61051 },
      { id: 27, img: "", comparedValues: 21052 },
      { id: 28, img: "", comparedValues: 71055 },
      { id: 29, img: "", comparedValues: 81059 },
      { id: 30, img: "", comparedValues: 91050 },
      { id: 31, img: "", comparedValues: 41054 },
      { id: 32, img: "", comparedValues: 61051 },
      { id: 33, img: "", comparedValues: 21052 },
      { id: 34, img: "", comparedValues: 71055 },
      { id: 35, img: "", comparedValues: 81059 },
      { id: 36, img: "", comparedValues: 91050 },
    ],
    cardObject: [],
    clickedIdOne: 0,
    clickedIdTwo: 0,
    winnings: 0,
    losses: 0,
    moves: 40,
  },
  getters: {
    getCardObject: (state) => CardMixingLogic.shuffle(state.cardObject),
    getClickedIdOne: (state) => state.clickedIdOne,
    getClickedIdTwo: (state) => state.clickedIdTwo,
    getWinnings: (state) => state.winnings,
    getLosses: (state) => state.losses,
    getMoves: (state) => state.moves,
  },
  mutations: {
    RESET_WIN_LOSS(state, payload) {
      state.winnings = payload;
      state.losses = payload;
    },
    SET_WIN(state, payload) {
      state.winnings += payload;
    },
    SET_LOSS(state, payload) {
      state.losses += payload;
    },
    SET_MOV(state, payload) {
      if (state.moves === 0) {
        state.moves = 40;
      } else {
        state.moves -= payload;
      }
    },
    SET_CARD_OBJECT(state, payload) {
      state.cardObject = payload;
    },
    SET_CLICKED_ID_ONE(state, payload) {
      state.clickedIdOne = payload;
    },
    SET_CLICKED_ID_TWO(state, payload) {
      state.clickedIdTwo = payload;
    },
  },
  actions: {
    async getTheCardObjectFromTheServer({ commit, state }) {
      axios
        .get("http://localhost:3008")
        .then(({ data }) => {
          commit("SET_CARD_OBJECT", data);
        })
        .catch((error) => {
          console.log(error);
          commit("SET_CARD_OBJECT", state.cardObjectDefault);
        });
    },
    setClickedIdOne({ commit }, payload) {
      commit("SET_CLICKED_ID_ONE", payload);
    },
    setClickedIdTwo({ commit }, payload) {
      commit("SET_CLICKED_ID_TWO", payload);
    },
    setWinnings({ commit }, payload) {
      commit("SET_WIN", payload);
    },
    setLosses({ commit }, payload) {
      commit("SET_LOSS", payload);
    },
    setMoves({ commit }, payload) {
      commit("SET_MOV", payload);
    },
    resetWinLoss({ commit }, payload) {
      commit("RESET_WIN_LOSS", payload);
    },
  },
  modules: {},
});
