export type StartIssuingRequest = { token: string };
export type StartIssuingResponse = {
  transactionId: string;
  connectionInvitation: {
    connection_id: string;
    invitation_url: string;
    invitation: {
      "@type": string;
      "@id": string;
      label: string;
      recipientKeys: string[];
      serviceEndpoint: string;
    };
    alias: string;
  };
};

export type ConnectionInfoResponse = {
  connectionId: string;
  active: boolean;
};
