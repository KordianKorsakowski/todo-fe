import { LoginProvider } from "./LoginContainer";

const providers = [LoginProvider];

export const ProviderGroup = ({ children }: any) => {
    const ReducedProviders = providers.reduceRight((children, Provider) => {
      return <Provider>{children}</Provider>;
    }, children);
    return <>{ReducedProviders}</>;
  };
  