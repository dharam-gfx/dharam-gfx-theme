import { createHighlighter } from 'shiki';
import fs from 'fs';

async function generateTheme(id) {
    try {
        const highlighter = await createHighlighter( {
            themes: [id], // Specify the theme you want to use
            langs: ['javascript', 'typescript', 'swift', 'ruby', 'python', 'php', 'java', 'c#', 'c++', 'c', 'go', 'rust', 'kotlin', 'haskell', 'elixir', 'lua'], // Specify the language
        } );

        const themeData = highlighter.getTheme( id );
        fs.writeFileSync( `./themes/${id}-theme.json`, JSON.stringify( themeData, null, 2 ) );
    } catch ( error ) {
        console.error( 'Error generating theme:', error );
    }
}

const themeIds = [
    "andromeeda",
    "aurora-x",
    "ayu-dark",
    "catppuccin-frappe",
    "catppuccin-latte",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "dark-plus",
    "dracula",
    "dracula-soft",
    "everforest-dark",
    "everforest-light",
    "github-dark",
    "github-dark-default",
    "github-dark-dimmed",
    "github-dark-high-contrast",
    "github-light",
    "github-light-default",
    "github-light-high-contrast",
    "houston",
    "laserwave",
    "light-plus",
    "material-theme",
    "material-theme-darker",
    "material-theme-lighter",
    "material-theme-ocean",
    "material-theme-palenight",
    "min-dark",
    "min-light",
    "monokai",
    "night-owl",
    "nord",
    "one-dark-pro",
    "one-light",
    "plastic",
    "poimandres",
    "red",
    "rose-pine",
    "rose-pine-dawn",
    "rose-pine-moon",
    "slack-dark",
    "slack-ochin",
    "snazzy-light",
    "solarized-dark",
    "solarized-light",
    "synthwave-84",
    "tokyo-night",
    "vesper",
    "vitesse-black",
    "vitesse-dark",
    "vitesse-light"
];

themeIds.forEach( id => generateTheme(id) );