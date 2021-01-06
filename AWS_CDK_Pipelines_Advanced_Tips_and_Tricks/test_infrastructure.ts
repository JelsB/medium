export class PipelineStack extends Stack {

  // ...
  const preProdApp = new WebServiceStage(this, 'Pre-Prod')
  const preProdStage = pipeline.addApplicationStage(preProdApp)
  const serviceUrl = pipeline.stackOutput(preProdApp.urlOutput)

  preProdStage.addActions(new pipelines.ShellScriptAction({
    actionName: 'IntegrationTests',
    runOrder: preProdStage.nextSequentialRunOrder(),
    additionalArtifacts: [
      sourceArtifact
    ],
    commands: [
      'npm install',
      'npm run build',
      'npm run integration'
    ],
    useOutputs: {
      SERVICE_URL: serviceUrl
    }
  }))

    // ...
}
