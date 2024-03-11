import HistoryList from "../../components/history/HistoryList/HistoryList";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";
import styles from "./History.module.css";

export default function HistoryPage() {
  return (
    <div className={styles.page}>
      <PageHeader header="history" />
      <HistoryList />
    </div>
  );
}
