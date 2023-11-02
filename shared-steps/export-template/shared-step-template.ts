import { defineFeature, loadFeature, parseFeature } from 'jest-cucumber';
import * as core from '@actions/core';
import { Template, Capture, Match } from '@aws-cdk/assertions';
const { schema } = require('yaml-cfn');
import { readFileSync } from 'fs';
import { load } from 'js-yaml';

    export const exportTemplate = () => {      
        const templatePath = core.getInput('templatePath');
        const templateContent: string = readFileSync(templatePath, 'utf8')
        const templateData: any = load(templateContent, { schema: schema })
        template = Template.fromJSON(templateData)
        return template
    }
