import * as core from '@actions/core';
import * as exec from '@actions/exec'
import { readFileSync } from 'fs';
import pkg from 'js-yaml';
const { load } = pkg;
const { schema } = require('yaml-cfn');
import * as path from 'path'

async function run() {
    try {
        // User inputs the path
        const templatePath = core.getInput('templatePath', { required: true });
        // Local Test
        // const templatePath = path.resolve("sam-deploy-pipeline/template.yaml")

        // check if the input has been provided or not, if not user will see an error
        if (!templatePath) {
            core.setFailed("the path of your template.yaml file is required, please provide it in your workflow as per the documentation")
            return;
        }

        //load content of the template.yaml file that the user has given the path to
        const templateContent: string = readFileSync(templatePath, 'utf8')
        const templateData: any = load(templateContent, { schema: schema })
        // grep description heading in the yaml file
        const templateDescription = templateData['Description'];
        const cwd = 'templateValidator'
        //checking if the description contains sam-deploy-pipeline line (will change to include all testable stacks after POC)
        if
            (templateDescription.includes("sam-deploy-pipeline"))
            // then run tests specific to the stack
            {await exec.exec('npm', ['test', '-w', 'sam-deploy-pipeline'], { cwd });
            } else {
                core.info("description of template doesn't contain the correct keyword");
            }
            } catch (error: any) {
                core.setFailed(error.message);
            }
    }
run();