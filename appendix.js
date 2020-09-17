const Appendix_Items = {
    "True Press": {
        Domain: {
            Name: "mocknexus.com",
            Provider: "Namecheap"
        },

        "Repository URL": ["github.com/nickBarak/Mock_Nexus-Generic"],

        "Rendering Methods": ["Server-Side", "Multi-Page", "Pre-Rendered"],
                
        Framework: {
            Title: "Next",
            Components: [
                "About",
                "AboutTheAuthor",
                "ArticleDisplay",
                "ArticlePreview",
                "CategoryPreview",
                "Comment",
                "CommentInputs",
                "CommentSection",
                "Footer",
                "Header",
                "Headlines",
                "MobileNav",
                "Nav",
                "Related",
                "Sidebar"
            ]
        },

        "Hosting Service": ["Heroku"],

        Database: {
            Type: "SQL",
            Service: "PostgreSQL",
            "Cloud Storage": "Heroku",
            Rows: "9,123",
            Size: "75.9MB",
            Architecture: {
                categories: [
                    "title ([PK] character varying)",
                    "articles (integer[])",
                    "subcategories (jsonb)"
                ],
                                   
                articles: [
                    "title (character varying)",
                    "category (character varying)",
                    "subcategory (character varying)",
                    "publish_date (date)",
                    "full_thumbnail (character varying)",
                    "mobile_thumbnail (character varying)",
                    "description (character varying)",
                    "content (character varying)",
                    "src_url (character varying)",
                    "id ([PK] integer)",
                    "author (character varying)",
                    "related (integer[])",
                    "comments (jsonb[])",
                    "followers (character varying[])"
                ],
                    
                authors: [
                    "id ([PK] integer)",
                    "name (character varying)",
                    "biography (character varying)",
                    "articles (integer[])",
                    "portrait (character varying)"
                ],
                          
                users: [
                    "name (character varying)",
                    "email ([PK] character varying)",
                    "comments (jsonb[])",
                    "following (integer[])"
                ]
            }
        },
                    
        "Static Page Count": ["11,429"],

        Dependencies: [
            "express",
            "isomorphic-unfetch",
            "next",
            "nodemailer",
            "pg",
            "react",
            "react-dom",
            "react-waypoint",
            "uuidv4"
        ],

        Routes: {
            "/": [],

            "/about": [
                "/advertising",
                "/donate",
                "/faq",
                "/join",
                "/legal-notices",
                "/staff-contact"
            ],

            "/articles/[id]": [],

            "/authors/[id]":
                ["/page[page]"],

            "/categories/[category]": {
                "/labyrinth":
                    ["/page/[page]"],
                "/[subcategory]": []
            },

            "/search/[value]":
                ["/page/[page]"]
        },

        "Cache Usage": ["Browser Session Storage"],

        API: {
            Decoupled: "false",
            Routes: {
                "/api": {
                    "/delete-comment":
                        { methods: ["DELETE"] },

                    "/fetch-article-data":
                        { methods: ["GET"] },

                    "/fetch-articles":
                        { methods: ["POST"] },

                    "/follow-article":
                        { methods: ["POST"] },

                    "/hottest-comment":
                        { methods: ["GET"] },

                    "/most-reacted-comment":
                        { methods: ["GET"] },

                    "/post-comment":
                        { methods: ["POST"] },

                    "/search":
                        { methods: ["GET"] },

                    "/search-extended":
                        { methods: ["GET"] }
                }
            }
        },

        Notes: ["All application data is dummy in production. However, it is based on real data scraped from dailynexus.com. A web-crawler was constructed with start URLs comprising all '/categories/[category]/[subcategory]' routes, and records of the extracted data were piped to the \"articles\" table of the database. A second spider was constructed to collect information for the \"authors\" table. During the build phase, all text is replaced with 'Lorem ipsum' dummy text and all images are replaced with images from the public picsum.photos API. The application bundle consists purely of pre-rendered, statically generated files using this dummy data. As a result, the files served to the client contain no trace of unauthorized content while maintaining a visual representation of a data-filled site."]
    
    },

    Choosie: {
        Domain: {
            Name: "choosie.us",
            Provider: "Namecheap"
        },
        "Repository URL": ["github.com/nickBarak/Choosie-React"],

        "Rendering Methods": ["Client-Side", "Single-page"],
                
        Framework: {
            Title: "React",
            Components: [
                "BinManager",
                "DelayLink",
                "Filter",
                "Footer",
                "Help",
                "Home",
                "Login",
                "Movie",
                "MovieList",
                "MyList",
                "Nav",
                "Popular",
                "Profile",
                "Query",
                "Register",
                "Search",
                "StarRater",
                "Toggler"
            ]
        },

        "Hosting Service": ["Netlify"],

        Database: {
            Type: "SQL",
            Service: "PostgreSQL",
            "Cloud Storage": "Heroku",
            Rows: "292,779",
            Size: "580.8MB",
            Architecture: {
                movie_data: [
                    "id ([PK] integer)",
                    "src_url (character varying)",
                    "genres (character varying[])",
                    "mpaa_rating (character_varying)",
                    "directors (character varying[])",
                    "writers (character varying[])",
                    "actors (character varying[])",
                    "release_date (date)",
                    "duration_in_mins (integer)",
                    "countries (character varying[])",
                    "languages (character varying[])",
                    "description (character varying)",
                    "times_saved (integer)",
                    "times_saved_this_month (integer)"
                ],

                movie_data_with_thumbnail:
                    ["same as above"],

                popular_most_saved:
                    ["same as above"],

                popular_most_saved_this_month:
                    ["same as above"],

                popular_recent_releases:
                    ["same as above"],

                popular_trending:
                    ["same as above"],

                sample_movie_data:
                    ["same as above"],
                
                users: [
                    "name (character varying)",
                    "email (character varying)",
                    "username ([PK] character varying)",
                    "password (character varying)",
                    "age (integer)",
                    "sex (character varying)",
                    "bins (jsonb)",
                    "languages (character varying[])",
                    "avg_session_length_in_mins (numeric)",
                    "start_clicks (integer)",
                    "my_list_clicks (integer)",
                    "popular_clicks (integer)",
                    "avg_search_rating (numeric)",
                    "search_history (character varying[])",
                    "currently_saved (integer[])",
                    "unsaved (integer[])",
                    "session_lengths_in_mins (numeric[])",
                    "show_save_history (boolean)",
                    "recent_save_history (integer[])",
                    "show_description_on_hover (boolean)",
                    "genre_selection (jsonb)"
                ]
            }
        },
                    
        "Static Page Count": ["1"],

        Dependencies: [
            "react",
            "react-dom",
            "react-redux",
            "react-router-dom",
            "redux",
            "redux-thunk",
            "uuidv4"
        ],

        Routes: [
            "/",

            "/search",

            "/movies",

            "/query",

            "/my-list",

            "/popular",

            "/help",

            "/register",
            
            "/profile"
        ],

        "Cache Usage": ["Redis Cloud Storage", "Browser Session Storage"],

        API: {
            Decoupled: "true",
                Subdomain: "true (\"api\")",
            "Repository URL": ["github.com/nickBarak/Choosie-Server"],
            "Hosting Service": ["Heroku"],
            Routes: {
                "/": {
                    "/home/[user]":
                        { methods: ["POST"] }
                },

                "/movies": {
                    methods: ["GET", "POST", "DELETE"],
                    "/list":
                        { methods: ["GET"] }
                },

                "/myList": {
                    methods: ["GET", "POST"],
                    "/createBin":
                        { methods: ["POST"] },
                    "/updateBin":
                        { methods: ["POST"] },
                    "/deleteBin":
                        { methods: ["POST"] }
                },

                "/popular":
                    { methods: ["GET"] },

                "/search": {
                    methods: ["POST"],
                    "/title":
                        { methods: ["GET"] },
                    "/people":
                        { methods: ["GET"] },
                    "/genre":
                        { methods: ["GET"] },
                    "/release-date":
                        { methods: ["GET"] },
                    "/age-rating":
                        { methods: ["GET"] },
                    "/cache":
                        { methods: ["GET"] }
                },

                "/start":
                    { methods: ["GET", "POST"] },

                "/users": {
                    methods: ["POST"],
                    "/validate":
                        { methods: ["POST"] },
                    "/check":
                        { methods: ["GET"] },
                    "/[user]":
                        { methods: ["GET", "PATCH", "PUT"] },
                        "/bins":
                            { methods: ["POST", "PUT", "DELETE", "PATCH"] }
                }
            },

            Dependencies: [
                "bcryptjs",
                "body-parser",
                "connect-redis",
                "cookie-parser",
                "cors",
                "dotenv",
                "express",
                "express-session",
                "multer",
                "node-fetch",
                "pg",
                "redis",
                "uuidv4"
            ]
        },
            
        Notes: ["All of the data for the application is pulled from IMDb. A web-crawler was constructed with a start URL for each genre page on the site, collecting data on individual titles. The Scrapy.py framework was used for this with the setting \"OBEY_TXT\" set to true, meaning that the spider is in full compliance with the robots.txt file provided by IMDb. Movie descriptions - which are unique to IMDb - are explicitly credited to IMDb on movie pages, with a link to the source URL."]

    },

    "SquareMatch": {
        Domain: {
            Name: "squarematch.xyz",
            Provider: "Namecheap"
        },

        "Repository URL": ["github.com/nickBarak/SquareMatch"],

        "Rendering Methods": ["Client-Side", "Multi-Page"],
                
        Framework: ["None"],

        "Hosting Service": ["Netlify"],

        Database: ["None"],
                    
        "Static Page Count": ["2"],

        Dependencies: ["None"],

        Routes: [
            "/",

            "/trace.html"
        ],

        "Cache Usage": ["Browser Local Storage"],

        API: ["None"],

        Notes: ["As a static, client-only site, the application is not able to store data in a secure database. A hash table is used in the local storage of the browser, with user emails as keys and user fastest times as values. The only form of authentication available is OAuth through trusted parties, and no sensitive information is accessed or stored. As acquiring a refresh token is not easily done in a client-only environment, no refresh tokens are used. As a result, the client's authentication status will not be automatically refreshed and users will be required to sign in again if their client's access token expires."]
    }
}