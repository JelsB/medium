export class OriginStack extends Stack {

  // ...

  const param = new ssm.StringParameter(this, 'my-ssm-param', {
    parameterName: 'param-name',
    description: 'description of this param',
    stringValue: this.myParamValue as string
  })
}
