import css from './TransactionHistory.module.css';


export default function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.type}>Type</th>
                    <th className={css.amount}>Amount</th>
                    <th className={css.currency}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}    