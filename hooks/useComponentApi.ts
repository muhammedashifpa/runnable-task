//Hooks to interact with component API
export function useComponentApi(componentId: string) {
  //get jsx component from server
  async function loadComponent(): Promise<Response> {
    return fetch(`/api/component/${componentId}`);
  }
  //save jsx component to server
  async function saveComponent(code: string): Promise<Response> {
    return fetch(`/api/component/${componentId}`, {
      method: "PUT",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
    });
  }
  //reset component to original component on server
  async function resetComponent(): Promise<Response> {
    return fetch(`/api/component/reset/${componentId}`, {
      method: "POST",
    });
  }

  return {
    loadComponent,
    saveComponent,
    resetComponent,
  };
}

export type LoadComponentResponse = {
  id: string;
  code: string;
};

export type SaveComponentResponse = {
  message: string;
  code: string;
};

export type ResetComponentResponse = {
  id: string;
  message: string;
  code: string;
};

export type ApiError = {
  error: string;
  details?: string;
};
export type UseComponentApiType = ReturnType<typeof useComponentApi>;
