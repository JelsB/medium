export class TargetStage extends Stage {

  // ...

  // Create SSM reader
  const mySSMreader = new SSMParameterReader(this, 'reader-name', {
    parameterName: 'param-name',
    region: '<region-of-the-origin-stage>'
  })

  //   use the fetched param value
  const paramValue = mySSMreader.getParameterValue()
}
