const stringValue = ssm.StringParameter.fromStringParameterAttributes(this, 'my-ssm-param-value', {
  parameterName: 'param-name',
  // 'version' can be specified but is optional.
}).stringValue
