# Prerender Service
## Require
`npm install -g forever` use forever or other node process management application
## Useage 
- `npm install`
- `forever start server.js`

## Nginx Config
```
location / {
    try_files $uri $uri/ =404;
    set $prerender 0;
    if ($http_user_agent ~* "baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot") {
        set $prerender 1;
    }
    if ($args ~ "_escaped_fragment_") {
        set $prerender 1;
    }
    if ($prerender = 1) {
        rewrite .* /$scheme://$host$request_uri? break;
        proxy_pass http://localhost:3000;
        # Assume that your prerender server is running on port 3000
    }
    if ($prerender = 0) {
        rewrite /jubaoping /;
        rewrite /about /;
        rewrite /contact /;
        rewrite /article /;
        rewrite /product /;
        rewrite /search /;
        rewrite /cart /;
        rewrite /user /;
        rewrite /shop /;
        rewrite /register /;
    }
}
```
