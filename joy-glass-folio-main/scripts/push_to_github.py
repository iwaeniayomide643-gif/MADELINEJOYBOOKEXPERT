import subprocess
import os

git_exe = r'C:\Program Files\Git\cmd\git.exe'
cwd = r'c:\Users\DELL\Downloads\joy-glass-folio-main\joy-glass-folio-main'

def run(cmd_list):
    print('>>> RUNNING:', ' '.join(cmd_list))
    res = subprocess.run(cmd_list, capture_output=True, text=True, cwd=cwd)
    print('STDOUT:\n', res.stdout)
    if res.stderr:
        print('STDERR:\n', res.stderr)
    return res

# 1. Check existing remotes
res_remote = run([git_exe, 'remote', '-v'])
if 'origin' in res_remote.stdout:
    run([git_exe, 'remote', 'set-url', 'origin', 'https://github.com/iwaeniayomide643-gif/joy-glass-folio.git'])
else:
    run([git_exe, 'remote', 'add', 'origin', 'https://github.com/iwaeniayomide643-gif/joy-glass-folio.git'])

# 2. Stage all tracked and new files
run([git_exe, 'add', '.'])

# 3. Check status
run([git_exe, 'status'])

# 4. Commit
commit_msg = "feat: complete Author Ledger branding, 4K book trailers gallery, author websites, and review showcase"
run([git_exe, 'commit', '-m', commit_msg])

# 5. Set branch to main
run([git_exe, 'branch', '-M', 'main'])

# 6. Push to origin main
print('--- PUSHING TO GITHUB ---')
push_res = run([git_exe, 'push', '-u', 'origin', 'main'])
print('PUSH RESULT CODE:', push_res.returncode)
