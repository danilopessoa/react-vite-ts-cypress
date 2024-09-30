import { Header } from '../components/Header';
import { Signup } from '../components/Signup';

const SignupPage = () => {
  return (
    <>
      <Header
        heading="Cadastre-se para criar uma conta"
        paragraph="Você já tem uma conta? "
        linkName="Entrar"
        linkUrl="/"
      />
      <Signup />
    </>
  );
};

export { SignupPage };
