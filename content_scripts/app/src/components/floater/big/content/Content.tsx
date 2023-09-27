import { useGlobalStateContext } from '../../../../context/GlobalStateContext';
import { ContentModeEnum } from '../../../../enums/CurrentModeEnum';
import Login from './login/Login';
import ErrorMessage from './error/ErrorMessage';


export default function Content(props: any) {
  const { contentMode, contentModePropsData } = useGlobalStateContext();

  switch (contentMode) {

    case ContentModeEnum.ERROR:
      return <ErrorMessage />;

    case ContentModeEnum.LOGIN:
      return <Login />;

    default:
      return <Login />;
  }
}
