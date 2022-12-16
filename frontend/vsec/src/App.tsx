import { useApi, useAccount } from '@gear-js/react-hooks';
import { withProviders } from 'hocs';
import FirstPage from './pages/Rentals/Rental'
import 'App.css';

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
      <main>
        <FirstPage/>
      </main>
  );
}

export const App = withProviders(Component);
