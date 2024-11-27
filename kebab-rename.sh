#!/bin/bash

# Exit on any error
set -e

# Check if directory is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 directory"
    exit 1
fi

directory="$1"

# Check if directory exists
if [ ! -d "$directory" ]; then
    echo "Error: Directory $directory does not exist"
    exit 1
fi

# Process each file in the directory
for file in "$directory"/*; do
    # Skip if not a file
    [ -f "$file" ] || continue

    filename=$(basename "$file")
    extension="${filename##*.}"
    basename="${filename%.*}"

    # Convert to kebab case:
    # 1. Insert hyphen before capitals
    # 2. Convert to lowercase
    # 3. Replace spaces and underscores with hyphens
    # 4. Remove duplicate hyphens
    # 5. Remove leading/trailing hyphens
    newname=$(echo "$basename" |
        sed -E 's/([A-Z])/-\1/g' |
        tr '[:upper:]' '[:lower:]' |
        tr ' _' '-' |
        sed -E 's/-+/-/g' |
        sed -E 's/^-+|-+$//g')

    # Add extension back
    newname="$newname.$extension"

    # Only rename if the name is different
    if [ "$filename" != "$newname" ]; then
        mv -v "$file" "$directory/$newname"
    fi
done

echo "Done!"
