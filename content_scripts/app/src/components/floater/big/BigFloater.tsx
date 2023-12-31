
import styles from './BigFloater.module.css';
import Header from "./header/Header";
import Content from "./content/Content";

export default function BigFloater(props: any) {

  return (
    <div
      className={styles.BigFloater}
      onDragStart={props.dragStart}
      onDrag={props.drag}
      style={props.style}>
      <Header />
      <Content />
    </div >
  );
}