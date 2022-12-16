import { useApi, useAccount } from '@gear-js/react-hooks';
import { withProviders } from 'hocs';
import FirstPage from '../src/pages/home/Home'
import 'App.css';

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
      <main>
        <FirstPage></FirstPage>
      </main>
  );
}

export const App = withProviders(Component);
