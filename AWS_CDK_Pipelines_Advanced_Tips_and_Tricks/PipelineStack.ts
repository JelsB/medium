export class PipelineStack extends Stack {

  // ...

  // get configuration of spike environment
  const spikeProps = getStackConfigurationByEnvironment('spike')
  // get configuration of spike account with us-east-1 region
  const spikeUsEast1props = changeConfigurationRegion(spikeProps, 'us-east-1')
  // get configuration of development environment
  const devProps = getStackConfigurationByEnvironment('development')

  // Create stage for spike environment
  const spikeMyStage = new MyStage(this, 'spike-my-stage', spikeProps)
  // Create other stage for spike account with us-east-1 region
  const spikeMyStageUsEast = new MyStageUsEast(this, 'spike-my-stage-us-east-1', spikeUsEast1props)
  // Create stage for development environment
  const devMyStage = new MyStage(this, 'dev-my-stage', devProps)

  // ...
}
