const overviews = {
    Home: 
        `I recently graduated from the University of California, Santa Barbara with a degree in Economics & Accounting. I am now pursuing a professional position as a software developer. I have self-studied coding rigorously throughout the later portion of my time in college and am prepared for a position in web development - though I am open to and interested in exploring other facets of the industry if needed.`,
    Apps:
        `In order to demonstrate the breadth of my abilities, I am showcasing two projects employing alternative rendering paradigms. The first is a server-side rendered multi-page application and a clone of the website for the student-run newspaper at my university. The second is a client-side rendered single-page application and is an information, recommendation and management service for movies.`,
    Skills:
        `I pride myself on my ability to bring a full project to completion from start to finish. As such, I have developed skills in both client- and server-side environments. These include a strong familiarity with the fundamental web technologies as well as knowledge and experience with things like routing, API development and database management. Much of my current workflow revolves around the React library.`,
    Appendix: 'Appendix Page'
}

const pageContent = {
    Apps: [
        [
            `Mock Nexus`,
            `<p>
                This clone of the UCSB newspaper site employs the Next.js framework to achieve server-side rendering as a React application. The app comprises routes "/categories," "/articles," "/authors" and "/about," with the "/categories" route extending into a "/subcategories" subroute. Pages in the "/categories" and "/authors" routes (as well as the "/subcategories" subroute) also include a "/page" subroute. The "/categories," "/articles" and "/authors" routes and all "/page" and "/subcategories" subroutes extend dynamically, with "/articles" and "/authors" including an [id] parameter and the others being self-explanatory. The use of Next.js' 'getStaticProps' and 'getStaticPaths' functions enabled application-wide pre-rendering of HTML, even among dynamic routes, ensuring miniscule load-times for all user-navigation.
            </p>
            <p> The application utilizes a PostgreSQL database architectured as follows: </p>
            
            <table>
                <tr>
                    <th>categories</th>
                    <td>title | [PK] character varying</td>
                    <td>articles | integer[]</td>
                    <td>subcategories | jsonb</td>
                </tr>
                <tr>
                    <th>articles</th>
                    <td>title | character varying</td>
                    <td>category | character varying</td>
                    <td>subcategory | character varying</td>
                    <td>publish_date | date</td>
                    <td>full_thumbnail | character varying</td>
                    <td>mobile_thumbnail | character varying</td>
                    <td>description | character varying</td>
                    <td>content | character varying</td>
                    <td>src_url | character varying</td>
                    <td>id | [PK] integer</td>
                    <td>author | character varying</td>
                    <td>related | integer[]</td>
                    <td>comments | jsonb[]</td>
                    <td>followers | character varying[]</td>
                </tr>
                <tr>
                    <th>authors</th>
                    <td>id | [PK] integer</td>
                    <td>name | character varying</td>
                    <td>biography | character varying</td>
                    <td>articles | integer[]</td>
                    <td>portrait | character varying</td>
                </tr>
                <tr>
                    <th>users</th>
                    <td>name | character varying</td>
                    <td>email | [PK] character varying</td>
                    <td>comments | jsonb[]</td>
                    <td>following | integer[]</td>
                </tr>
                <tr>
                    <th>traffic</th>
                    <td>...columns for each category and subcategory tracking visits (visiting subcategory page also increments respective category)</td>
                </tr>
            </table>

            <p>
                Most pages of the application are wrapped with a 'Layout' component which accepts parameters 'categories' and 'footerData'; The layout makes use of Next.js' 'Head' component to include FontAwesome and the 'Lato' font family from Google APIs, which serves as the default font across the application. At the top of the layout is a gray banner housing one of three ad spaces present in the layout. Just below this is a 'Header' component which accepts the categories parameter and drills it into a 'Nav' component which displays a list of links of category titles, each of which contains an additional list with links to all of that category's subcategory routes. All categories and subcategories are listed in alphabetical order, with an "About" list item succeeding the categories, containing a list of links to some "/about" pages.
            </p>
            <p>
                Above the 'Nav' component in the header is the logo and a strip of the current date, school name and icon links to dailynexus social media accounts. Below the header in the layout is a flex container with the children prop injected into the left item and a 'Sidebar' component in the right. The sidebar takes no parameters and renders the second ad space as well as a list of references to some external links and presentations of dailynexus activity. At the bottom of the layout is a 'Footer' component which accepts the footerData parameter. The footerData is optionally included and comprises properties 'page', 'highestPage', and 'route'. These properties are used to generate a pagination element in 'Footer' components where footerData is passed. Below this is a consistent navigation bar providing links to "/about" pages, some of which are not present in the header nav. Finally, the third ad space is attached to the bottom of the screen view in fixed-position, initially not displayed but activated upon the triggering of a scroll event.
            </p>
            <p>
                The index page includes a 'Headlines' component which takes in an array of headline articles passed as a parameter to the 'App' component itself, as well as a list of 'CategoryPreview' components which accept a data object representing a particular category. The 'Headlines' and 'CategoryPreview' components both display a short list of the most recently published articles among those passed to them, though in differing quantity and styles. These articles can be accessed by clicking their titles or "read more" link and the page of an article's author can be accessed by clicking on the his or her name. The 'Headlines' component also includes a banner of important news across the top.
            </p>
            <p>
                The "/categories/[category]", "/categories/[category]/[subcategory]" and "/authors/[id]" routes all follow the same design: rendering an "ArticleDisplay" component inside of a layout. The 'ArticleDisplay' component accepts 'heading', 'articles' and 'page' parameters. Underneath the heading, 15 articles are selected from the passed parameter from the index of the page parameter onward. Each of these articles is then passed to an 'ArticlePreview' component, along with an alternating boolean value for the 'imageLeft' parameter', which determines on which side to load the article's thumbnail image in the article preview. Aside from this, the 'ArticlePreview' component much resembles the 'CategoryPreview' component.
            </p>
            <p>
                Pages generated by the "/articles/[id]" route accept parameters 'article', 'author' and 'related'. Child components include an 'AboutTheAuthor', which accepts the author data, a 'Related' which accepts the array of related articles and a 'CommentSection' which accepts the comments associated with the article as well as the article id and followers. The page itself configures a heading based on data from the article and then loads the scraped content of the article which is stored within the article data as well. Many style adjustments must be made after the initial page render using element identifier methods on the document object through the use of React's 'useEffect' hook, as the elements of the content loaded from the article object are not accessible through traditional styling methods. The 'AboutTheAuthor' and 'Related' components are simple presentational components which display their respective data in a stylistic manner while also implementing links where necessary.
            </p>
            <p>
                The 'CommentSection' component introduces an unconventional design pattern in that it involves an authentication process in tandem with the posting of a comment, rather than before. Additionally, this is the sole process through which a user can register and at any point sign in. This process is handled within a 'CommentInputs' component, which accepts the 'following' status of the user if authenticated, the id of the article, a 'setMessage' function parameter which varies if replying to a comment rather than starting a thread, and the id of the parent comment if applicable (null at top level). Upon triggering a focus event on the comment input, if the user is not signed in, two additional inputs will emerge accepting values name and email. If the comment is posted with these fields blank, the comment will be posted in a normal manner but under an existing account of name "anonymous". If the fields are not blank, a post request will be sent to the route "/api/post-comment" where the email will be checked for validity and the name and email will be tested against the database in search of an existing user by means of the email primary key. If one exists and the name does not match, an error status will be returned and a message will be displayed stating as much. Names of different accounts need not be unique, however. If no existing account is found and the email passed is valid, a new account will be created. Finally, the comment will be posted and added to the user's data as well as the 'comments' column of the 'articles' table in the database. If the user was not already signed in, the user's email will be added to the session storage of the window under the key "email". A user can also elect to follow an article by clicking the bell icon next to the 'Post Comment' button. If the user is not signed in, the name and email inputs will emerge and the user will be prompted to fill them and click the bell icon again. If the user is signed in or the appropriate inputs are filled, a post request is sent to the route "/api/follow-article" where a similar process occurs in comparison to the "/api/post-comment" route, with the exchange of an update to the 'comments' column of the user and article for an update to the 'following' column. The database queries alternate between appending and removing array values depending on whether the user was following the article when the bell icon was clicked. The user's email will be added to session storage at the end of this successful process as well. The 'CommentInputs' component is present both at the top of the 'CommentSection' component and within all 'Comment' components, which are ordered by post date in a list at the bottom of the comment section.
            </p>
            <p>
                The "/about" route includes 9 static pages ('advertising', 'classified-ads', 'donate', 'faq', 'join', 'legal-notices', 'staff-contact', and the index) which use an 'About' component, taking a 'heading' parameter and providing a consistent theme.
            </p>
            <p>
                The database operates through an AWS EC2 server and the site is deployed through Netlify. The application utilizes a small internal API (via the "/api" route) to manage user/article comments and 'following' statuses. The clone was designed to resemble the model (dailynexus.com) as closely as possible in every aspect with the exception of the implementation of a responsive design in the clone. The presentational data for the site was collected by employing the Scrapy Python framework to develop a spider and crawl through dailynexus.com extensively.
            </p>`,
            [
                ['Live Demo', 'https://mock-nexus.com'],
                ['Model Site', 'https://dailynexus.com'],
                ['Code (App)', 'https://github.com/nickBarak/Mock_Nexus'],
                ['Code (Spider)', 'https://github.com/nickBarak/Nexus_Data_Crawler']
            ]
        ],
        [
            'Choosie',
            `<p>
                This application offers a truly 'app-like' experience and was designed with the concept of a mobile app in mind. Characteristic of this ambition are its smooth transitions, visually soft components and simplistic interface. It is a client-side rendered single-page application built with the React, React-Dom and React-Router-Dom libraries. It consists of routes "/query," "/popular," "/my-list," "/movies," and "/help," none of which extend further, aside from the "/movies" route extending dynamically to accept an [id] parameter. The navigation system is also designed such that a user can easily transition to almost any part of the application from every part of the application, excluding the "/help" route (which has access to the index page).
                <br><br>
                The structure of the PostgreSQL database designed for this application can be observed below.
            </p>
            
            <table>
                <tr>
                    <th>movie_data</th>
                    <td>id | [PK] integer</td>
                    <td>src_url | character varying</td>
                    <td>genres | character varying[]</td>
                    <td>mpaa_rating | character_varying</td>
                    <td>directors | character varying[]</td>
                    <td>writers | character varying[]</td>
                    <td>actors | character varying[]</td>
                    <td>release_date | date</td>
                    <td>duration_in_mins | integer</td>
                    <td>countries | character varying[]</td>
                    <td>languages | character varying[]</td>
                    <td>description | character varying</td>
                    <td>times_saved | integer</td>
                    <td>times_saved_this_month | integer</td>
                </tr>
                <tr>
                    <th>users</th>
                    <td>name | character varying</td>
                    <td>email | character varying</td>
                    <td>username | [PK] character varying</td>
                    <td>password | character varying</td>
                    <td>age | integer</td>
                    <td>sex | character varying</td>
                    <td>bins | jsonb</td>
                    <td>languages | character varying[]</td>
                    <td>avg_session_length_in_mins | numeric</td>
                    <td>start_clicks | integer</td>
                    <td>my_list_clicks | integer</td>
                    <td>popular_clicks | integer</td>
                    <td>avg_search_rating | numeric</td>
                    <td>search_history | character varying[]</td>
                    <td>currently_saved | integer[]</td>
                    <td>unsaved | integer[]</td>
                    <td>session_lengths_in_mins | numeric[]</td>
                    <td>show_save_history | boolean</td>
                    <td>recent_save_history | integer[]</td>
                    <td>show_description_on_hover | boolean</td>
                    <td>genre_selection | jsonb</td>
                </tr>
            </table>
            
            <p>
                Talk about components...
            </p>
            
            <p>
                Talk about: Redux...
                            AWS EC2 Database Server
                            Netlify Client Deployment
                            Heroku Server/API Deployment
                            IMDB Web Crawler
                            Passport.js Authentication
            </p>`,
            [
                ['Live Demo', 'https://choosie.us'],
                ['Code (Client)', 'https://github.com/nickBarak/Choosie-React'],
                ['Code (Server)', 'https://github.com/nickBarak/Choosie-Server'],
                ['Code (Spider)', 'https://github.com/nickBarak/Movie_Data_Crawler']
            ]
        ]
    ],
    Skills: [
        [`Multi-Paradigm Programming`, `JavaScript/Node`],
        [`Object-Oriented Programming`, `Python`],
        [`Strong/Explicit Typing`, `TypeScript`],
        [`Core Web Technologies`, `HTML/CSS`],
        [`Client-Side Rendering/Single-Page Applications`, `React/Redux`],
        [`Server-Side Rendering/Multi-Page Applications`, `Next, Express/EJS`],
        [`SQL Database Management`, `PostgreSQL`],
        [`NoSQL Database Management`, `MongoDB/Mongoose`],
        [`API Development/Client-Server Communication`, `REST/AJAX Protocols`],
        [`Authentication`, `Sessions/Cookies/Tokens, Passport`],
        [`Deployment/Hosting`, `Netlify, Heroku, Amazon Web Services`],
        [`Web-Scraping/Web-Crawling`, `Scrapy`],
        [`Client-Side-Routing`, `React-Router-Dom, Next`],
        [`Server-Side-Routing`, `Express`],
        [`Machine Learning`, `Keras/Tensorflow`],
        [`Data Structures & Algorithms`, `JavaScript`]
    ],
    Appendix: [
        { Choosie: [
            'Spider',
            'Complex Data Structures',
        ]},
        { 'Mock Nexus': [
            'Spider',
            'Complex Data Structures',
            'Labyrinth'
        ]},
    ]
}