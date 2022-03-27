export default {
  shuffle: function (array) {
    return array.sort(() => Math.random() - 0.5);
  },
};
