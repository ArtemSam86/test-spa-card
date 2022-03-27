<template>
  <button
    :class="`card`"
    :key="`card-${card.id}`"
    v-for="card in arraySort"
    :disabled="card.id === isDisabledOne || card.id === isDisabledTwo"
    @mouseenter="CardFocus(card.id)"
    @click="clickedToCard(card.comparedValues, card.id)"
  >
    {{
      card.id === isDisabledOne
        ? clickedIdOne
        : card.id === isDisabledTwo
        ? clickedIdTwo
        : "*|*"
    }}
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CardImage",
  props: {
    cards: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      victoryColor: "",
      isDisabledOne: 0,
      isDisabledTwo: 0,
      counter: 0,
      arraySort: [],
    };
  },
  updated() {
    if (this.arraySort.length === 0) {
      this.arraySort = this.cards;
    }
  },
  computed: {
    ...mapGetters({
      clickedIdOne: "getClickedIdOne",
      clickedIdTwo: "getClickedIdTwo",
      getMoves: "getMoves",
    }),
  },
  methods: {
    ...mapActions({
      setClickedIdOne: "setClickedIdOne",
      setClickedIdTwo: "setClickedIdTwo",
      setWinnings: "setWinnings",
      setLosses: "setLosses",
      setMoves: "setMoves",
      resetWinLoss: "resetWinLoss",
    }),
    CardFocus(id) {
      if (this.getMoves === 0) {
        if (this.arraySort.length === 0) {
          this.setMoves(1);
          alert("Вы выйграли!!!");
          this.resetWinLoss(0);
          this.arraySort = this.cards;
        } else {
          this.setMoves(1);
          alert("Вы проиграли!!!");
          this.resetWinLoss(0);
          this.arraySort = this.cards;
        }
      }
      if (this.clickedIdOne !== 0 && this.clickedIdTwo !== 0) {
        if (this.clickedIdOne === this.clickedIdTwo) {
          this.arraySort = this.arraySort.filter((val) => {
            if (
              val.id !== this.isDisabledOne &&
              val.id !== this.isDisabledTwo
            ) {
              return val;
            }
          });
        }
        if (this.counter === 2) {
          this.counter = 0;
          this.isDisabledOne = 0;
          this.isDisabledTwo = 0;
          this.setClickedIdOne(0);
          this.setClickedIdTwo(0);
        }
        if (id !== this.isDisabledOne || id !== this.isDisabledTwo) {
          this.arraySort.sort(() => Math.random() - 0.5);
        }
      }
    },
    clickedToCard(comparedValues, id) {
      if (this.isDisabledOne === 0) {
        this.isDisabledOne = id;
      } else {
        this.isDisabledTwo = id;
      }
      if (this.clickedIdOne === 0 && this.clickedIdTwo === 0) {
        this.setClickedIdOne(comparedValues);
      } else {
        this.setClickedIdTwo(comparedValues);
      }
      if (this.clickedIdOne !== 0 && this.clickedIdTwo !== 0) {
        if (this.clickedIdOne === this.clickedIdTwo) {
          this.setWinnings(1);
          this.setMoves(-1);
        } else {
          this.setLosses(1);
        }
        this.setMoves(1);
      }
      this.counter++;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: #f7eff8;
  border: 2px solid #ed97f3;
  padding: 5px;
  font-size: 70px;
  color: darkmagenta;
  text-decoration-line: line-through;
  &:hover {
    background-color: aqua;
    cursor: pointer;
  }
  &:active {
    background-color: #cbcbcb;
  }
  &:disabled {
    text-decoration-line: none;
    background-color: gold;
    font-size: 30px;
    color: darkgreen;
  }
}
.increase-text {
  font-size: 100px;
}
</style>
