export class PipelineStack extends Stack {

  // ...
  const synthAction = SimpleSynthAction.standardNpmSynth({
    // ...
    environment: {
      buildImage: LinuxBuildImage.STANDARD_4_0, // needs to be explict to use latest version when using environment field
      privileged: true,
      environmentVariables: {
        DOCKER_HOST: {
          value: 'tcp://localhost:2375'
        },
        DOCKER_TLS_VERIFY: {
          value: '0'
        }
      }
    }
  })

  // ...
}
