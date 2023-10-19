import { defineFeature, loadFeature } from 'jest-cucumber';
import { Template, Capture, Match } from '@aws-cdk/assertions';
const { schema } = require('yaml-cfn');
import { exportTemplate } from '../../shared-steps/export-template/shared-step-template';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';

const feature = loadFeature('feature-tests/jest-features/LambdaSigning.feature');

defineFeature(feature, test => {
    test('A template can configure lambda to block deployment requests if signature validation checks fail', ({ given, then }) => {
        given('a template to deploy the sam-deploy pipeline', () => {
            exportTemplate()
        });
        then('it should enforce the UntrustedArtifactOnDeployment policy', () => {
            let found: any = template.findResources("AWS::Lambda::CodeSigningConfig")
            let statement = found["CodeSigningConfig"]["Properties"]["CodeSigningPolicies"]
            expect(statement).toEqual({"UntrustedArtifactOnDeployment":"Enforce"})
        });
    });
})