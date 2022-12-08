
import css from './Transaction.module.css';

export default function TransactionHistory({ info }) {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

        <tbody>
          {info.map(el => (

      <tr className={css.table} key={el.id}>
      <td className={css.data}>{el.type}</td>
      <td className={css.data}>{el.amount}</td>
      <td className={css.data}>{el.currency}</td>
      </tr>

          ))}
    
  </tbody>
</table>

    );
}