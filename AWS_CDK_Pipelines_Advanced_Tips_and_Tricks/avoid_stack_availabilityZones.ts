export class VpcStack extends Stack {

  // ...

  public get availabilityZones(): string[] {
    return ['eu-west-1a', 'eu-west-1b', 'eu-west-1c']
  }
}
