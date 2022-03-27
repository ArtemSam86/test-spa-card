<template>
  <div>
    <field />
  </div>
</template>

<script>
import Field from "@/components/Field";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { Field },
  created() {
    this.getTheCardObjectFromTheServer();
  },
  methods: {
    ...mapActions({
      getTheCardObjectFromTheServer: "getTheCardObjectFromTheServer",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
