import { defineFeature, loadFeature, parseFeature } from 'jest-cucumber';
import { Template, Capture, Match } from '@aws-cdk/assertions';
const { schema } = require('yaml-cfn');
import { readFileSync } from 'fs';
import { load } from 'js-yaml';

    export const exportTemplate = () => {
        let yamltemplate: string = load(readFileSync('template.yaml', 'utf-8'), { schema: schema });
        template = Template.fromJSON(yamltemplate)
        return template
    }

    export const exportEmbeddedTemplate = () => {
        let yamltemplate: string = load(readFileSync('../template.yaml', 'utf-8'), { schema: schema });
        template = Template.fromJSON(yamltemplate)
        return template
    }
