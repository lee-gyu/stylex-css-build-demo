import stylex from '@stylexjs/stylex';

const lotsOfStyles = [
  stylex.create({
    base: {
      color: "red",
      backgroundColor: "black",
    }
  }),
  stylex.create({
    blue: {
      color: "blue",
    }
  })
]

const styles = lotsOfStyles.map((defs) => Object.values(defs));

export default function App() {
  return stylex.props(styles);
}

console.log(styles)
console.log(App())