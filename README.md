# Notes:
gh-pages is installed **locally**, and therefore cannot be called directly in the CLI.
Instead, use ```npx gh-pages ${COMMAND}```

The ```predeploy``` script *should* run before the ```deploy``` script. \
This works on:
- [x] Windows
- [] Kubuntu (Untested)

Vite needs a ```base``` set in ```vite-config.js```. 
Since this is a project page  deploying to ```https://Anton-Pan.github.io/CMPT-276-Mini-Project/```) ```base``` should be set to ```/CMPT-276-Mini-Project/```.

