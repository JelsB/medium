from pathlib import Path
import sys
import subprocess

# Simple script which automatically creates GitHub gists using the GitHub CLI
# Note that you must be authenticated in the GitHub CLI
dir = Path(sys.argv[1])
for file in dir.iterdir():
    subprocess.run(['gh', 'gist', 'create', '--public', file])
