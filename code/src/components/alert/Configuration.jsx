import Alert from "./configuration/Alert.jsx";

const ConfigurationExample = props => {
  return (
    <div>
      <h2 className="text-2xl font-semibold py-8">Configuration</h2>
      <div className="max-w-[300px] mx-auto space-y-6">
        <Alert
          variant="success"
          header="Success alert"
          icon="success"
          iconPosition="left"
        >
          This is a success alert
        </Alert>
        <Alert
          variant="danger"
          header="Danger alert"
          icon="danger"
          iconPosition="right"
        >
          This is a danger alert
        </Alert>
        <Alert
          variant="warning"
          header="Warning alert"
          icon="warning"
          iconPosition="left"
        >
          This is a warning alert
        </Alert>
        <Alert
          variant="info"
          header="Info alert"
          icon="info"
          iconPosition="right"
        >
          This is a info alert
        </Alert>
      </div>
    </div>
  );
};

export default ConfigurationExample;
