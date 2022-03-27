<template>
  <div class="field-calculate">
    <p class="win">Совпало пар: {{ getWinnings }}</p>
    <p class="loss">Не совпало пар: {{ getLosses }}</p>
    <p class="moves">Осталось ходов: {{ getMoves }}</p>
  </div>
  <div class="field-card">
    <card :cards="getCardObject" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapGetters } from "vuex";

export default {
  name: "CardField",
  components: { Card },
  computed: {
    ...mapGetters({
      getCardObject: "getCardObject",
      getWinnings: "getWinnings",
      getLosses: "getLosses",
      getMoves: "getMoves",
    }),
  },
};
</script>
<style scoped lang="scss">
.field-card {
  padding: 10px;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  //grid-column-gap: 20px;
  //grid-row-gap: 20px;
  grid-gap: 20px 20px;
}
.field-calculate {
  padding: 10px;
  font-size: 20px;
  display: grid;
  grid-template-columns: 230px 230px 350px;
  //grid-column-gap: 5px;
  //grid-row-gap: 5px;
  grid-gap: 5px 5px;
}
.win {
  color: darkgreen;
  margin: 5px;
  font-size: 25px;
}
.loss {
  color: crimson;
  margin: 5px;
  font-size: 25px;
}
.moves {
  color: blue;
  margin: 5px;
  font-size: 25px;
}
</style>
