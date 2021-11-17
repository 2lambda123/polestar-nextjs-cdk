import { NextJSAtEdge } from '../../../../src/cdk';
import * as cdk from '@aws-cdk/core';

export interface NextjsCdkTestStackProps extends cdk.StackProps {
  nextjsCDKBuildOutDir: string;
}

export class NextjsCdkTestStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: NextjsCdkTestStackProps,
  ) {
    super(scope, id, props);

    const app = new NextJSAtEdge(this, id, props);

    new cdk.CfnOutput(this, 'Domain', {
      value: app.distribution?.domainName || 'n/a',
      description: 'CloudFrontDomain',
    });
    new cdk.CfnOutput(this, 'ID', {
      value: app.distribution?.distributionId || 'n/a',
      description: 'DistributionID',
    });
  }
}
