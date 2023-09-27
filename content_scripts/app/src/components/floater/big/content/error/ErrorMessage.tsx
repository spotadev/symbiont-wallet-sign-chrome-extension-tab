import { useGlobalStateContext } from '../../../../../context/GlobalStateContext';
import appStyle from '../../../../../App.module.css';

export default function ErrorMessage() {
  const { error, errorMessage } = useGlobalStateContext();

  return (
    <div className={appStyle.container}>
      <div className={appStyle.title}>Error</div>
      <div className={appStyle.row}>
        <div className={appStyle.col_25}>
          <label className={appStyle.label}>Error Name:</label>
        </div>
        <div className={appStyle.col_75}>
          <label className={appStyle.label}>{error?.name}</label>
        </div>
      </div>
      <div className={appStyle.row}>
        <div className={appStyle.col_25}>
          <label className={appStyle.label}>Error Code:</label>
        </div>
        <div className={appStyle.col_75}>
          <label className={appStyle.label}>{error?.code}</label>
        </div>
      </div>
      <div className={appStyle.row}>
        <div className={appStyle.col_25}>
          <label className={appStyle.label}>Error Message:</label>
        </div>
        <div className={appStyle.col_75}>
          <ul>
            {errorMessage != null ? <li>{errorMessage}</li> : ''}
            {error.message != null ? <li>{error.message}</li> : ''}
          </ul>
        </div>
      </div>
    </div>
  );
}
