import stylex from '@stylexjs/stylex';

const lotsOfStyles = [
  stylex.create({
    base: {
      color: "red"
    }
  })
]

const styles = lotsOfStyles.map((defs) => Object.values(defs));

export default function App() {
  return stylex.props(styles);
}