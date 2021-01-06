export class PipelineStack extends Stack {

  // ...
  const applicationCode = new Artifact('application')

  const synthAction = SimpleSynthAction.standardNpmSynth({
    // ...
    buildCommand: 'npm run build',
    subdirectory: 'infrastructure',
    additionalArtifacts: [
      {
        directory: '../code/target-dir-with-build-output',
        artifact: applicationCode
      }]
  })

  const pipeline = new pipelines.CdkPipeline(this, 'pipeline', {
    // ...
    synthAction
  })

  // ...

  // Deploy build application code to S3
  const deployCodeToS3 = new S3DeployAction({
    actionName: 'deployCode',
    bucket: s3.Bucket.fromBucketName(this, 'deploy-bucket', 'bucket-name'),
    input: applicationCode
  })

  // ...
}
