import { defineFeature, loadFeature, parseFeature } from 'jest-cucumber';
import * as core from '@actions/core';
import { Template, Capture, Match } from '@aws-cdk/assertions';
const { schema } = require('yaml-cfn');
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import * as path from 'path'

    export const exportTemplate = () => {      
        const templatePath = core.getInput('templatePath');
        const relativePath = path.join('..', '..', '..', templatePath)
        const templateContent: string = readFileSync(relativePath, 'utf8')
        const templateData: any = load(templateContent, { schema: schema })
        template = Template.fromJSON(templateData)
        return template
    }