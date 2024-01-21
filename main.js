console.log('Hello from main.js');



new Vue({
  el: '#app',
  data() {
    return {
      cells: Array(9).fill(null),
      xIsNext: true,
    };
  },
  
  computed: {
    status() {
      const winner = calculateWinner(this.cells);
      if (winner) {
        return `Победитель: ${winner}`;
      } else if (this.cells.every((cell) => cell !== null)) {
        return `Заново`;
      } else {
        return `Следующий игрок: ${this.xIsNext ? 'X' : 'O'}`;
      }
    },
  },
  
  methods: {
    handleClick(index) {
      if (calculateWinner(this.cells) || this.cells[index]) {
        return;
      }
      this.$set(this.cells, index, this.xIsNext ? 'X' : 'O');
      this.xIsNext = !this.xIsNext;
    },

    restartGame() {
      this.cells = Array(9).fill(null);
      this.xIsNext = true;
    },
  },
});
  
function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (const line of lines) {
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}
  