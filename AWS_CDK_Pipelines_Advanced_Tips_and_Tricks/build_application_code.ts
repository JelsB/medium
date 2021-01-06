export class PipelineStack extends Stack {

  // ...

  const synthAction = SimpleSynthAction.standardNpmSynth({
    // ...
    buildCommand: 'npm run build',
    subdirectory: 'infrastructure'
  })

  const pipeline = new pipelines.CdkPipeline(this, 'pipeline', {
    // ...
    synthAction
  })

  // ...
}
