Feature: Lambda Signing 

    Scenario: A template can configure lambda to block deployment requests if signature validation checks fail
        Given a template to deploy the sam-deploy pipeline
        Then it should enforce the UntrustedArtifactOnDeployment policy