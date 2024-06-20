#!/bin/zsh

# Directory containing the original .svg files
DIRECTORY_ORIGIN="./src/assets/lucide-origin/"
# Directory where modified .svg files with var(--varIconColor) will be stored
DIRECTORY="./src/assets/lucide/"
# Directory where modified .svg files with #FFFFFF will be stored
DIRECTORY_WHITE="./src/assets/lucide-white/"
# Public directory where original .svg files will be copied
DIRECTORY_PUBLIC="./public/assets/lucide/"

# Check if the public directory exists, if not, create it
if [ ! -d "$DIRECTORY_PUBLIC" ]; then
    mkdir -p "$DIRECTORY_PUBLIC"
fi

# Copy all .svg files from the original directory to the public directory
cp -R "$DIRECTORY_ORIGIN"* "$DIRECTORY_PUBLIC"

# Check if the target directory exists, if not, create it
if [ ! -d "$DIRECTORY" ]; then
    mkdir -p "$DIRECTORY"
fi

# Copy all .svg files from the original directory to the target directory
cp -R "$DIRECTORY_ORIGIN"* "$DIRECTORY"

# Check if the white directory exists, if not, create it
if [ ! -d "$DIRECTORY_WHITE" ]; then
    mkdir -p "$DIRECTORY_WHITE"
fi

# Copy all .svg files from the original directory to the white directory
cp -R "$DIRECTORY_ORIGIN"* "$DIRECTORY_WHITE"

# Find all .svg files in the target directory and its subdirectories
find "$DIRECTORY" -type f -name "*.svg" | while read file; do
    # Save the original content of the file
    original_content=$(<"$file")

    # Replace the string 'stroke="something"' with 'stroke="var(--varIconColor)"'
    sed -i '' 's/stroke="[^"]*"/stroke="var(--varIconColor)"/g' "$file"

    # Extract filename without the full path
    filename=$(basename "$file")

    # Print only the filename
    echo "\"$filename\""
done

echo ":: SVG strokes renamed to var(--varIconColor) ::"

# Find all .svg files in the white directory and its subdirectories
find "$DIRECTORY_WHITE" -type f -name "*.svg" | while read file; do
    # Save the original content of the file
    original_content=$(<"$file")

    # Replace the string 'stroke="something"' with 'stroke="#FFFFFF"'
    sed -i '' 's/stroke="[^"]*"/stroke="#FFFFFF"/g' "$file"

    # Extract filename without the full path
    filename=$(basename "$file")

    # Print only the filename
    echo "\"$filename\""
done

echo ":: SVG strokes renamed to #FFFFFF ::"
