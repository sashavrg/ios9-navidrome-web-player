# Navidrome web Player for Legacy iOS Devices

a very lightweight, iOS 9-compatible web client for Navidrome/Subsonic servers, designed with a super simple aesthetic and a lot of room for imporvement. Pretty narrow use-case, but if you just found your old ipod touch or just added some web functionalities to your iPod classic and want to put to use that enormous self-hosted music library, this was made with exactly you in mind.

## features:

- works on older browsers (including iOS9 Safari)
- browse and play music from your Navidrome server
- secure credentials management
- simple and fast interface
- playlist management (coming)

## quick start:

1. clone the repository

    ```bash
    git clone https://github.com/sashavrg/ios9-navidrome-web-player.git
    cd ios9-navidrome-web-player
    ```
2. set up configuration

    - rename config.example.js to config.js
    - edit with your server details:

    ```javascript
    var CONFIG = {
        NAVIDROME_URL: 'https://your-server.duckdns.org',
        USERNAME: 'your-username',
        PASSWORD: 'your-password',
        CLIENT_NAME: 'iPodPlayer'
    };
    ```
3. open in browser

    - simply open index.html in any modern browser
    - for iOS 9 devices, host on a web server. I don't know how back with iOS version you can go with this, but 9 is definitely supported (safari-wise).

## contributing

contribution is more than welcome! please open an issue or pr for bug fixes, new features or improved compatibility.

## license

MIT (sasha vergolini)

Note: This project is not affiliated with Navidrome or Apple. iPod is a trademark of Apple Inc.