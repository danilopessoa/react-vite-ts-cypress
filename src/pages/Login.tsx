import { Header } from '../components/Header.tsx';
import Login from '../components/Login.tsx';

const LoginPage = () => {
  return (
    <div>
      <Header
        heading="Faça Login em sua conta"
        paragraph="Não tem conta, vamor criar uma? "
        linkName="Cadastre-se"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
};

export { LoginPage };
