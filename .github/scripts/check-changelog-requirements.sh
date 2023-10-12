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

UPDATE_CHANGELOG=false
# If the changelog has not been updated then stop:
if [[ $UPDATE_CHANGELOG != true ]]
    then
    echo "CHANGELOG.md need to be updated"
    exit 1
fi
done