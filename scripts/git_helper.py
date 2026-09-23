import subprocess
import os

git_exe = r'C:\Program Files\Git\cmd\git.exe'

def run_git(*args):
    cmd = [git_exe] + list(args)
    res = subprocess.run(cmd, capture_output=True, text=True, cwd=r'c:\Users\DELL\Downloads\joy-glass-folio-main\joy-glass-folio-main')
    print('COMMAND:', ' '.join(cmd))
    print('RETURNCODE:', res.returncode)
    print('STDOUT:\n', res.stdout)
    if res.stderr:
        print('STDERR:\n', res.stderr)
    return res

print('--- CHECKING GIT STATUS ---')
run_git('status')

print('--- CHECKING REMOTES ---')
run_git('remote', '-v')

print('--- CHECKING BRANCHES ---')
run_git('branch', '-a')
