#!/usr/bin/env bash

set -eu

# See if the change is to a stack
rootModified=false


for item in $(git diff-tree -m --no-commit-id --name-only HEAD | sort | uniq); do
    echo $item
if [ -f $item ]; # test if item is a file
then
    echo "Changelog modified"
    rootModified=true
fi
done

# See if the change is to a stack
UPDATE_CHANGELOG=false
if [[ rootModified=true ]]
    then
       UPDATE_CHANGELOG=true
       echo "UPDATE_CHANGELOG=true"
       echo "UPDATE_CHANGELOG=true" >> $GITHUB_ENV

       CHANGELOG_FILE=CHANGELOG.md
       echo "CHANGELOG_FILE=CHANGELOG.md"
       echo "CHANGELOG_FILE=CHANGELOG.md" >> $GITHUB_ENV
fi
    # If the updated stack has not had the changelog updated then stop:
if [[ $UPDATE_CHANGELOG != true ]]
    then
    echo "Stack Directory $STACK_NAME needs $STACK_NAME/CHANGELOG.md to be updated"
    exit 1
fi
