import { LoginProvider } from "./LoginContainer";
import { SnackbarProvider } from "./SnackbarContainer";
import { TodoProvider } from "./TodoContiner";

const providers = [LoginProvider, SnackbarProvider, TodoProvider];

export const ProviderGroup = ({ children }: any) => {
    const ReducedProviders = providers.reduceRight((children, Provider) => {
      return <Provider>{children}</Provider>;
    }, children);
    return <>{ReducedProviders}</>;
  };
  