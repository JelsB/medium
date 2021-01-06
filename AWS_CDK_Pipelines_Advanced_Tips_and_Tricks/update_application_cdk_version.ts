const pipeline = new pipelines.CdkPipeline(this, 'pipeline', {
  cloudAssemblyArtifact,
  sourceAction,
  synthAction,
  cdkCliVersion: '1.74' // (Optional) Some Actions in the pipeline will download
  // and run a version of the CDK CLI. Specify the version here.
})
