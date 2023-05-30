import { LoginProvider } from "./LoginContainer";
import { SnackbarProvider } from "./SnackbarContainer";

const providers = [LoginProvider, SnackbarProvider];

export const ProviderGroup = ({ children }: any) => {
    const ReducedProviders = providers.reduceRight((children, Provider) => {
      return <Provider>{children}</Provider>;
    }, children);
    return <>{ReducedProviders}</>;
  };
  