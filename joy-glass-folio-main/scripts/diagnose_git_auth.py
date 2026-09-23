import subprocess
import os

git_exe = r'C:\Program Files\Git\cmd\git.exe'
cwd = r'c:\Users\DELL\Downloads\joy-glass-folio-main\joy-glass-folio-main'

def run(cmd):
    cmd_str = ' '.join(cmd)
    print(f'=== git {cmd_str} ===')
    res = subprocess.run([git_exe] + cmd, capture_output=True, text=True, cwd=cwd)
    print('STDOUT:\n' + res.stdout)
    if res.stderr:
        print('STDERR:\n' + res.stderr)
    return res

print('1. Git remote:')
run(['remote', '-v'])

print('2. Current branch:')
run(['branch', '--show-current'])

print('3. Testing ls-remote origin:')
run(['ls-remote', 'origin'])

print('4. Git config (credential, user):')
run(['config', '--list', '--show-origin'])

print('5. Check SSH key existence:')
ssh_dir = os.path.expanduser('~/.ssh')
if os.path.exists(ssh_dir):
    print('SSH files in', ssh_dir, ':', os.listdir(ssh_dir))
else:
    print('No ~/.ssh directory')

print('6. Check Windows Credential Manager / GCM:')
# Check if git credential manager is available
gcm_res = subprocess.run(['where', 'git-credential-manager'], capture_output=True, text=True)
print('GCM where:', gcm_res.stdout, gcm_res.stderr)
