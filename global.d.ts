// eslint-disable-next-line no-unused-vars
interface Window {
  google: {
    accounts: {
      id: {
        prompt: () => void;
        renderButton: (
          doc: HTMLElement | null,
          btnConfig: {
            text: string;
            theme: string;
            size: string;
          }
        ) => void;
        initialize: (configData: { client_id: string; callback: (response: any) => void }) => void;
      };
    };
  };
}
