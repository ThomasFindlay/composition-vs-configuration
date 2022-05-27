import Alert, {
  AlertHeader,
  AlertBody,
  AlertIcon,
  AlertContent,
} from "./composition/Alert.jsx";

const CompositionExample = props => {
  return (
    <div>
      <h2 className="text-2xl font-semibold py-8">Composition</h2>
      <div className="max-w-[300px] mx-auto space-y-6">
        <Alert>
          <AlertContent>
            <AlertBody>This is a simple alert.</AlertBody>
          </AlertContent>
        </Alert>

        <Alert.Success>
          <AlertContent>
            <AlertHeader>Success alert</AlertHeader>
            <AlertBody>This is a success alert</AlertBody>
          </AlertContent>
          <AlertIcon icon="success" containerClass="ml-auto mr-5" />
        </Alert.Success>

        <Alert.Danger>
          <AlertContent>
            <AlertHeader>Danger alert</AlertHeader>
            <AlertBody>This is a danger alert</AlertBody>
          </AlertContent>
          <AlertIcon icon="success" containerClass="ml-auto mr-5" />
        </Alert.Danger>

        <Alert.Warning>
          <AlertContent>
            <AlertHeader>Warning alert</AlertHeader>
            <AlertBody>This is a warning alert</AlertBody>
          </AlertContent>
        </Alert.Warning>

        <Alert.Info>
          <AlertIcon icon="info" />
          <AlertContent>
            <AlertHeader>Info alert</AlertHeader>
            <AlertBody>This is an info alert</AlertBody>
          </AlertContent>
        </Alert.Info>
      </div>
    </div>
  );
};

export default CompositionExample;
