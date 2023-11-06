# devplatform-template-validator
This repository contains a custom GitHub action that will integrate a jest framework to validate AWS CloudFormation Templates. It will ensure that your CloudFormation templates are well structured and follow best practices.

## Getting Started
### Prerequisites
Before using this custom GitHub Action, make sure you have the following prerequisites:
- Github Actions enabled for your repository
--------------
### Usage
Configure the template-validator by creating or updating one of your workflow files with the following content:

```
name: Example Validation

on:
 pull_request:

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
        - name: Checkout
          uses: actions/checkout@v4
        
        - name: Checkout
          uses: actions/checkout@v4
          with:
            repository: govuk-one-login/devplatform-template-validator
            path: templateValidator
            branch: main

        - name: Install dependencies
          run: npm install -C ./templateValidator
          shell: bash

        - name: Testing the devplatform-template-validator
          uses: govuk-one-login/devplatform-template-validator@latest
          with:
            templatePath: "./path-to-template" 
```

### Example workflow
The GitHub Action defined above performs the following steps:
1. Checks out the template-validator code
2. Installs required dependencies
3. Validates the CloudFormation template using the Jest framework and reports any issues

----------
## Inputs
This Action defines the following inputs:
|  Name  |  Required  |  Description  |
| :----: | :--------: | :-----------: |
`templatePath` | true | Provide the path to the template.yaml file within your repository. For example ./path-to/template.yaml 

-------

## Contributions

### Changelog
This repository contains a Changelog which tracks versions and changes, with guidance on how to update it. Changelog will run on push to main.

### Compiling Typescript
- Any changes to the index.ts file will require the user to run `npm build`. This will manually compile the new index.ts file into the main index.js.

### Tools Required
- pre-commit - ```pre-commit install```
